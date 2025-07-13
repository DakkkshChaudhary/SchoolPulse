const hbs = require("hbs");

hbs.registerHelper("siteName", () => {
  return process.env.SITE_NAME;
});

hbs.registerHelper("siteEmail", () => {
  return process.env.SITE_EMAIL;
});

hbs.registerHelper("sitePhone", () => {
  return process.env.SITE_PHONE;
});

hbs.registerHelper("siteWhatsApp", () => {
  return process.env.SITE_WHATSAPP;
});

hbs.registerHelper("siteGoogleMap1", () => {
  return process.env.SITE_GOOGLE_MAP1;
});

hbs.registerHelper("siteGoogleMap2", () => {
  return process.env.SITE_GOOGLE_MAP2;
});

hbs.registerHelper("siteFacebook", () => {
  return process.env.SITE_FACEBOOK;
});

hbs.registerHelper("siteTwitter", () => {
  return process.env.SITE_TWITTER;
});

hbs.registerHelper("siteInstagram", () => {
  return process.env.SITE_INSTAGRAM;
});

hbs.registerHelper("siteLinkedIn", () => {
  return process.env.SITE_LINKEDIN;
});

hbs.registerHelper("siteYouTube", () => {
  return process.env.SITE_YOUTUBE;
});

hbs.registerHelper("siteAddress", () => {
  return process.env.SITE_ADDRESS;
});

hbs.registerHelper("isActiveClass", (currentUrl, pageUrl) => {
  return currentUrl === pageUrl ? "active" : "" 
});
