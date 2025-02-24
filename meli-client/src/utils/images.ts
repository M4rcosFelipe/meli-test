export function getImageUrlByMediaId(
  thumbnailId: string,
  size: "large" | "small"
) {
  if (size == "large") {
    return `https://http2.mlstatic.com/D_${thumbnailId}-O.webp`;
  }

  return `https://http2.mlstatic.com/D_${thumbnailId}-A.webp`;
}
