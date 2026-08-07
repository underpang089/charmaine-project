import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { img } from "@/lib/img";

export const metadata: Metadata = {
  title: "Hotels — Holly Day",
  description: "Honest hotel stays worth coming back to.",
};

const hotels = [
  {
    name: "Riverside Ryokan",
    location: "Kyoto, Japan",
    rating: 4.8,
    price: "$180",
    note: "Tatami rooms, a quiet garden, and the best breakfast I had all trip.",
    img: img("photo-1540541338287-41700207dee6"),
  },
  {
    name: "The Lanna House",
    location: "Chiang Mai, Thailand",
    rating: 4.6,
    price: "$65",
    note: "Teak wood charm and a pool tucked behind the old city walls.",
    img: img("photo-1571003123894-1f0594d2b5d9"),
  },
  {
    name: "Altstadt Boutique",
    location: "Rothenburg, Germany",
    rating: 4.7,
    price: "$120",
    note: "Storybook views from the window, steps from the town square.",
    img: img("photo-1445019980597-93fa8acb246c"),
  },
  {
    name: "Lakeside Retreat",
    location: "Sun Moon Lake, Taiwan",
    rating: 4.9,
    price: "$140",
    note: "Wake up to mist over the water — worth every minute of the drive.",
    img: img("photo-1566073771259-6a8506099945"),
  },
];

export default function HotelsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <PageHero
        eyebrow="Honest Stays"
        title="Hotels"
        subtitle="Real reviews of the places I actually slept — the good and the honest."
        image={img("photo-1618773928121-c32242e63f39", 2000)}
      />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionLabel>Where I Stayed</SectionLabel>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {hotels.map((h) => (
            <article key={h.name} className="overflow-hidden bg-card">
              <div
                className="aspect-[16/10] bg-cover bg-center"
                style={{ backgroundImage: `url(${h.img})` }}
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold">{h.name}</h3>
                    <p className="mt-1 text-sm text-muted">{h.location}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-forest">
                    ★ {h.rating}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed">{h.note}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-sm text-muted">
                    from <span className="font-semibold text-foreground">{h.price}</span> / night
                  </span>
                  <a href="#" className="text-sm text-forest hover:underline">
                    Read the stay →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
