import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://yoursite.com",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  integrations: [tailwind(), icon()],
});
