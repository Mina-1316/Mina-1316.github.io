import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.KOREAN],
    defaultLocale: Locales.KOREAN,
  },
  routing: {
    mode: "prefix-no-default",
    enableProxy: false,
  },
};

export default config;
