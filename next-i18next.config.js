module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
  fallbackLng: {
    default: ["es"],
  },
  localePath:
    typeof window === "undefined" ? require("path").resolve("./public/locales") : "/locales",
};
