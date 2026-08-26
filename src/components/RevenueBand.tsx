"use client";

export default function RevenueBand() {
  return (
    <section
      style={{
        background: "var(--color-gold)",
        padding: "72px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px)",
        }}
      />
      <div
        style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}
        className="flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 8,
            }}
          >
            Your Location Could Be Generating
            <br />
            <span style={{ color: "var(--color-charcoal)" }}>$500–$2,000 / Month</span>
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.8)" }}>
            In surcharge revenue — with no equipment cost to you.
          </p>
        </div>
        <a
          href="#contact"
          style={{
            background: "var(--color-charcoal)",
            color: "#ffffff",
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "18px 40px",
            textDecoration: "none",
            display: "inline-block",
            flexShrink: 0,
            transition: "background 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#000000")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-charcoal)")}
        >
          Calculate My Revenue
        </a>
      </div>
    </section>
  );
}
