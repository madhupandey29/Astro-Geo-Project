export type CloudinaryFormat =
  | "f_auto"
  | "f_avif"
  | "f_webp"
  | "f_jpg"
  | `f_${string}`;

export type CloudinaryCropMode = "fill" | "limit";

export interface CloudinaryUrlOptions {
  width: number;
  aspectWidth?: number;
  aspectHeight?: number;
  crop?: CloudinaryCropMode;
  gravity?: string;
  format?: CloudinaryFormat;
  quality?: string;
  progressive?: boolean;
  extra?: string[];
}

export function isCloudinaryUrl(url: string | null | undefined): url is string {
  return typeof url === "string" && url.includes("res.cloudinary.com") && url.includes("/upload/");
}

/**
 * Strip any existing Cloudinary transforms from a URL and inject new ones.
 * Works with or without a version segment (v1234...).
 */
export function rebuildCloudinaryUrl(url: string, transforms: string): string {
  const uploadIdx = url.indexOf("/upload/");
  if (uploadIdx === -1) return url;

  const base = url.slice(0, uploadIdx + "/upload/".length);
  const rest = url.slice(base.length);

  const transformSegment = /^[a-z]_/;
  const versionSegment = /^v\d+$/;
  const segments = rest.split("/");

  let i = 0;
  while (i < segments.length) {
    const segment = segments[i];
    if (versionSegment.test(segment)) break;
    if (segment.includes(",") || transformSegment.test(segment)) {
      i += 1;
      continue;
    }
    break;
  }

  const publicPart = segments.slice(i).join("/");
  return `${base}${transforms}/${publicPart}`;
}

function buildCloudinaryTransform({
  width,
  aspectWidth,
  aspectHeight,
  crop = "limit",
  gravity = "auto",
  format = "f_auto",
  quality = "q_auto",
  progressive = false,
  extra = [],
}: CloudinaryUrlOptions): string {
  const parts = [format, quality];

  if (progressive) parts.push("fl_progressive");

  if (crop === "fill") {
    parts.push("c_fill");
    if (gravity) parts.push(`g_${gravity}`);
  } else {
    parts.push("c_limit");
  }

  parts.push(`w_${Math.round(width)}`);

  if (crop === "fill" && aspectWidth && aspectHeight) {
    const height = Math.max(1, Math.round((width * aspectHeight) / aspectWidth));
    parts.push(`h_${height}`);
  }

  parts.push(...extra);
  return parts.join(",");
}

export function buildCloudinaryUrl(
  sourceUrl: string | null | undefined,
  options: CloudinaryUrlOptions,
): string {
  if (!isCloudinaryUrl(sourceUrl)) return sourceUrl ?? "";
  return rebuildCloudinaryUrl(sourceUrl, buildCloudinaryTransform(options));
}

export function buildCloudinarySrcset(
  sourceUrl: string | null | undefined,
  widths: number[],
  options: Omit<CloudinaryUrlOptions, "width"> = {},
): string {
  if (!sourceUrl) return "";

  const uniqueWidths = Array.from(
    new Set(widths.map((width) => Math.round(width)).filter((width) => width > 0)),
  ).sort((a, b) => a - b);

  return uniqueWidths
    .map((width) => `${buildCloudinaryUrl(sourceUrl, { ...options, width })} ${width}w`)
    .join(", ");
}
