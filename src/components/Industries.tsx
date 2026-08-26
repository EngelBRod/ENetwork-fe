"use client";

import { SectionHeading, SectionLabel } from "./shared";

const industries = [
  { icon: "🏪", name: "Retail & Convenience Stores" },
  { icon: "🏨", name: "Hotels & Motels" },
  { icon: "🍽️", name: "Restaurants & Bars" },
  { icon: "🏢", name: "Apartment Communities" },
  { icon: "🎭", name: "Entertainment Venues" },
  { icon: "💈", name: "Salons & Spas" },
  { icon: "⛽", name: "Gas Stations" },
  { icon: "🎰", name: "Gaming Locations" },
  { icon: "🏋️", name: "Fitness Centers" },
  { icon: "🏥", name: "Medical Offices" },
  { icon: "🎪", name: "Event Spaces" },
  { icon: "🏗️", name: "Laundromats" },
];

export default function Industries() {
  return (
    <section id="industries" style={{ background: "var(--color-charcoal)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="text-center mb-16">
          <SectionLabel>Who We Serve</SectionLabel>
          <div className="flex items-center justify-center gap-3 mb-6">
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
          <SectionHeading dark>Industries We Serve</SectionHeading>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Any high-traffic business can benefit from an ATM. If your customers use cash, we
            have a solution for you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {industries.map(({ icon, name }) => (
            <div
              key={name}
              style={{
                background: "var(--color-charcoal)",
                padding: "28px 20px",
                textAlign: "center",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(196,147,58,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-charcoal)")}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.75)",
                  letterSpacing: "0.02em",
                  lineHeight: 1.4,
                }}
              >
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
