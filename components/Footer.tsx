import { Brand } from "./Brand";
import { withBase } from "@/lib/base";
import { contact } from "@/lib/contact";
import { featuredProducts } from "@/lib/products";
import { guides } from "@/lib/guides";

export function Footer({ lang = "nl" }: { lang?: "nl" | "fr" }) {
 if (lang === "fr") {
 return (
 <footer className="site-footer">
 <div className="wrap footer-grid">
 <div className="footer-brand">
 <Brand markSize={24} homeHref="/fr/" />
 <p>
 Spécialiste des refroidisseurs à banquise pour la Belgique et les Pays-Bas.
 Maintenance via {contact.company}.
 </p>
 </div>
 <div>
 <h4>Navigation</h4>
 <a className="footer-link" href={withBase("/fr/")}>
 Accueil
 </a>
 <a className="footer-link" href={withBase("/fr/produits/")}>
 Produits
 </a>
 <a className="footer-link" href={withBase("/fr/services/")}>
 Services
 </a>
 <a className="footer-link" href={withBase("/fr/a-propos/")}>
 À propos
 </a>
 <a className="footer-link" href={withBase("/fr/faq/")}>
 FAQ
 </a>
 <a className="footer-link" href={withBase("/fr/contact/")}>
 Contact
 </a>
 <a className="footer-link" href={withBase("/")}>
 Site néerlandais
 </a>
 </div>
 <div>
 <h4>Machines</h4>
 {["goldy", "picky", "v100", "v200", "v100-portable", "v200-portable"].map((id) => {
 const p = featuredProducts.find((x) => x.id === id);
 if (!p) return null;
 return (
 <a
 key={id}
 className="footer-link"
 href={withBase(`/fr/produits/${id}/`)}
 >
 {p.name}
 </a>
 );
 })}
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
 </div>
 </div>
 <div className="wrap footer-base">
 <span className="footer-copy">© 2026 VanRobi</span>
 <span className="footer-legal">
 VanRobi, spécialiste refroidisseurs à banquise BE/NL. Assortiment professionnel depuis Kasterlee.
 </span>
 </div>
 </footer>
 );
 }

 return (
 <footer className="site-footer">
 <div className="wrap footer-grid">
 <div className="footer-brand">
 <Brand markSize={24} />
 <p>
 Specialist in professionele ijsbankkoelers voor België en Nederland. Levering
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
 <a className="footer-link" href={withBase("/gids/")}>
 Gidsen
 </a>
 <a className="footer-link" href={withBase("/faq/")}>
 FAQ
 </a>
 <a className="footer-link" href={withBase("/voor-wie/")}>
 Voor wie
 </a>
 <a className="footer-link" href={withBase("/over-ons/")}>
 Over ons
 </a>
 <a className="footer-link" href={withBase("/regio/")}>
 Regio&apos;s
 </a>
 <a className="footer-link" href={withBase("/contact/")}>
 Contact
 </a>
 <a className="footer-link" href={withBase("/fr/")}>
 Français
 </a>
 </div>
 <div>
 <h4>Gidsen</h4>
 {guides.map((g) => (
 <a
 key={g.slug}
 className="footer-link"
 href={withBase(`/gids/${g.slug}/`)}
 >
 {g.title.split(":")[0]}
 </a>
 ))}
 <a className="footer-link" href={withBase("/faq/")}>
 Veelgestelde vragen
 </a>
 <h4 style={{ marginTop: "1.25rem" }}>Machines</h4>
 {featuredProducts.slice(0, 4).map((p) => (
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
 VanRobi levert professionele ijsbankkoelers als merk voor
 BE &amp; NL. Onderhoudspartner:{" "}
 <a href={contact.companyUrl} target="_blank" rel="noopener noreferrer">
 {contact.company}
 </a>
 . Productbeelden via VanRobi-catalogus.
 </span>
 </div>
 </footer>
 );
}
