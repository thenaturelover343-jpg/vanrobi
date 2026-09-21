import { useEffect } from "react";

function toJpeg(url: string) {
  return url.replace(/\.(avif|webp)(\?.*)?$/i, ".jpg$2");
}

/** Safari/iOS shows a "?" if a <picture> source 404s. Fall back to jpg, then hide. */
export function recoverBrokenImage(img: HTMLImageElement) {
  if (img.dataset.vrImg === "hidden" || img.dataset.vrBusy === "1") return;
  img.closest("picture")?.querySelectorAll("source").forEach((node) => node.remove());
  const fallback =
    img.getAttribute("data-vr-src") || toJpeg(img.currentSrc || img.getAttribute("src") || "");
  if (img.dataset.vrImg === "retried" || !fallback) {
    img.dataset.vrImg = "hidden";
    img.style.visibility = "hidden";
    img.alt = "";
    return;
  }
  img.dataset.vrBusy = "1";
  img.dataset.vrImg = "retried";
  img.removeAttribute("src");
  img.src = fallback;
  img.addEventListener(
    "load",
    () => {
      img.dataset.vrBusy = "0";
    },
    { once: true },
  );
}

export function ImageGuard() {
  useEffect(() => {
    const onError = (event: Event) => {
      const target = event.target;
      if (target instanceof HTMLImageElement) recoverBrokenImage(target);
    };
    window.addEventListener("error", onError, true);
    return () => window.removeEventListener("error", onError, true);
  }, []);
  return null;
}
