import type { ImgHTMLAttributes } from "react";
import { withBase } from "@/lib/base";
import { imageDimensions } from "@/lib/image-dimensions.generated";
import { avifFiles, webpFiles } from "@/lib/image-variants.generated";
import { cn } from "@/lib/cn";

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

function publicPath(src: string) {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  return src.startsWith(base) ? src.slice(base.length) : src;
}

function imgOnlyClass(className?: string) {
  const tokens = (className ?? "").split(/\s+/).filter(Boolean);
  const keep = tokens.filter((token) =>
    /^(object-|mix-blend-|image-grade|opacity-|transition-|duration-|group-hover:)/.test(token),
  );
  return cn("h-full w-full", keep);
}

export function OptimizedImage({
  src,
  width,
  height,
  loading,
  fetchPriority,
  priority = false,
  className,
  ...props
}: OptimizedImageProps) {
  if (typeof src !== "string") {
    return <img src={src} width={width} height={height} className={className} {...props} />;
  }

  const path = publicPath(src);
  const dimensions = imageDimensions[path];
  const modern = /\.(jpe?g|png)$/i.test(path);
  const base = path.replace(/\.(jpe?g|png)$/i, "");
  const avif = modern && avifFiles.has(`${base}.avif`);
  const webp = modern && webpFiles.has(`${base}.webp`);

  const image = (
    <img
      src={src}
      width={width ?? dimensions?.width}
      height={height ?? dimensions?.height}
      loading={priority ? "eager" : (loading ?? "lazy")}
      fetchPriority={priority ? "high" : fetchPriority}
      decoding="async"
      className={avif || webp ? imgOnlyClass(className) : className}
      {...props}
    />
  );

  if (!avif && !webp) return image;

  return (
    <picture className={className}>
      {avif ? <source srcSet={withBase(`${base}.avif`)} type="image/avif" /> : null}
      {webp ? <source srcSet={withBase(`${base}.webp`)} type="image/webp" /> : null}
      {image}
    </picture>
  );
}
