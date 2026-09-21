import type { ImgHTMLAttributes } from "react";
import { withBase } from "@/lib/base";
import { imageDimensions } from "@/lib/image-dimensions.generated";

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

function publicPath(src: string) {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  return src.startsWith(base) ? src.slice(base.length) : src;
}

export function OptimizedImage({
  src,
  width,
  height,
  loading,
  fetchPriority,
  priority = false,
  ...props
}: OptimizedImageProps) {
  if (typeof src !== "string") return <img src={src} width={width} height={height} {...props} />;

  const path = publicPath(src);
  const dimensions = imageDimensions[path];
  const modern = /\.(jpe?g|png)$/i.test(path);
  const base = path.replace(/\.(jpe?g|png)$/i, "");
  const image = (
    <img
      src={src}
      width={width ?? dimensions?.width}
      height={height ?? dimensions?.height}
      loading={priority ? "eager" : (loading ?? "lazy")}
      fetchPriority={priority ? "high" : fetchPriority}
      decoding="async"
      {...props}
    />
  );

  if (!modern) return image;

  return (
    <picture className="contents">
      <source srcSet={withBase(`${base}.avif`)} type="image/avif" />
      <source srcSet={withBase(`${base}.webp`)} type="image/webp" />
      {image}
    </picture>
  );
}
