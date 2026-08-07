export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 px-6 text-center text-white">
        {eyebrow && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-serif text-5xl font-medium drop-shadow-sm sm:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
