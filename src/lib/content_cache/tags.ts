import { getCollection } from "astro:content";

let tagsPromise: ReturnType<typeof getCollection<"tags">> | undefined;

export function getTags() {
  return (tagsPromise ??= getCollection("tags"));
}

export async function getTagsMap() {
  const tags = await getTags();
  return new Map(tags.map((tag) => [tag.id, tag]));
}
