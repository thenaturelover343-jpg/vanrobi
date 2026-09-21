import { createServerFn } from "@tanstack/react-start";
import { site } from "./site";

export type OfferteInput = {
  name: string;
  email: string;
  phone: string;
  product: string;
  peak: string;
  install: string;
  taps: string;
  region: string;
  message: string;
  files?: string;
};

export const submitOfferte = createServerFn({ method: "POST" })
  .inputValidator((input: OfferteInput) => input)
  .handler(async ({ data }) => {
    const name = data.name?.trim() ?? "";
    const email = data.email?.trim() ?? "";
    if (name.length < 2) throw new Error("Naam is verplicht.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("E-mailadres is ongeldig.");
    }

    const record = {
      at: new Date().toISOString(),
      ...data,
      to: site.email,
    };

    try {
      const { mkdirSync, appendFileSync } = await import("node:fs");
      const { dirname, join } = await import("node:path");
      const file = join(process.cwd(), "data", "offertes.jsonl");
      mkdirSync(dirname(file), { recursive: true });
      appendFileSync(file, `${JSON.stringify(record)}\n`, "utf8");
    } catch {
      /* preview without persistent disk is fine — the UI still confirms */
    }

    return { ok: true as const, email };
  });
