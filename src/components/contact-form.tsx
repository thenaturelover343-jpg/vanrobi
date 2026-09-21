import { useMemo, useState, type FormEvent } from "react";
import { products, groupLabels, type ProductGroup } from "@/lib/products";
import { experience } from "@/lib/experience";
import { submitOfferte } from "@/lib/offerte";
import { site, offerteMailto } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import { frForm, frGroupLabels } from "@/lib/fr";

const GROUPS: ProductGroup[] = [
  "koelers",
  "serpentijnen",
  "dispensing",
  "onderdelen",
  "service",
  "overig",
];

const REGIONS_NL = [
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
  const fr = useLang() === "fr";
  const t = fr ? frForm : null;
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [emailOut, setEmailOut] = useState("");

  const defaults = useMemo(() => {
    if (typeof window === "undefined") return { product: preset ?? "", peak: "", install: "" };
    const query = new URLSearchParams(window.location.search);
    return {
      product: preset || query.get("model") || "",
      peak: query.get("peak") || "",
      install: query.get("install") || "",
    };
  }, [preset]);

  const field =
    "min-h-12 w-full rounded-sm border border-line bg-bg px-3 text-sm text-fg placeholder:text-muted/70 focus:border-ice focus:outline-none";

  const onSubmitMailto = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = bodyFrom(data, fr);
    const product = String(data.get("product") || "");
    const subject = product
      ? fr
        ? `${frForm.subject}: ${product}`
        : `Offerteaanvraag VanRobi: ${product}`
      : fr
        ? frForm.subject
        : "Offerteaanvraag VanRobi";
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
      setError(
        err instanceof Error
          ? err.message
          : fr
            ? frForm.sendFail
            : "Verzenden mislukt. Probeer opnieuw of mail ons.",
      );
    } finally {
      setBusy(false);
    }
  };

  if (sent && experience.nativeForm) {
    return (
      <div className="border border-ice/40 bg-surface p-6">
        <p className="kicker">{fr ? t!.received : "Aanvraag ontvangen"}</p>
        <h3 className="mt-3 text-3xl">
          {fr ? t!.reply : "We antwoorden binnen één werkdag."}
        </h3>
        <p className="mt-4 text-sm text-muted">
          {fr ? (
            <>
              {t!.confirm} {emailOut || "votre e-mail"}. {t!.urgent} {t!.call} {site.phone}.
            </>
          ) : (
            <>
              Bevestiging staat hier. We nemen contact op via {emailOut || "uw e-mailadres"}. Dringend?
              Bel {site.phone}.
            </>
          )}
        </p>
      </div>
    );
  }

  const regions = fr ? frForm.regions : REGIONS_NL;
  const groups = fr ? frGroupLabels : groupLabels;

  return (
    <form onSubmit={experience.nativeForm ? onSubmitNative : onSubmitMailto} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          {fr ? t!.name : "Naam"}
          <input name="name" required className={field} autoComplete="name" />
        </label>
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          {fr ? t!.email : "E-mail"}
          <input name="email" type="email" required className={field} autoComplete="email" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          {fr ? t!.phone : "Telefoon"}
          <input name="phone" className={field} autoComplete="tel" />
        </label>
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          {fr ? t!.model : "Model"}
          <select name="product" defaultValue={defaults.product} className={field}>
            <option value="">{fr ? t!.chooseModel : "Kies model"}</option>
            {GROUPS.map((g) => {
              const items = products.filter((p) => (p.group ?? "koelers") === g);
              if (!items.length) return null;
              return (
                <optgroup key={g} label={groups[g]}>
                  {items.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </optgroup>
              );
            })}
            <option value="Onderhoud / service">{fr ? t!.service : "Onderhoud / service"}</option>
            <option value="Anders">{fr ? t!.other : "Anders"}</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          {fr ? t!.peak : "Piekvolume (L/u of glazen/uur)"}
          <input
            name="peak"
            defaultValue={defaults.peak}
            className={field}
            placeholder={fr ? t!.peakPh : "bv. 80 L/u of 200 glazen"}
          />
        </label>
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          {fr ? t!.install : "Vast of mobiel"}
          <select name="install" className={field} defaultValue={defaults.install}>
            <option value="">{fr ? t!.choose : "Kies"}</option>
            <option value="Vast / onder-bar">{fr ? t!.vast : "Vast / onder-bar"}</option>
            <option value="Over-bar">{fr ? t!.overbar : "Over-bar"}</option>
            <option value="Mobiel / events">{fr ? t!.mobiel : "Mobiel / events"}</option>
            <option value="Nog niet zeker">{fr ? t!.unsure : "Nog niet zeker"}</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          {fr ? t!.taps : "Aantal kranen"}
          <input name="taps" className={field} inputMode="numeric" placeholder={fr ? t!.tapsPh : "bv. 2"} />
        </label>
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          {fr ? t!.region : "Regio"}
          <select name="region" className={field} defaultValue="">
            <option value="">{fr ? t!.chooseRegion : "Kies regio"}</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
        {fr ? t!.message : "Bericht"}
        <textarea
          name="message"
          rows={5}
          className={`${field} py-3`}
          placeholder={fr ? t!.messagePh : "Bar, event of installatie — meubelmaten mag hier ook."}
        />
      </label>
      {experience.nativeForm ? (
        <label className="grid gap-2 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          {fr ? t!.photos : "Barfoto’s / meubelmaten (optioneel)"}
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
        {busy
          ? fr
            ? t!.sending
            : "Verzenden…"
          : experience.nativeForm
            ? fr
              ? t!.send
              : "Verstuur aanvraag"
            : fr
              ? t!.sendMail
              : "Verstuur via e-mail"}
      </button>
      {experience.nativeForm ? (
        <p className="text-sm text-muted">
          {fr ? t!.replyDay : "Antwoord binnen één werkdag. Of bel"}{" "}
          <a href={`tel:${site.phoneTel}`} className="text-ice">
            {site.phone}
          </a>
          .
        </p>
      ) : sent ? (
        <p className="text-sm text-ice">
          {fr ? (
            <>
              {t!.mailOpened} {site.email}.
            </>
          ) : (
            <>Uw e-mailprogramma opent. Lukt dat niet? Mail naar {site.email}.</>
          )}
        </p>
      ) : (
        <p className="text-sm text-muted">
          {fr ? (
            <>
              {t!.mailOpens} {site.email}.{" "}
              <a href={offerteMailto()} className="text-ice">
                {t!.mailDirect}
              </a>
              .
            </>
          ) : (
            <>
              Opent uw e-mailprogramma met de aanvraag naar {site.email}.{" "}
              <a href={offerteMailto()} className="text-ice">
                Mail direct
              </a>
              .
            </>
          )}
        </p>
      )}
    </form>
  );
}

function bodyFrom(data: FormData, fr: boolean) {
  if (fr) {
    return [
      `Nom: ${data.get("name") || ""}`,
      `E-mail: ${data.get("email") || ""}`,
      data.get("phone") ? `Téléphone: ${data.get("phone")}` : "",
      data.get("product") ? `Modèle: ${data.get("product")}` : "",
      data.get("peak") ? `Volume de pointe: ${data.get("peak")}` : "",
      data.get("install") ? `Installation: ${data.get("install")}` : "",
      data.get("taps") ? `Robinets: ${data.get("taps")}` : "",
      data.get("region") ? `Région: ${data.get("region")}` : "",
      "",
      String(data.get("message") || "(pas de message)"),
    ]
      .filter((line, i, arr) => line !== "" || arr[i - 1] !== "")
      .join("\n");
  }
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
