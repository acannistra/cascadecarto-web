import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "http://cascadecarto.org",
  image: {
    domains: ["images.unsplash.com"]
  },
  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "en",
      // All urls that don't contain `fr` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
      locales: {
        en: "en",
      }
    }
  }), compressor({
    gzip: false,
    brotli: true
  }), icon({
    iconDir: "src/icons",
    include: {
      mdi: ["*"],
    }
  })],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  }
});