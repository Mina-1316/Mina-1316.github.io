import path from "node:path";

export function getContentKey(filePath: string) {
  let pathSlice = filePath.split("/");

  // Remove the file extension
  const fileName = pathSlice[pathSlice.length - 1].split(".")[0];

  if (fileName === "index") {
    return pathSlice[pathSlice.length - 2];
  }

  return fileName;
}
