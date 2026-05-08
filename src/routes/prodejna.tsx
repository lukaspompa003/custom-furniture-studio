import { createFileRoute } from "@tanstack/react-router";
import showroomImg from "@/assets/showroom.jpg";
import { Clock, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/prodejna")({
  head: () => ({
    meta: [
      { title: "Prodejna Zlín — Quercus nábytek" },
      { name: "description", content: "Naše prodejna v Zlíně, Pasecká 2374. Přijďte si nábytek prohlédnout naživo." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">Prodejna</span>
      <h1 className="mt-3 font-display text-5xl font-bold">Navštivte naši prodejnu ve Zlíně</h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        Ve Zlíně na ulici Pasecká 2374 máme naši prodejnu, kde nás můžete navštívit.
        Nábytek, který pro Vás uděláme na míru, si zde můžete prohlédnout ve skutečnosti
        a tak si lépe představit, jak bude vypadat. Při výrobě si můžete zvolit barevnou
        kombinaci provedení a materiál. Náš personál Vám bude plně k dispozici.
      </p>
      <img
        src={showroomImg}
        alt="Prodejna Quercus nábytek ve Zlíně"
        loading="lazy"
        width={1400}
        height={900}
        className="mt-12 rounded-3xl object-cover shadow-soft"
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <MapPin className="text-accent" />
          <h3 className="mt-4 font-semibold">Adresa</h3>
          <p className="mt-2 text-sm text-muted-foreground">Pasecká 2374<br />760 01 Zlín</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <Clock className="text-accent" />
          <h3 className="mt-4 font-semibold">Otevírací doba</h3>
          <p className="mt-2 text-sm text-muted-foreground">Po–Pá 8:00 — 17:00<br />So 9:00 — 12:00</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <Phone className="text-accent" />
          <h3 className="mt-4 font-semibold">Telefon</h3>
          <p className="mt-2 text-sm text-muted-foreground">+420 577 000 000<br />info@quercus-nabytek.cz</p>
        </div>
      </div>
    </div>
  );
}
