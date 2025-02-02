module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "https://res.cloudinary.com"],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://res.cloudinary.com",
          ],
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "'unsafe-eval'",
            "https:",
          ],
          "style-src": ["'self'", "'unsafe-inline'", "https:"],
          "font-src": ["'self'", "data:", "https:"],
          "connect-src": ["'self'", "https:", "http://localhost:1337"],
          "frame-src": ["'self'", "https:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: '*',
      methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
      headers: '*',
      keepHeadersOnError: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
