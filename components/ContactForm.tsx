"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/contact";

export function ContactForm() {
  const [sentHint, setSentHint] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const product = String(fd.get("product") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const subject = product
      ? `Offerteaanvraag VanRobi — ${product}`
      : "Offerteaanvraag VanRobi";
    const body = [
      `Naam: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefoon: ${phone}` : "",
      product ? `Product: ${product}` : "",
      "",
      message || "(geen bericht)",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSentHint(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label htmlFor="name">
          Naam
          <input id="name" name="name" type="text" required autoComplete="name" />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="phone">
          Telefoon
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </label>
        <label htmlFor="product">
          Product (optioneel)
          <select id="product" name="product" defaultValue="">
            <option value="">— kies —</option>
            <option value="Goldy">Goldy</option>
            <option value="Picky">Picky</option>
            <option value="Gold Ice">Gold Ice</option>
            <option value="V100">V100</option>
            <option value="V100 portable">V100 portable</option>
            <option value="V200">V200</option>
            <option value="V200 portable">V200 portable</option>
            <option value="V300">V300</option>
            <option value="V90">V90</option>
            <option value="H50">H50</option>
            <option value="V500">V500</option>
            <option value="Barrilero doble">Barrilero doble</option>
            <option value="Condensorunit">Condensorunit</option>
            <option value="G8 water/lucht met condensor">G8 water/lucht met condensor</option>
            <option value="G8 lucht met condensor">G8 lucht met condensor</option>
            <option value="G8 water met condensor">G8 water met condensor</option>
            <option value="G98 met condensor">G98 met condensor</option>
            <option value="G98 zonder condensor">G98 zonder condensor</option>
            <option value="G92 zonder condensor">G92 zonder condensor</option>
            <option value="Koudwaterbad">Koudwaterbad</option>
            <option value="Warmwaterbad">Warmwaterbad</option>
            <option value="Onderhoud / service">Onderhoud / service</option>
            <option value="Anders">Anders</option>
          </select>
        </label>
      </div>
      <label htmlFor="message">
        Bericht
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Vertel over uw bar, event of installatie…"
        />
      </label>
      <button type="submit" className="btn btn-ink btn-lg">
        Verstuur via e-mail
      </button>
      {sentHint ? (
        <p className="form-hint">
          Uw e-mailprogramma opent met de aanvraag. Lukt dat niet? Mail naar{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      ) : (
        <p className="form-hint">
          Opent uw e-mailprogramma — geen server nodig (static site).
        </p>
      )}
    </form>
  );
}
