import { Brand } from "./Brand";
import { withBase } from "@/lib/base";
import { contact } from "@/lib/contact";
import { featuredProducts } from "@/lib/products";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Brand markSize={24} />
          <p>
            Officiële Golderos-distributeur voor België en Nederland. Levering
            &amp; onderhoud via {contact.company}.
          </p>
        </div>
        <div>
          <h4>Navigatie</h4>
          <a className="footer-link" href={withBase("/producten/")}>
            Producten
          </a>
          <a className="footer-link" href={withBase("/diensten/")}>
            Diensten
          </a>
          <a className="footer-link" href={withBase("/voor-wie/")}>
            Voor wie
          </a>
          <a className="footer-link" href={withBase("/over-ons/")}>
            Over ons
          </a>
          <a className="footer-link" href={withBase("/contact/")}>
            Contact
          </a>
        </div>
        <div>
          <h4>Machines</h4>
          {featuredProducts.slice(0, 6).map((p) => (
            <a
              key={p.id}
              className="footer-link"
              href={withBase(`/producten/${p.id}/`)}
            >
              {p.name}
            </a>
          ))}
          <a className="footer-link" href={withBase("/producten/")}>
            Alle producten →
          </a>
        </div>
        <div>
          <h4>Contact</h4>
          <a className="footer-link" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a className="footer-link" href={`tel:${contact.phoneTel}`}>
            {contact.phone}
          </a>
          <p className="muted">{contact.address.line}</p>
          <a
            className="footer-link"
            href={contact.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            taponderhoud.be
          </a>
        </div>
      </div>
      <div className="wrap footer-base">
        <span className="footer-copy">© 2026 VanRobi</span>
        <span className="footer-legal">
          Golderos® is een merk van de Spaanse fabrikant. VanRobi is officiële
          distributeur BE/NL. Onderhoudspartner:{" "}
          <a href={contact.companyUrl} target="_blank" rel="noopener noreferrer">
            {contact.company}
          </a>
          . Productbeelden © Golderos.
        </span>
      </div>
    </footer>
  );
}
