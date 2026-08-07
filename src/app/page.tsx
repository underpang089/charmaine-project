import Link from "next/link";
import {
  Aperture,
  Backpack,
  Bed,
  Camera,
  ChevronDown,
  Coffee,
  Facebook,
  Globe,
  Instagram,
  Laptop,
  Leaf,
  Mail,
  MapPin,
  Play,
  TikTok,
  Tripod,
  Utensils,
  Video,
  Youtube,
} from "@/components/icons";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionLabel from "@/components/SectionLabel";
import { img } from "@/lib/img";

const HERO = img("photo-1506905925346-21bda4d32df4", 2000);
const OSAKA = img("photo-1590559899731-a382839e5549", 1200);
const JOURNAL = img("photo-1517842645767-c639042777db", 1000);
const ABOUT = img("photo-1524504388940-b1c1722653e1", 800);
const MAP = img("photo-1524661135-423995f22d0b", 1000);

const explore = [
  { Icon: Bed, label: "Hotels", href: "/hotels" },
  { Icon: Coffee, label: "Cafes", href: "#" },
  { Icon: Utensils, label: "Local Food", href: "#" },
  { Icon: Leaf, label: "Hidden Gems", href: "#" },
  { Icon: MapPin, label: "Destinations", href: "/destinations" },
];

const collections = [
  { name: "Thailand", img: img("photo-1552465011-b4e21bf6e79a") },
  { name: "Japan", img: img("photo-1528360983277-13d401cdc186") },
  { name: "Germany", img: img("photo-1467269204594-9661b134dd2b") },
  { name: "Taiwan", img: img("photo-1470004914212-05527e49370b") },
];

