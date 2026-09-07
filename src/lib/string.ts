export function removePrefix(input: string, prefix: string): string {
  if (input.startsWith(prefix)) {
    return input.substring(prefix.length);
  } else {
    return input;
  }
}
