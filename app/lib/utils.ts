export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const sizes: string[] = ["Bytes", "KB", "MB", "GB", "TB"];
  const i: number = Math.floor(Math.log(bytes) / Math.log(1024));

  const value: number = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));

  return `${value} ${sizes[i]}`;
}
