import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://paulies-astro-blog.netlify.app/",
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  integrations: [preact()]
});