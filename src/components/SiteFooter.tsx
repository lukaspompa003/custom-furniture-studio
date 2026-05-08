import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-bold text-primary">Quercus nábytek</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Nábytek na míru pro Váš domov i veřejné interiéry. Tradice, kvalita a osobní přístup.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold text-foreground">Kontakt</h4>
          <p className="flex items-start gap-2 text-muted-foreground">
            <MapPin size={16} className="mt-0.5 text-accent" />
            Pasecká 2374, Zlín
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Phone size={16} className="text-accent" /> +420 577 000 000
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Mail size={16} className="text-accent" /> info@quercus-nabytek.cz
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold text-foreground">Navigace</h4>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <Link to="/sluzby" className="hover:text-primary">Služby</Link>
            <Link to="/realizace" className="hover:text-primary">Realizace</Link>
            <Link to="/prodejna" className="hover:text-primary">Prodejna</Link>
            <Link to="/kontakt" className="hover:text-primary">Kontakt</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Quercus nábytek. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
