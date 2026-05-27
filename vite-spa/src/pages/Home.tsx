import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Ruler, Layers, Sparkles, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-furniture.jpg";
import studentImg from "@/assets/student-room.jpg";
import showroomImg from "@/assets/showroom.jpg";
import vsbImg from "@/assets/project-vsb.jpg";
import bedImg from "@/assets/project-bed.jpg";
import zrImg from "@/assets/project-zelezna-ruda.jpg";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Nábytek na míru" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 py-32 md:py-44">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
            Tradice od roku 1995
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-tight text-white md:text-7xl">
            Nábytek na míru
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Vyrobíme pro Vás nábytek dle Vašich požadavků. Bytový nábytek do obývacích pokojů,
            dětské pokoje a ložnice. Specializujeme se i na veřejné interiéry — kanceláře,
            školy, muzea. Součástí nabídky je zpracování návrhu a řešení Vašeho interiéru.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-105">
              Domluvit schůzku <ArrowRight size={16} />
            </Link>
            <Link to="/realizace" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
              Naše realizace
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { icon: Ruler, title: "Výroba na míru", text: "Každý kus přesně podle Vašeho prostoru a přání." },
            { icon: Layers, title: "Odolné ABS hrany", text: "Kvalitní materiály s dlouhou životností." },
            { icon: Hammer, title: "Vlastní výroba", text: "Truhlářská dílna s desítkami let zkušeností." },
            { icon: Sparkles, title: "Návrh interiéru", text: "Pomůžeme s návrhem i celkovým řešením." },
          ].map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gradient-warm">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Moderní řešení</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Student</h2>
            <p className="mt-5 text-muted-foreground">
              Praktická a stylová sestava do dětského pokoje. Maximální využití prostoru a odolné materiály, které vydrží.
            </p>
            <ul className="mt-8 space-y-3">
              {["Výroba na míru", "Výklopné skříně", "Jeden a půl lůžko", "Odolné ABS hrany"].map((i) => (
                <li key={i} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{i}</li>
              ))}
            </ul>
            <Link to="/sluzby" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              Zjistit více <ArrowRight size={16} />
            </Link>
          </div>
          <img src={studentImg} alt="Sestava Student" loading="lazy" className="rounded-3xl object-cover shadow-soft" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={showroomImg} alt="Prodejna ve Zlíně" loading="lazy" className="rounded-3xl object-cover shadow-card" />
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Navštivte nás</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Navštivte naši prodejnu</h2>
            <p className="mt-5 text-muted-foreground">
              Ve Zlíně na ulici Pasecká 2374 máme naši prodejnu. Nábytek si zde můžete prohlédnout naživo a lépe si představit, jak bude vypadat. Při výrobě si zvolíte barevnou kombinaci i materiál.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-primary">
              <MapPin size={18} className="text-accent" /> Pasecká 2374, Zlín
            </div>
            <Link to="/prodejna" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-105">
              Více o prodejně <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Aktuálně</span>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Naše realizace</h2>
            </div>
            <Link to="/realizace" className="hidden items-center gap-2 text-sm font-semibold text-primary md:inline-flex">
              Všechny projekty <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { img: vsbImg, tag: "Veřejné interiéry", title: "Realizace interiéru VŠB Ostrava", text: "Realizovali jsme interiér na míru včetně rozsáhlých poslucháren." },
              { img: bedImg, tag: "Bytový nábytek", title: "Postel pro teenagery", text: "Mít kvalitní prostornou postel je sen každého teenagera." },
              { img: zrImg, tag: "Veřejné interiéry", title: "Enviromentální centrum, Železná Ruda", text: "Realizace interiéru z roku 2015." },
            ].map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{p.tag}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
                  <Link to="/realizace" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Celý článek <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-primary p-12 text-center text-primary-foreground shadow-soft md:p-20">
          <h2 className="font-display text-3xl font-bold md:text-5xl">Máte představu? Pojďme ji společně zhmotnit.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/80">
            Domluvte si nezávaznou schůzku v naší prodejně ve Zlíně nebo přímo u Vás doma.
          </p>
          <Link to="/kontakt" className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
            Domluvit schůzku <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
