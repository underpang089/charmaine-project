export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
      {children}
    </p>
  );
}
