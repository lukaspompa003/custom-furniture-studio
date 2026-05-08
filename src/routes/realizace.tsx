import { createFileRoute } from "@tanstack/react-router";
import vsbImg from "@/assets/project-vsb.jpg";
import bedImg from "@/assets/project-bed.jpg";
import zrImg from "@/assets/project-zelezna-ruda.jpg";
import studentImg from "@/assets/student-room.jpg";
import showroomImg from "@/assets/showroom.jpg";
import heroImg from "@/assets/hero-furniture.jpg";

export const Route = createFileRoute("/realizace")({
  head: () => ({
    meta: [
      { title: "Realizace — Quercus nábytek" },
      { name: "description", content: "Fotogalerie realizovaných projektů a interiérů Quercus nábytek." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { img: vsbImg, tag: "Vysoké školy", title: "Vysoká škola báňská, Ostrava", year: "2024" },
  { img: zrImg, tag: "Muzea", title: "Enviromentální centrum, Železná Ruda", year: "2015" },
  { img: bedImg, tag: "Ložnice", title: "Postel pro teenagery", year: "2023" },
  { img: studentImg, tag: "Dětské pokoje", title: "Sestava Student", year: "2024" },
  { img: showroomImg, tag: "Prodejna", title: "Showroom Zlín", year: "2022" },
  { img: heroImg, tag: "Obývací pokoje", title: "Obývací pokoj v dubu", year: "2023" },
];

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">Realizace</span>
      <h1 className="mt-3 font-display text-5xl font-bold">Naše projekty</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Ve fotogalerii najdete realizované projekty a interiéry — od bytových po rozsáhlé
        veřejné instalace.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <article key={i.title} className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={i.img} alt={i.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest">
                <span className="text-accent">{i.tag}</span>
                <span className="text-muted-foreground">{i.year}</span>
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{i.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
