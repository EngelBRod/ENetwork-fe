"use client";

import { useEffect, useState } from "react";

const links = ["Services", "How It Works", "Industries", "Why Us", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}
        className="flex items-center justify-between h-20"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="eNetwork ATM logo"
            style={{ height: 52, width: 52, objectFit: "cover", borderRadius: "50%" }}
          />
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 900,
                letterSpacing: "0.05em",
                color: scrolled ? "var(--color-charcoal)" : "#ffffff",
                lineHeight: 1,
              }}
            >
              ENETWORK
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.3em",
                color: "var(--color-gold)",
                lineHeight: 1,
                marginTop: 2,
              }}
            >
              — ATM —
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: scrolled ? "var(--color-slate)" : "rgba(255,255,255,0.85)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled ? "var(--color-slate)" : "rgba(255,255,255,0.85)")
              }
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2"
          style={{
            background: "var(--color-gold)",
            color: "#ffffff",
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "10px 22px",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-gold-dark)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-gold)")}
        >
          Get Started
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: scrolled ? "var(--color-charcoal)" : "#ffffff", background: "none", border: "none" }}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#ffffff", borderTop: "1px solid var(--color-border)" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "14px 24px",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-slate)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {l}
            </a>
          ))}
          <div style={{ padding: "16px 24px" }}>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                background: "var(--color-gold)",
                color: "#fff",
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "12px 20px",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
