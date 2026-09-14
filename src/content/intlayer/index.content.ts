import { t, type Dictionary } from "intlayer";

const indexContent = {
  key: "index",
  content: {
    text: t({
      en: "main text",
      ko: "메인 텍스트",
    }),
  },
} satisfies Dictionary;

export default indexContent;
