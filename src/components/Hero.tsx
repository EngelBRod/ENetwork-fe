"use client";

const stats = [
  { num: "500+", label: "ATMs Deployed" },
  { num: "15+", label: "Years Experience" },
  { num: "24/7", label: "Monitoring & Support" },
  { num: "100%", label: "Satisfaction Guarantee" },
];

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--color-charcoal)",
      }}
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1771527253774-34c5c2860fee?w=1600&h=900&fit=crop&auto=format"
        alt="Person using ATM"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.25,
        }}
      />

      {/* Diagonal gold accent */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "42%",
          background: "linear-gradient(135deg, transparent 30%, rgba(196,147,58,0.12) 100%)",
        }}
      />

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", position: "relative", zIndex: 1, padding: "80px 24px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div style={{ maxWidth: 620 }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.35em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Westchester County & East Coast ATM Solutions
            </p>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 900,
                lineHeight: 0.92,
                color: "#ffffff",
                letterSpacing: "-0.01em",
                marginBottom: 20,
              }}
            >
              RELIABLE.
              <br />
              <span style={{ color: "var(--color-gold)" }}>SECURE.</span>
              <br />
              NATIONWIDE.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.72)",
                marginBottom: 28,
                maxWidth: 480,
              }}
            >
              eNetwork ATM is a full-service ATM solutions provider helping East Coast businesses
              generate surcharge revenue, drive foot traffic, and reduce credit card processing costs.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                style={{
                  background: "var(--color-gold)",
                  color: "#ffffff",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "12px 28px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-gold-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-gold)")}
              >
                Get Your Free ATM
              </a>
              <a
                href="#services"
                style={{
                  border: "1px solid rgba(255,255,255,0.35)",
                  color: "#ffffff",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "12px 28px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-gold)";
                  e.currentTarget.style.color = "var(--color-gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — natural flex child pinned to bottom */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(255,255,255,0.06)",
          borderTop: "1px solid rgba(196,147,58,0.3)",
          backdropFilter: "blur(8px)",
          padding: "20px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ num, label }) => (
            <div key={label} className="text-center md:text-left">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  fontWeight: 900,
                  color: "var(--color-gold)",
                  lineHeight: 1,
                }}
              >
                {num}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.55)",
                  marginTop: 3,
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
