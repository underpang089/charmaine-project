"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/components/nav";
import { Instagram, Mail, Menu, TikTok, X, Youtube } from "@/components/icons";

const socials = [
  { Icon: Youtube, label: "YouTube" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: TikTok, label: "TikTok" },
  { Icon: Mail, label: "Email" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function SiteHeader({
  variant = "solid",
}: {
  variant?: "solid" | "transparent";
}) {
  const pathname = usePathname();
  const transparent = variant === "transparent";
  const [open, setOpen] = useState(false);

  const nav = (
    <nav
      className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-6 ${
        transparent ? "relative z-10 text-white" : "text-foreground"
      }`}
    >
      <Link href="/" className="font-serif text-xl font-semibold tracking-[0.3em]">
        HOLLY DAY
      </Link>

      <ul className="hidden items-center gap-7 text-sm md:flex">
        {navLinks.map((l) => {
          const active = isActive(pathname, l.href);
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`transition-opacity hover:opacity-100 ${
                  transparent
                    ? active
                      ? "opacity-100 underline underline-offset-8"
                      : "opacity-90"
                    : active
                      ? "text-forest"
                      : "opacity-90 hover:text-forest"
                }`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        className={`flex items-center gap-4 ${transparent ? "" : "text-muted"}`}
      >
        {socials.map(({ Icon, label }) => (
          <a key={label} href="#" aria-label={label}>
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </nav>
  );

  const mobileMenu = open ? (
    <div
      className={`md:hidden ${
        transparent
          ? "absolute inset-x-0 top-full z-20 border-b border-white/20 bg-black/80 text-white backdrop-blur"
          : "border-b border-line bg-background"
      }`}
    >
      <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm">
        {navLinks.map((l) => {
          const active = isActive(pathname, l.href);
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-2 transition-opacity ${
                  active
                    ? transparent
                      ? "opacity-100 underline underline-offset-8"
                      : "text-forest"
                    : "opacity-90"
                }`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;

  if (transparent)
    return (
      <div className="relative">
        {nav}
        {mobileMenu}
      </div>
    );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      {nav}
      {mobileMenu}
    </header>
  );
}
