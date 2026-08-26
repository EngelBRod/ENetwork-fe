export const GoldDivider = () => (
  <div className="flex items-center gap-3 mb-6">
    <div style={{ width: 40, height: 2, background: "var(--color-gold)" }} />
    <div
      style={{
        width: 8,
        height: 8,
        background: "var(--color-gold)",
        transform: "rotate(45deg)",
      }}
    />
    <div style={{ width: 40, height: 2, background: "var(--color-gold)" }} />
  </div>
);

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontFamily: "var(--font-display)",
      color: "var(--color-gold)",
      letterSpacing: "0.2em",
    }}
    className="text-xs font-bold uppercase mb-2"
  >
    {children}
  </p>
);

export const SectionHeading = ({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <h2
    style={{
      fontFamily: "var(--font-display)",
      color: dark ? "#ffffff" : "var(--color-charcoal)",
    }}
    className="text-4xl md:text-5xl font-black leading-none tracking-tight mb-5"
  >
    {children}
  </h2>
);
