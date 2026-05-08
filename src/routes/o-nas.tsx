import { createFileRoute } from "@tanstack/react-router";
import showroomImg from "@/assets/showroom.jpg";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás — Quercus nábytek" },
      { name: "description", content: "Truhlářská tradice z Zlína. O firmě Quercus nábytek." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">O nás</span>
      <h1 className="mt-3 font-display text-5xl font-bold">Truhlářská tradice ze Zlína</h1>
      <p className="mt-8 text-lg text-muted-foreground">
        Quercus nábytek je rodinná firma věnující se výrobě nábytku na míru. Naším posláním
        je proměňovat prostory v místa, kde se lidem dobře žije, pracuje i odpočívá. Kombinujeme
        ruční truhlářské řemeslo s moderními technologiemi a důrazem na detail.
      </p>
      <img
        src={showroomImg}
        alt="Naše dílna a prodejna"
        loading="lazy"
        width={1400}
        height={900}
        className="mt-12 rounded-3xl object-cover shadow-soft"
      />
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {[
          { n: "25+", t: "let zkušeností" },
          { n: "500+", t: "realizovaných projektů" },
          { n: "100 %", t: "spokojených zákazníků" },
        ].map((s) => (
          <div key={s.t} className="rounded-2xl border border-border bg-card p-8 text-center shadow-card">
            <div className="font-display text-5xl font-bold text-primary">{s.n}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
