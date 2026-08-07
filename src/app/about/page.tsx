import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { Facebook, Instagram, Mail, TikTok, Youtube } from "@/components/icons";
import { img } from "@/lib/img";

export const metadata: Metadata = {
  title: "About — Holly Day",
  description: "Hi, I'm Charmaine — the traveller behind Holly Day.",
};

const stats = [
  { value: "24", label: "Countries" },
  { value: "180+", label: "Stays reviewed" },
  { value: "5 yrs", label: "On the road" },
];

const values = [
  {
    title: "Slow travel",
    desc: "Fewer stops, longer stays, and time to actually notice a place.",
  },
  {
    title: "Honest reviews",
    desc: "No sugar-coating — just what a stay or spot is really like.",
  },
  {
    title: "Quiet places",
    desc: "Hidden gems and calm corners worth the detour.",
  },
];

const socials = [
  { Icon: Youtube, label: "YouTube" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: TikTok, label: "TikTok" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Mail, label: "Email" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <PageHero
        eyebrow="About"
        title="Hi, I'm Charmaine"
        subtitle="The traveller, filmmaker and note-taker behind Holly Day."
        image={img("photo-1524504388940-b1c1722653e1", 2000)}
      />
      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <section className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div
            className="aspect-[4/5] bg-cover bg-center"
            style={{ backgroundImage: `url(${img("photo-1531123897727-8f129e1688ce", 1000)})` }}
          />
          <div>
            <SectionLabel>My Story</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight">
              I created Holly Day to remember places, gently.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              What started as a way to keep my own travel memories turned into a small home
              for honest stories — the hotels I loved, the cafes I lingered in, and the quiet
              places I keep coming back to.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              I travel slowly and film along the way, hoping it helps you plan trips that feel
              calmer and more your own.
            </p>
          </div>
        </section>

        <section className="mt-16 grid grid-cols-3 gap-4 border-y border-line py-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl font-semibold text-forest">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <SectionLabel>What I Care About</SectionLabel>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="bg-card p-6">
                <h3 className="font-serif text-2xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <SectionLabel>Let&apos;s Connect</SectionLabel>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-muted">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex flex-col items-center gap-2 transition-colors hover:text-forest"
              >
                <Icon className="h-6 w-6" />
                <span className="text-[11px]">{label}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
