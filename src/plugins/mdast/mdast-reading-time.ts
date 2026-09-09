// https://docs.astro.build/en/recipes/reading-time/

import getReadingTime from "reading-time";
import { defineMdastPlugin } from "satteri";

export const mdastReadingTimePlugin = defineMdastPlugin({
  name: "mdast-reading-time",
  after(root, context) {
    if (context.data.astro === undefined) return;

    // Get the text content of the current page
    // (we're doing this at the end of the plugin, so the MDX content
    //  has already been transformed into a string)
    const textOnPage = context.textContent(root);
    const readingTime = getReadingTime(textOnPage);

    console.log(readingTime);

    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    context.data.astro.frontmatter.minutesRead = readingTime.minutes;
  },
});
