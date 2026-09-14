import path from "node:path";

export function getContentKey(filePath: string) {
  let pathSlice = filePath.split("/");
  // Strip the first prefixes - src/content/posts
  pathSlice.splice(0, 3);

  // Remove the file extension
  const fileName = pathSlice[pathSlice.length - 1]
    .split(".")
    .slice(0, -1)
    .join(".");
  pathSlice[pathSlice.length - 1] = fileName;

  if (fileName === "index") {
    pathSlice.pop();
  }

  return pathSlice.join("/");
}
