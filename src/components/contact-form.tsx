import { useMemo, useState, type FormEvent } from "react";
import { products, groupLabels, type ProductGroup } from "@/lib/products";
import { experience } from "@/lib/experience";
import { submitOfferte } from "@/lib/offerte";
import { site, offerteMailto } from "@/lib/site";

const GROUPS: ProductGroup[] = [
  "koelers",
  "serpentijnen",
  "dispensing",
  "onderdelen",
  "service",
  "overig",
];

const REGIONS = [
  "Antwerpen",
  "Limburg",
  "Vlaams-Brabant",
  "Brussel",
  "Oost-Vlaanderen",
  "West-Vlaanderen",
  "Kempen",
  "Nederland",
  "Andere",
];

export function ContactForm({ preset }: { preset?: string }) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [emailOut, setEmailOut] = useState("");

  const defaultProduct = useMemo(() => {
    if (typeof window === "undefined") return preset ?? "";
    const q = new URLSearchParams(window.location.search).get("model");
    return preset || q || "";
  }, [preset]);

  const field =
    "min-h-12 w-full rounded-sm border border-line bg-bg px-3 text-sm text-fg placeholder:text-muted/70 focus:border-ice focus:outline-none";

  const onSubmitMailto = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = bodyFrom(data);
    const product = String(data.get("product") || "");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      product ? `Offerteaanvraag VanRobi: ${product}` : "Offerteaanvraag VanRobi",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const onSubmitNative = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const files = data.getAll("photos") as File[];
    const fileNote = files
      .filter((f) => f && f.size)
      .map((f) => `${f.name} (${Math.round(f.size / 1024)} kB)`)
      .join(", ");
    try {
      const res = await submitOfferte({
        data: {
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          phone: String(data.get("phone") || ""),
          product: String(data.get("product") || ""),
          peak: String(data.get("peak") || ""),
          install: String(data.get("install") || ""),
          taps: String(data.get("taps") || ""),
          region: String(data.get("region") || ""),
          message: String(data.get("message") || ""),
          files: fileNote,
        },
      });
      setEmailOut(res.email);
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verzenden mislukt. Probeer opnieuw of mail ons.");
    } finally {
      setBusy(false);
    }
  };

  if (sent && experience.nativeForm) {
    return (
      <div className="border border-ice/40 bg-surface p-6">
        <p className="kicker">Aanvraag ontvangen</p>
        <h3 className="mt-3 text-3xl">We antwoorden binnen één werkdag.</h3>
        <p className="mt-4 text-sm text-muted">
          Bevestiging staat hier. We nemen contact op via {emailOut || "uw e-mailadres"}.
          Dringend? Bel {site.phone}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={experience.nativeForm ? onSubmitNative : onSubmitMailto} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          Naam
          <input name="name" required className={field} autoComplete="name" />
        </label>
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          E-mail
          <input name="email" type="email" required className={field} autoComplete="email" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          Telefoon
          <input name="phone" className={field} autoComplete="tel" />
        </label>
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          Model
          <select name="product" defaultValue={defaultProduct} className={field}>
            <option value="">Kies model</option>
            {GROUPS.map((g) => {
              const items = products.filter((p) => (p.group ?? "koelers") === g);
              if (!items.length) return null;
              return (
                <optgroup key={g} label={groupLabels[g]}>
                  {items.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </optgroup>
              );
            })}
            <option value="Onderhoud / service">Onderhoud / service</option>
            <option value="Anders">Anders</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          Piekvolume (L/u of glazen/uur)
          <input name="peak" className={field} placeholder="bv. 80 L/u of 200 glazen" />
        </label>
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          Vast of mobiel
          <select name="install" className={field} defaultValue="">
            <option value="">Kies</option>
            <option value="Vast / onder-bar">Vast / onder-bar</option>
            <option value="Over-bar">Over-bar</option>
            <option value="Mobiel / events">Mobiel / events</option>
            <option value="Nog niet zeker">Nog niet zeker</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          Aantal kranen
          <input name="taps" className={field} inputMode="numeric" placeholder="bv. 2" />
        </label>
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          Regio
          <select name="region" className={field} defaultValue="">
            <option value="">Kies regio</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
        Bericht
        <textarea
          name="message"
          rows={5}
          className={`${field} py-3`}
          placeholder="Bar, event of installatie — meubelmaten mag hier ook."
        />
      </label>
      {experience.nativeForm ? (
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          Barfoto’s / meubelmaten (optioneel)
          <input
            name="photos"
            type="file"
            accept="image/*,.pdf"
            multiple
            className="text-sm text-muted file:mr-3 file:border file:border-line file:bg-surface file:px-3 file:py-2 file:text-[0.68rem] file:tracking-[0.14em] file:text-fg file:uppercase"
          />
        </label>
      ) : null}
      {error ? <p className="text-sm text-ice">{error}</p> : null}
      <button type="submit" className="btn btn-ice justify-self-start" disabled={busy}>
        {busy ? "Verzenden…" : experience.nativeForm ? "Verstuur aanvraag" : "Verstuur via e-mail"}
      </button>
      {experience.nativeForm ? (
        <p className="text-sm text-muted">
          Antwoord binnen één werkdag. Of bel{" "}
          <a href={`tel:${site.phoneTel}`} className="text-ice">
            {site.phone}
          </a>
          .
        </p>
      ) : sent ? (
        <p className="text-sm text-ice">
          Uw e-mailprogramma opent. Lukt dat niet? Mail naar {site.email}.
        </p>
      ) : (
        <p className="text-sm text-muted">
          Opent uw e-mailprogramma met de aanvraag naar {site.email}.{" "}
          <a href={offerteMailto()} className="text-ice">
            Mail direct
          </a>
          .
        </p>
      )}
    </form>
  );
}

function bodyFrom(data: FormData) {
  return [
    `Naam: ${data.get("name") || ""}`,
    `E-mail: ${data.get("email") || ""}`,
    data.get("phone") ? `Telefoon: ${data.get("phone")}` : "",
    data.get("product") ? `Model: ${data.get("product")}` : "",
    data.get("peak") ? `Piekvolume: ${data.get("peak")}` : "",
    data.get("install") ? `Opstelling: ${data.get("install")}` : "",
    data.get("taps") ? `Kranen: ${data.get("taps")}` : "",
    data.get("region") ? `Regio: ${data.get("region")}` : "",
    "",
    String(data.get("message") || "(geen bericht)"),
  ]
    .filter((line, i, arr) => line !== "" || arr[i - 1] !== "")
    .join("\n");
}
