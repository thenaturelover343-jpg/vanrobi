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

/** Classes that must live on <img>, never on <picture> (Safari compositing). */
const IMG_ONLY =
  /^(object-|mix-blend-|image-grade|opacity-|transition-|duration-|ease-|delay-|group-hover:|will-change-)/;

function splitImageClass(className?: string) {
  const tokens = (className ?? "").split(/\s+/).filter(Boolean);
  const imgTokens = tokens.filter((token) => IMG_ONLY.test(token));
  const layoutTokens = tokens.filter((token) => !IMG_ONLY.test(token));
  return {
    pictureClass: cn(layoutTokens),
    imgClass: cn("h-full w-full", imgTokens),
  };
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
  const { pictureClass, imgClass } = splitImageClass(className);

  const image = (
    <img
      src={src}
      width={width ?? dimensions?.width}
      height={height ?? dimensions?.height}
      loading={priority ? "eager" : (loading ?? "lazy")}
      fetchPriority={priority ? "high" : fetchPriority}
      decoding="async"
      data-vr-src={src}
      className={avif || webp ? imgClass : className}
      {...props}
    />
  );

  if (!avif && !webp) return image;

  return (
    <picture className={pictureClass}>
      {avif ? <source srcSet={withBase(`${base}.avif`)} type="image/avif" /> : null}
      {webp ? <source srcSet={withBase(`${base}.webp`)} type="image/webp" /> : null}
      {image}
    </picture>
  );
}
