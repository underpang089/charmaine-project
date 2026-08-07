import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { img } from "@/lib/img";

export const metadata: Metadata = {
  title: "Destinations — Holly Day",
  description: "Places worth coming back to, sorted by country.",
};

const destinations = [
  { name: "Japan", count: 12, img: img("photo-1528360983277-13d401cdc186") },
  { name: "Thailand", count: 8, img: img("photo-1552465011-b4e21bf6e79a") },
  { name: "Germany", count: 6, img: img("photo-1467269204594-9661b134dd2b") },
  { name: "Taiwan", count: 5, img: img("photo-1470004914212-05527e49370b") },
  { name: "Austria", count: 4, img: img("photo-1516483638261-f4dbaf036963") },
  { name: "Italy", count: 7, img: img("photo-1523906834658-6e24ef2386f9") },
  { name: "South Korea", count: 3, img: img("photo-1538485399081-7191377e8241") },
  { name: "Vietnam", count: 4, img: img("photo-1528127269322-539801943592") },
];

export default function DestinationsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <PageHero
        eyebrow="Where To Wander"
        title="Destinations"
        subtitle="A growing map of countries, cities and the quiet corners in between."
        image={img("photo-1488646953014-85cb44e25828", 2000)}
      />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionLabel>Browse By Country</SectionLabel>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {destinations.map((d) => (
            <a
              key={d.name}
              href="#"
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${d.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-2xl font-medium text-white">{d.name}</h3>
                <p className="text-xs text-white/80">{d.count} stories</p>
              </div>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
