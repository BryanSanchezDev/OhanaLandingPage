const { TableClient } = require("@azure/data-tables");

// Falls back to the default *.azurestaticapps.net hostname for this SWA
// resource; override with a custom domain via the ALLOWED_ORIGIN app setting.
const ALLOWED_ORIGIN =
  process.env.ALLOWED_ORIGIN || "https://icy-stone-079489510.azurestaticapps.net";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function randomSuffix(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

module.exports = async function (context, req) {
  if (req.method === "OPTIONS") {
    context.res = { status: 204, headers: corsHeaders() };
    return;
  }

  const body = req.body || {};
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!email || !email.includes("@")) {
    context.res = {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders() },
      body: { error: "Invalid email" },
    };
    return;
  }

  try {
    const tableClient = TableClient.fromConnectionString(
      process.env.AZURE_STORAGE_CONNECTION_STRING,
      "leads"
    );

    try {
      await tableClient.createTable();
    } catch (err) {
      if (err.statusCode !== 409) throw err;
    }

    const rowKey = `${Date.now()}-${randomSuffix(9)}`;

    await tableClient.createEntity({
      partitionKey: "leads",
      rowKey,
      email,
      firstName: body.firstName || "",
      utmSource: body.utmSource || "organic",
      utmCampaign: body.utmCampaign || "none",
      signupDate: new Date().toISOString(),
      convertedToSkool: false,
    });

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders() },
      body: { success: true },
    };
  } catch (err) {
    context.log.error("subscribe function error:", err);
    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders() },
      body: { error: "Server error" },
    };
  }
};
