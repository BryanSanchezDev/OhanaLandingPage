const UTM_KEYS = ["utm_source", "utm_campaign", "utm_medium", "utm_content", "utm_term"];

function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  const utms = {};

  UTM_KEYS.forEach((key) => {
    utms[key] = params.get(key) || "";
  });

  return utms;
}

function appendUTMsToExternalLinks() {
  const utms = getUTMParams();
  const activeUtms = Object.entries(utms).filter(([, value]) => value !== "");

  if (activeUtms.length === 0) return;

  document.querySelectorAll('a[href*="skool.com"]').forEach((link) => {
    try {
      const url = new URL(link.href);
      activeUtms.forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
      link.href = url.toString();
    } catch (err) {
      // Malformed href — leave it untouched.
    }
  });
}

export { getUTMParams, appendUTMsToExternalLinks };
