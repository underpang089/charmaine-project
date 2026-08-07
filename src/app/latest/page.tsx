import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { Play } from "@/components/icons";
import { img } from "@/lib/img";

export const metadata: Metadata = {
  title: "Latest — Holly Day",
  description: "Recent travel journeys, one slow trip at a time.",
};

const journeys = [
  { title: "Osaka", dur: "2 Days 1 Night", tag: "Japan", img: img("photo-1590559899731-a382839e5549") },
  { title: "Chiang Mai", dur: "4 Days 3 Nights", tag: "Thailand", img: img("photo-1552465011-b4e21bf6e79a") },
  { title: "Rothenburg", dur: "3 Days 2 Nights", tag: "Germany", img: img("photo-1467269204594-9661b134dd2b") },
  { title: "Sun Moon Lake", dur: "2 Days 1 Night", tag: "Taiwan", img: img("photo-1470004914212-05527e49370b") },
  { title: "Kyoto", dur: "3 Days 2 Nights", tag: "Japan", img: img("photo-1493976040374-85c8e12f0c0e") },
  { title: "Hallstatt", dur: "2 Days 1 Night", tag: "Austria", img: img("photo-1516483638261-f4dbaf036963") },
];

export default function LatestPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <PageHero
        eyebrow="Recent Journeys"
        title="Latest"
        subtitle="Every trip, filmed slowly and remembered fully."
        image={img("photo-1476514525535-07fb3b4ae5f1", 2000)}
      />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionLabel>All Journeys</SectionLabel>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {journeys.map((j) => (
            <a key={j.title} href="#" className="group block">
              <div className="relative aspect-video overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${j.img})` }}
                />
                <div className="absolute inset-0 bg-black/10" />
                <span className="absolute left-3 top-3 bg-forest px-2 py-0.5 text-[11px] text-white">
                  {j.tag}
                </span>
                <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow-lg">
                  <Play className="ml-0.5 h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-3 font-serif text-2xl font-semibold">{j.title}</h3>
              <p className="text-sm text-muted">{j.dur}</p>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
