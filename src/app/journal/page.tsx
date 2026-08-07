import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { img } from "@/lib/img";

export const metadata: Metadata = {
  title: "Journal — Holly Day",
  description: "Stories from the road — slow travel, written down.",
};

const featured = {
  title: "Finding stillness in Kyoto's back streets",
  date: "March 12, 2025",
  read: "6 min read",
  excerpt:
    "Away from the crowds of Gion, the narrow lanes of Kyoto hold a quieter kind of beauty — lantern light, the smell of green tea, and mornings that ask you to slow down.",
  img: img("photo-1493976040374-85c8e12f0c0e", 1400),
};

const posts = [
  {
    title: "A honest guide to eating alone abroad",
    date: "Feb 28, 2025",
    read: "5 min read",
    excerpt: "Solo tables, local menus and the small joy of ordering by pointing.",
    img: img("photo-1414235077428-338989a2e8c0"),
  },
  {
    title: "Why I pack light and stay longer",
    date: "Feb 10, 2025",
    read: "4 min read",
    excerpt: "One backpack, no rush — how slow travel changed the way I see places.",
    img: img("photo-1553531384-411a247ccd73"),
  },
  {
    title: "The cafes I keep coming back to",
    date: "Jan 22, 2025",
    read: "7 min read",
    excerpt: "A short list of quiet corners with good coffee and better light.",
    img: img("photo-1521017432531-fbd92d768814"),
  },
  {
    title: "Notes from a rainy week in Taiwan",
    date: "Jan 5, 2025",
    read: "6 min read",
    excerpt: "Sometimes the weather won't cooperate — and that's part of the story.",
    img: img("photo-1470004914212-05527e49370b"),
  },
];

export default function JournalPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <PageHero
        eyebrow="Stories From The Road"
        title="Journal"
        subtitle="Honest notes, small moments and the memories worth writing down."
        image={img("photo-1517842645767-c639042777db", 2000)}
      />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        {/* Featured */}
        <a href="#" className="group grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featured.img})` }}
            />
          </div>
          <div>
            <SectionLabel>Featured Story</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight">
              {featured.title}
            </h2>
            <p className="mt-2 text-xs uppercase tracking-wide text-muted">
              {featured.date} · {featured.read}
            </p>
            <p className="mt-4 leading-relaxed text-muted">{featured.excerpt}</p>
            <span className="mt-5 inline-block border-b border-foreground pb-0.5 text-sm transition-colors group-hover:text-forest">
              Read the story →
            </span>
          </div>
        </a>

        <hr className="my-14 border-line" />

        <SectionLabel>More Stories</SectionLabel>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {posts.map((p) => (
            <a key={p.title} href="#" className="group flex gap-5">
              <div className="relative aspect-square w-32 shrink-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-muted">
                  {p.date} · {p.read}
                </p>
                <h3 className="mt-1 font-serif text-xl font-semibold leading-snug transition-colors group-hover:text-forest">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
