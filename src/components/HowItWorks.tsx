import { GoldDivider, SectionHeading, SectionLabel } from "./shared";

const steps = [
  {
    n: "01",
    title: "Free Consultation",
    desc: "We assess your location, foot traffic, and goals to recommend the right ATM program — with zero obligation.",
  },
  {
    n: "02",
    title: "Paperwork & Agreement",
    desc: "A simple contract outlines the placement terms, revenue split, and service commitments. No hidden fees.",
  },
  {
    n: "03",
    title: "Installation",
    desc: "Our techs install and configure the machine on-site, typically within days of agreement.",
  },
  {
    n: "04",
    title: "Earn Surcharge Revenue",
    desc: "Your ATM goes live. Customers pay a small surcharge fee — and you keep a share on every transaction.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: "var(--color-cream)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Simple Process</SectionLabel>
            <GoldDivider />
            <SectionHeading>
              Up & Running in Days,
              <br />
              Not Months
            </SectionHeading>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "var(--color-muted)",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              Getting an ATM for your business is easier than you think. eNetwork ATM handles
              everything from start to finish — you just collect the revenue.
            </p>

            <div className="flex flex-col gap-0">
              {steps.map(({ n, title, desc }, i) => (
                <div
                  key={n}
                  style={{
                    display: "flex",
                    gap: 24,
                    paddingBottom: i < steps.length - 1 ? 32 : 0,
                    borderBottom: i < steps.length - 1 ? "1px solid var(--color-border)" : "none",
                    marginBottom: i < steps.length - 1 ? 32 : 0,
                  }}
                >
                  <div style={{ flexShrink: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 40,
                        fontWeight: 900,
                        color: "var(--color-gold)",
                        lineHeight: 1,
                        opacity: 0.5,
                      }}
                    >
                      {n}
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 18,
                        fontWeight: 800,
                        color: "var(--color-charcoal)",
                        marginBottom: 6,
                      }}
                    >
                      {title}
                    </h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--color-muted)", lineHeight: 1.7 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 24,
                left: 24,
                right: -24,
                bottom: -24,
                border: "2px solid var(--color-gold)",
                opacity: 0.3,
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1767128465859-34e9abfb501e?w=700&h=820&fit=crop&auto=format"
              alt="Woman using ATM on city street"
              style={{ width: "100%", height: 520, objectFit: "cover", display: "block", position: "relative" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 32,
                left: -24,
                background: "var(--color-gold)",
                color: "#ffffff",
                padding: "16px 24px",
              }}
            >
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 28, lineHeight: 1 }}>FREE</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, opacity: 0.9 }}>ATM Placement Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
