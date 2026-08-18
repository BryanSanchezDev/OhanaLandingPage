const { TableClient } = require("@azure/data-tables");
const { Resend } = require("resend");

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

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildWelcomeEmail(firstName, skoolUrl) {
  const name = escapeHtml(firstName || "there");

  const html = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
    </style>
    <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f0f9ff; padding: 32px 16px; margin: 0;">
      <div style="max-width: 480px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden;">
        <div style="padding: 36px 32px 8px;">
          <h1 style="margin: 0 0 16px; color: #1d4ed8; font-size: 1.6rem; font-weight: 800;">
            Hey ${name}!
          </h1>
          <p style="margin: 0 0 24px; color: #334155; font-size: 1rem; line-height: 1.65;">
            Bienvenido to the ohana! You just joined a community of families who use AI to plan smarter, less stressful trips together &mdash; including families navigating accessibility needs and food allergies. We've got your back every step of the way, from the first "where should we go?" to the last packed suitcase.
          </p>
          <div style="text-align: center; margin: 0 0 32px;">
            <a
              href="${skoolUrl}"
              style="display: inline-block; background-color: #fb923c; color: #ffffff; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 14px 28px; border-radius: 100px;"
            >
              Join the Free Community &rarr;
            </a>
          </div>
        </div>
        <div style="padding: 20px 32px 28px; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 8px; color: #34d399; font-size: 0.95rem; font-weight: 700;">
            Pura vida. 🌿
          </p>
          <p style="margin: 0; color: #94a3b8; font-size: 0.78rem; line-height: 1.5;">
            You're receiving this because you signed up at AI Ohana Travel Academy. Didn't mean to? No worries &mdash; just ignore this email and you won't hear from us again unless you join.
          </p>
        </div>
      </div>
    </div>
  `;

  const text = `Hey ${firstName || "there"}!

Bienvenido to the ohana! You just joined a community of families who use AI to plan smarter, less stressful trips together, including families navigating accessibility needs and food allergies. We've got your back every step of the way, from the first "where should we go?" to the last packed suitcase.

Join the free community: ${skoolUrl}

Pura vida. 🌿

You're receiving this because you signed up at AI Ohana Travel Academy. Didn't mean to? No worries, just ignore this email and you won't hear from us again unless you join.`;

  return { html, text };
}

async function sendWelcomeEmail(context, email, firstName) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { html, text } = buildWelcomeEmail(firstName, process.env.SKOOL_URL);

  await resend.emails.send({
    from: `Bryan | Ohana Travel Academy <${process.env.SENDER_EMAIL}>`,
    to: email,
    subject: "Welcome to Ohana Travel Academy 🌿",
    html,
    text,
  });
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
    const firstName = body.firstName || "";

    await tableClient.createEntity({
      partitionKey: "leads",
      rowKey,
      email,
      firstName,
      utmSource: body.utmSource || "organic",
      utmCampaign: body.utmCampaign || "none",
      utmMedium: body.utmMedium || "",
      utmContent: body.utmContent || "",
      utmTerm: body.utmTerm || "",
      signupDate: new Date().toISOString(),
      convertedToSkool: false,
    });

    try {
      await sendWelcomeEmail(context, email, firstName);
    } catch (emailErr) {
      // Lead is already saved — don't fail the request over a delivery hiccup.
      context.log.error("subscribe function — welcome email failed:", emailErr);
    }

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
