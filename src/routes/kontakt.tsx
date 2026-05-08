import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Quercus nábytek" },
      { name: "description", content: "Kontaktujte nás a domluvte si schůzku v naší prodejně ve Zlíně." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Kontakt</span>
          <h1 className="mt-3 font-display text-5xl font-bold">Domluvit schůzku</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Napište nám své představy. Ozveme se a domluvíme si nezávaznou konzultaci.
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <MapPin size={20} />
              </div>
              <div>
                <div className="font-semibold">Prodejna</div>
                <div className="text-sm text-muted-foreground">Pasecká 2374, 760 01 Zlín</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Phone size={20} />
              </div>
              <div>
                <div className="font-semibold">Telefon</div>
                <div className="text-sm text-muted-foreground">+420 577 000 000</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Mail size={20} />
              </div>
              <div>
                <div className="font-semibold">E-mail</div>
                <div className="text-sm text-muted-foreground">info@quercus-nabytek.cz</div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border bg-card p-8 shadow-card"
        >
          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Send size={22} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">Děkujeme!</h3>
              <p className="mt-2 text-sm text-muted-foreground">Brzy se Vám ozveme.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Jméno</label>
                <input required className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
              </div>
              <div>
                <label className="text-sm font-medium">E-mail</label>
                <input required type="email" className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
              </div>
              <div>
                <label className="text-sm font-medium">Telefon</label>
                <input className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
              </div>
              <div>
                <label className="text-sm font-medium">Zpráva</label>
                <textarea required rows={5} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Odeslat poptávku <Send size={16} />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
