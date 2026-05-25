import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["sq", "en", "mk", "de"],
  defaultLocale: "sq",
  localePrefix: "always"
});