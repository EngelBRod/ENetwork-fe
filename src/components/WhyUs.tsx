"use client";

import { GoldDivider, SectionHeading, SectionLabel } from "./shared";

const reasons = [
  {
    title: "No Upfront Cost",
    desc: "We offer free ATM placement programs — no capital outlay required. We install and maintain the machine; you earn the revenue.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "24/7 Remote Monitoring",
    desc: "Every ATM in our network is monitored around the clock. We detect and resolve issues proactively — often before you notice them.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Local Westchester Team",
    desc: "Based in Westchester County, our technicians are close by — delivering faster response times than national competitors.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Surcharge Revenue Share",
    desc: "You earn a portion of every ATM surcharge transaction processed at your location — turning unused floor space into consistent income.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "PCI-DSS Compliant",
    desc: "All our machines meet current PCI-DSS security standards. We handle software updates and compliance so you never fall behind regulations.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Responsive Service",
    desc: "When you call, a real person answers. Our dedicated support team is available to address any issue quickly and professionally.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: "#ffffff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Sticky only from md up — on mobile the columns stack, so this
              block should scroll away naturally along with the cards
              instead of pinning in place. */}
          <div className="md:sticky static md:top-[120px]">
            <SectionLabel>Why eNetwork ATM</SectionLabel>
            <GoldDivider />
            <SectionHeading>
              The East Coast Partner
              <br />
              You Can Count On
            </SectionHeading>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "var(--color-muted)", lineHeight: 1.7, marginBottom: 36 }}>
              We&apos;re not just an ATM vendor — we&apos;re a long-term partner. eNetwork ATM delivers
              reliable machines, transparent revenue sharing, and responsive support that keeps
              your business running and your customers happy.
            </p>
            <div style={{ borderLeft: "3px solid var(--color-gold)", paddingLeft: 20 }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--color-charcoal)",
                  fontStyle: "italic",
                  lineHeight: 1.4,
                }}
              >
                &ldquo;Delivering innovative ATM solutions that create value for businesses and their
                customers across the East Coast.&rdquo;
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-gold)", marginTop: 12, letterSpacing: "0.05em" }}>
                — eNetwork ATM Mission
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {reasons.map(({ title, desc, icon }) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "24px",
                  border: "1px solid var(--color-border)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-gold)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(196,147,58,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 48,
                    height: 48,
                    background: "var(--color-cream)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-gold)",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 17,
                      fontWeight: 800,
                      color: "var(--color-charcoal)",
                      marginBottom: 6,
                    }}
                  >
                    {title}
                  </h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-muted)", lineHeight: 1.7 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
