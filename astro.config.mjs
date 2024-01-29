import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://paulies-astro-blog.netlify.app/",
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
