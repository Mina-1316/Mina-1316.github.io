import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { defineMdastPlugin } from "satteri";

export const MdastModifiedDatePlugin = defineMdastPlugin({
  name: "mdast-modified-date",
  before(node, context) {
    // Check file actually exists.
    if (!context.fileURL) return;
    if (context.data.astro === undefined) return;
    const filepath = fileURLToPath(context.fileURL);
    try {
      const moodifiedDate = execSync(
        `git log -1 --pretty="format:%cI" ${filepath}`,
      );

      context.data.astro.frontmatter.pubDate = moodifiedDate.toString();
    } catch (e) {
      // this means - date not exists because file is not commited, or some reason - so change to current date
      console.log(`[ModifiedDatePlugin]: "${filepath} - not found`);
      context.data.astro.frontmatter.pubDate = new Date().toString();
    }
  },
});
