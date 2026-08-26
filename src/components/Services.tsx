"use client";

import { GoldDivider, SectionHeading, SectionLabel } from "./shared";

const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    title: "ATM Sales & Placement",
    desc: "We supply and place industry-leading ATM hardware tailored to your location and customer volume — from compact countertop units to full-sized walk-up machines.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Installation & Setup",
    desc: "Our certified technicians handle full on-site installation, network connectivity, and compliance configuration so your ATM is ready fast with zero disruption to your business.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Transaction Processing",
    desc: "Seamless real-time processing on all major networks — Visa, Mastercard, Interac, and more. Every transaction is encrypted, verified, and settled efficiently.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Cash Management",
    desc: "We handle vault cash supply, replenishment scheduling, and armored transport so your ATM is always stocked and operational — no effort on your part.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Maintenance & Repair",
    desc: "Rapid-response on-site service for hardware faults, software issues, and compliance updates. We proactively monitor every machine to catch problems before they affect uptime.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Reporting & Analytics",
    desc: "Access real-time dashboards showing transaction volumes, surcharge revenue, cash levels, and machine performance — helping you make smarter business decisions.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="flex flex-col items-start mb-16">
          <SectionLabel>What We Do</SectionLabel>
          <GoldDivider />
          <SectionHeading>Full-Service ATM Solutions</SectionHeading>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "var(--color-muted)",
              maxWidth: 580,
              lineHeight: 1.7,
            }}
          >
            From acquisition to daily operations, eNetwork ATM manages every aspect of your ATM
            program — so you collect revenue without the headaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--color-border)" }}>
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: "#ffffff",
                padding: "40px 36px",
                transition: "background 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--color-cream)";
                const iconEl = el.querySelector(".icon-wrap") as HTMLElement | null;
                if (iconEl) iconEl.style.color = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "#ffffff";
                const iconEl = el.querySelector(".icon-wrap") as HTMLElement | null;
                if (iconEl) iconEl.style.color = "var(--color-charcoal-mid)";
              }}
            >
              <div
                className="icon-wrap"
                style={{ color: "var(--color-charcoal-mid)", marginBottom: 20, transition: "color 0.25s" }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "var(--color-charcoal)",
                  marginBottom: 12,
                  letterSpacing: "0.01em",
                }}
              >
                {title}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--color-muted)", lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
