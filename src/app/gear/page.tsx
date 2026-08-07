import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import {
  Aperture,
  Backpack,
  Camera,
  Laptop,
  Tripod,
  Video,
} from "@/components/icons";
import { img } from "@/lib/img";

export const metadata: Metadata = {
  title: "Gear — Holly Day",
  description: "The gear I use to capture travel memories.",
};

const gear = [
  {
    Icon: Camera,
    name: "Camera",
    item: "Sony A7C II",
    desc: "Small enough to carry all day, good enough for the moments that matter.",
  },
  {
    Icon: Aperture,
    name: "Lens",
    item: "Sony 24mm f/1.4 GM",
    desc: "My do-everything lens for streets, food and wide landscapes.",
  },
  {
    Icon: Video,
    name: "Gimbal",
    item: "DJI RS 3 Mini",
    desc: "Smooth walking shots without lugging around heavy rigs.",
  },
  {
    Icon: Tripod,
    name: "Tripod",
    item: "Peak Design Travel Tripod",
    desc: "Packs down tiny for blue-hour and self-timer shots.",
  },
  {
    Icon: Backpack,
    name: "Backpack",
    item: "Peak Design 30L",
    desc: "One bag for gear, layers and a full day out exploring.",
  },
  {
    Icon: Laptop,
    name: "Editing",
    item: "MacBook Air M3",
    desc: "Light enough to edit on trains, powerful enough to finish a film.",
  },
];

export default function GearPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <PageHero
        eyebrow="What's In My Bag"
        title="Gear"
        subtitle="Everything I use to capture and share these journeys — nothing more."
        image={img("photo-1502920917128-1aa500764cbd", 2000)}
      />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionLabel>My Kit</SectionLabel>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gear.map(({ Icon, name, item, desc }) => (
            <div key={name} className="flex flex-col bg-card p-6">
              <Icon className="h-8 w-8 text-forest" />
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                {name}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-semibold">{item}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-card p-8 text-center">
          <h3 className="font-serif text-2xl font-semibold">Booking through my links helps ♡</h3>
          <p className="mt-2 text-sm text-muted">
            If any of this gear is useful to you, using the links below supports the journeys
            at no extra cost.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {["Amazon", "B&H Photo", "Moment"].map((b) => (
              <a
                key={b}
                href="#"
                className="flex h-12 min-w-[120px] items-center justify-center bg-white px-5 text-sm font-semibold shadow-sm transition-shadow hover:shadow-md"
              >
                {b}
              </a>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
