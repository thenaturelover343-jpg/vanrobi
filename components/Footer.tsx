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
          <a href="#producten">Producten</a>
          <a href="#categorieen">Toepassingen</a>
          <a href="#waarom">Waarom VanRobi</a>
          <a href="#partnerschap">Partnerschap</a>
        </div>
        <div>
          <h4>Machines</h4>
          <a href="#prod-goldy">Goldy</a>
          <a href="#prod-v100">V100</a>
          <a href="#prod-v100p">V100 portable</a>
          <a href="#prod-v200">V200</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:info@vanrobi.be">info@vanrobi.be</a>
          <a href="#offerte">Offerte aanvragen</a>
          <p className="muted">België &amp; Nederland</p>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© 2026 VanRobi</span>
        <span>
          Golderos® is een merk van de Spaanse fabrikant. VanRobi is officiële
          distributeur BE/NL. Productbeelden © Golderos.
        </span>
      </div>
    </footer>
  );
}
