import { t, type Dictionary } from "intlayer";

const postsContent = {
  key: "posts",
  content: {
    title: t({
      en: "Recent Writings",
      ko: "최근 작성된 글",
    }),
    description_1: t({
      en: "Writings about my experiences, thoughts, and interests.",
      ko: "여러분께 이야기하고 싶은 경험, 생각, 관심사를 공유합니다.",
    }),
    description_2: t({
      en: "Roughly two posts per month - but I try to post as often as possible.",
      ko: "한달에 약 2개 정도의 글을 올리지만, 가능한 한 자주 올리기 위해 노력합니다.",
    }),
  },
} satisfies Dictionary;

export default postsContent;