const gear = [
  { Icon: Camera, label: "Camera" },
  { Icon: Aperture, label: "Lens" },
  { Icon: Video, label: "Gimbal" },
  { Icon: Tripod, label: "Tripod" },
  { Icon: Backpack, label: "Backpack" },
  { Icon: Laptop, label: "Editing" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      {/* HERO */}
      <header className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO})` }}
        />
        <div className="absolute inset-0 bg-black/35" />

        <SiteHeader variant="transparent" />

        <div className="relative z-10 flex flex-col items-center px-6 pt-20 text-center text-white md:pt-28">
          <h1 className="font-serif text-5xl font-medium leading-tight drop-shadow-sm sm:text-6xl md:text-7xl">
            Travel slowly.
            <br />
            Discover deeply.
            <br />
            Remember forever.
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/85">
            Travel stories, honest hotel stays,
            <br />
            cafes, local food &amp; hidden places.
          </p>
          <ChevronDown className="mt-16 h-6 w-6 animate-bounce text-white/80" />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6">
        {/* LATEST JOURNEY */}
        <section className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2">
          <div>
            <SectionLabel>Latest Journey</SectionLabel>
            <div className="mt-4 md:pl-2">
              <h2 className="font-serif text-4xl font-semibold">Osaka</h2>
              <p className="mt-2 text-muted">2 Days 1 Night</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 bg-forest px-5 py-2.5 text-sm text-white transition-colors hover:bg-forest-dark"
              >
                <Play className="h-3.5 w-3.5" /> Watch on YouTube
              </a>
            </div>
          </div>
          <Link href="/latest" className="group relative block aspect-video overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${OSAKA})` }}
            />
            <div className="absolute inset-0 bg-black/10" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow-lg">
              <Play className="ml-0.5 h-5 w-5" />
            </span>
          </Link>
        </section>

        <hr className="border-line" />

        {/* EXPLORE */}
        <section className="py-14">
          <SectionLabel>Explore</SectionLabel>
          <div className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-5 sm:divide-x sm:divide-line">
            {explore.map(({ Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="flex flex-col items-center gap-3 px-2 text-muted transition-colors hover:text-forest"
              >
                <Icon className="h-7 w-7" />
                <span className="font-serif text-lg text-foreground">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* TRAVEL COLLECTIONS */}
        <section className="py-6">
          <SectionLabel>Travel Collections</SectionLabel>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {collections.map((c) => (
              <Link
                key={c.name}
                href="/destinations"
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${c.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 font-serif text-xl font-medium text-white">
                  {c.name}
                </span>
              </Link>
            ))}
            <Link
              href="/destinations"
              className="flex aspect-[3/4] flex-col items-center justify-center gap-3 bg-card text-muted transition-colors hover:text-forest"
            >
              <Globe className="h-8 w-8" />
              <span className="text-center font-serif text-lg leading-tight text-foreground">
                More
                <br />
                Destinations
              </span>
            </Link>
          </div>
        </section>

        {/* MAP + JOURNAL */}
        <section className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2">
          <div className="grid grid-cols-2 overflow-hidden bg-card">
            <div className="flex flex-col justify-center p-6">
              <SectionLabel>Visited Places</SectionLabel>
              <h3 className="mt-3 font-serif text-2xl font-semibold">My Google Map</h3>
              <a
                href="#"
                className="mt-5 inline-flex w-fit items-center bg-forest px-4 py-2 text-sm text-white transition-colors hover:bg-forest-dark"
              >
                Open Map
              </a>
            </div>
            <div
              className="min-h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url(${MAP})` }}
            />
          </div>
          <div className="grid grid-cols-2 overflow-hidden bg-card">
            <div className="flex flex-col justify-center p-6">
              <SectionLabel>Travel Journal</SectionLabel>
              <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight">
                Stories from
                <br />
                the Road
              </h3>
              <Link
                href="/journal"
                className="mt-5 inline-flex w-fit items-center border-b border-foreground pb-0.5 text-sm transition-colors hover:text-forest"
              >
                Read Journal
              </Link>
            </div>
            <div
              className="min-h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url(${JOURNAL})` }}
            />
          </div>
        </section>

        <hr className="border-line" />

        {/* GEAR + SUPPORT */}
        <section className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 md:divide-x md:divide-line">
          <div className="md:pr-10">
            <SectionLabel>Travel Gear</SectionLabel>
            <div className="mt-8 grid grid-cols-3 gap-y-8 sm:grid-cols-6">
              {gear.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-forest"
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-xs text-foreground">{label}</span>
                </a>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-muted">
              All the gear I use for capturing memories.
            </p>
            <div className="mt-3 text-center">
              <Link href="/gear" className="border-b border-foreground pb-0.5 text-sm hover:text-forest">
                View My Gear
              </Link>
            </div>
          </div>

          <div className="md:pl-10">
            <SectionLabel>Support Holly Day</SectionLabel>
            <p className="mt-4 text-center text-sm text-muted">
              Your bookings through these links
              <br />
              help support my journeys ♡
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {["Trip.com", "Booking.com", "agoda"].map((b) => (
                <a
                  key={b}
                  href="#"
                  className="flex h-12 min-w-[110px] items-center justify-center bg-white px-5 text-sm font-semibold text-foreground shadow-sm transition-shadow hover:shadow-md"
                >
                  {b}
                </a>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted">
              Thank you for being part of the journey!
            </p>
          </div>
        </section>

        <hr className="border-line" />

        {/* ABOUT + CONNECT */}
        <section className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:divide-x md:divide-line">
          <div className="flex items-center gap-6 md:pr-10">
            <div
              className="h-32 w-28 shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ABOUT})` }}
            />
            <div>
              <SectionLabel>About</SectionLabel>
              <h3 className="mt-2 font-serif text-3xl font-semibold">Hi, I&apos;m Charmaine.</h3>
              <p className="mt-2 max-w-xs text-sm text-muted">
                I created Holly Day to preserve travel memories and share peaceful
                places worth coming back to.
              </p>
              <Link href="/about" className="mt-3 inline-block border-b border-foreground pb-0.5 text-sm hover:text-forest">
                More About Me
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center md:pl-10">
            <SectionLabel>Let&apos;s Connect</SectionLabel>
            <div className="mt-6 flex items-center gap-8 text-muted">
              {[
                { Icon: Youtube, label: "YouTube" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: TikTok, label: "TikTok" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
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
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
