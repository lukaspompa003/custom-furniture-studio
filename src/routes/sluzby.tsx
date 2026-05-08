import { createFileRoute } from "@tanstack/react-router";
import { Home, Briefcase, GraduationCap, Building2, Bed, Baby } from "lucide-react";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — Quercus nábytek" },
      { name: "description", content: "Bytový nábytek, dětské pokoje, ložnice, kanceláře, školy a muzea — vše na míru." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Home, title: "Obývací pokoje", text: "Sestavy, knihovny, TV stěny a komody přesně podle Vašeho prostoru." },
  { icon: Bed, title: "Ložnice", text: "Postele, šatní skříně a noční stolky v dokonalém souladu." },
  { icon: Baby, title: "Dětské pokoje", text: "Praktická a bezpečná řešení pro děti i teenagery — sestava Student." },
  { icon: Briefcase, title: "Kanceláře", text: "Pracoviště, recepce a zasedací místnosti s důrazem na funkčnost." },
  { icon: GraduationCap, title: "Školy a muzea", text: "Vybavení poslucháren, expozic a edukativních prostor." },
  { icon: Building2, title: "Veřejné interiéry", text: "Realizace na klíč včetně návrhu a celkového řešení." },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">Služby</span>
      <h1 className="mt-3 font-display text-5xl font-bold">Co pro Vás vyrobíme</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Specializujeme se na nábytek na míru pro bytové i veřejné interiéry. Součástí
        je i zpracování návrhu a komplexní řešení Vašeho prostoru.
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <s.icon size={22} />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
