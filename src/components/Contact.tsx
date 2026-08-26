"use client";

import { useState } from "react";
import { GoldDivider, SectionHeading, SectionLabel } from "./shared";

type FormState = {
  name: string;
  business: string;
  phone: string;
  email: string;
  message: string;
};

const contactDetails = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Headquarters",
    value: "Westchester County, New York",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "(914) 555-0100",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "info@enetworkatm.com",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: "Support Hours",
    value: "24/7 Remote Monitoring & Support",
  },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  color: "var(--color-charcoal)",
  background: "#ffffff",
  border: "1px solid var(--color-border)",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", business: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: "var(--color-cream)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <SectionLabel>Get In Touch</SectionLabel>
            <GoldDivider />
            <SectionHeading>
              Ready to Add an ATM
              <br />
              to Your Business?
            </SectionHeading>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "var(--color-muted)", lineHeight: 1.7, marginBottom: 40 }}>
              Contact us today for a free, no-obligation consultation. We&apos;ll assess your
              location and put together a customized ATM solution.
            </p>

            <div className="flex flex-col gap-6">
              {contactDetails.map(({ icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "var(--color-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--color-gold)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      {label}
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--color-charcoal)" }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ background: "#ffffff", border: "1px solid var(--color-gold)", padding: "60px 40px", textAlign: "center" }}>
                <div style={{ color: "var(--color-gold)", marginBottom: 16, display: "flex", justifyContent: "center" }}>
                  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 900, color: "var(--color-charcoal)", marginBottom: 12 }}>
                  Message Received!
                </h3>
                <p style={{ fontFamily: "var(--font-body)", color: "var(--color-muted)", fontSize: 16 }}>
                  A member of our team will reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "#ffffff", padding: "40px", border: "1px solid var(--color-border)" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 800,
                    color: "var(--color-charcoal)",
                    marginBottom: 28,
                    letterSpacing: "0.02em",
                  }}
                >
                  Free Consultation Request
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { key: "name" as const, label: "Full Name", placeholder: "John Smith" },
                    { key: "business" as const, label: "Business Name", placeholder: "My Store LLC" },
                  ].map(({ key, label, placeholder }) => (
                    <div key={key}>
                      <label
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "var(--color-slate)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: 6,
                        }}
                      >
                        {label}
                      </label>
                      <input
                        type="text"
                        placeholder={placeholder}
                        required
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { key: "phone" as const, label: "Phone Number", placeholder: "(914) 555-0100", type: "tel" },
                    { key: "email" as const, label: "Email Address", placeholder: "john@example.com", type: "email" },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "var(--color-slate)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: 6,
                        }}
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        required
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-6">
                  <label
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--color-slate)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Tell Us About Your Location
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Type of business, estimated daily foot traffic, location..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "var(--color-charcoal)",
                    color: "#ffffff",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "16px",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-charcoal)")}
                >
                  Request Free Consultation →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
