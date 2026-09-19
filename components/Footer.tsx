import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Brand markSize={24} />
          <p>Officiële Golderos-distributeur voor België en Nederland.</p>
        </div>
        <div>
          <h4>Navigatie</h4>
          <a className="footer-link" href="#producten">
            Producten
          </a>
          <a className="footer-link" href="#categorieen">
            Toepassingen
          </a>
          <a className="footer-link" href="#waarom">
            Waarom VanRobi
          </a>
          <a className="footer-link" href="#partnerschap">
            Partnerschap
          </a>
        </div>
        <div>
          <h4>Machines</h4>
          <a className="footer-link" href="#prod-goldy">
            Goldy
          </a>
          <a className="footer-link" href="#prod-v100">
            V100
          </a>
          <a className="footer-link" href="#prod-v100p">
            V100 portable
          </a>
          <a className="footer-link" href="#prod-v200">
            V200
          </a>
        </div>
        <div>
          <h4>Contact</h4>
          <a className="footer-link" href="mailto:info@vanrobi.be">
            info@vanrobi.be
          </a>
          <a className="footer-link" href="#offerte">
            Offerte aanvragen
          </a>
          <p className="muted">België &amp; Nederland</p>
        </div>
      </div>
      <div className="wrap footer-base">
        <span className="footer-copy">© 2026 VanRobi</span>
        <span className="footer-legal">
          Golderos® is een merk van de Spaanse fabrikant. VanRobi is officiële
          distributeur BE/NL. Productbeelden © Golderos.
        </span>
      </div>
    </footer>
  );
}
