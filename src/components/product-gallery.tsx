import { useEffect, useMemo, useState } from "react";
import { withBase } from "@/lib/base";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/cn";
import { OptimizedImage } from "./optimized-image";

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  productImage?: boolean;
};

function contextImage(product: Product) {
  if (product.uses.includes("events") || product.uses.includes("mobiel")) {
    return {
      src: withBase("/worlds/world-event.jpg"),
      alt: `${product.name} in een mobiele eventopstelling`,
      label: "Events",
    };
  }
  if (product.uses.includes("onder-bar")) {
    return {
      src: withBase("/worlds/world-install.jpg"),
      alt: `${product.name} in een professionele installatie`,
      label: "Installatie",
    };
  }
  return {
    src: withBase("/worlds/world-bar.jpg"),
    alt: `${product.name} voor gebruik in de horeca`,
    label: "Horeca",
  };
}

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const images = useMemo<GalleryImage[]>(
    () => [
      {
        src: product.image,
        alt: product.alt,
        label: product.imageKind === "diagram" ? "Producttekening" : "Product",
        productImage: true,
      },
      contextImage(product),
      {
        src: withBase("/worlds/statement-tap.jpg"),
        alt: `Professionele tapopstelling passend bij ${product.name}`,
        label: "Tapopstelling",
      },
    ],
    [product],
  );

  useEffect(() => setActive(0), [product.id]);

  const selected = images[active] ?? images[0];

  return (
    <div className="product-gallery border-b border-line lg:border-r lg:border-b-0">
      <div
        className={cn(
          "product-gallery-stage product-visual relative",
          selected.productImage && product.imageKind === "diagram" ? "is-diagram" : "",
        )}
      >
        <OptimizedImage
          key={selected.src}
          src={selected.src}
          alt={selected.alt}
          width={1400}
          height={1400}
          priority={active === 0}
          className={cn(
            "product-gallery-main",
            selected.productImage ? "object-contain" : "image-grade object-cover",
            selected.productImage && product.imageKind === "diagram" ? "mix-blend-multiply" : "",
          )}
        />
        <span className="product-gallery-label">{selected.label}</span>
        <span className="product-gallery-count spec-num" aria-hidden>
          {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>

      <div className="product-gallery-thumbs" aria-label={`Beeldgalerij van ${product.name}`}>
        {images.map((image, index) => (
          <button
            key={`${image.src}-${image.label}`}
            type="button"
            className={cn("product-gallery-thumb", active === index && "is-active")}
            aria-label={`Toon beeld ${index + 1}: ${image.label}`}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            <OptimizedImage
              src={image.src}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              className={cn(
                image.productImage ? "object-contain" : "image-grade object-cover",
                image.productImage && product.imageKind === "diagram" ? "mix-blend-multiply" : "",
              )}
            />
            <span>{image.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
