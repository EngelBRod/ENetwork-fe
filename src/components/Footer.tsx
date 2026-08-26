"use client";

const serviceLinks = [
  "ATM Sales & Placement",
  "Installation & Setup",
  "Cash Management",
  "Transaction Processing",
  "Maintenance & Repair",
  "Reporting & Analytics",
];

export default function Footer() {
  return (
    <footer style={{ background: "#111111", padding: "60px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.jpg"
                alt="eNetwork ATM logo"
                style={{ height: 48, width: 48, objectFit: "cover", borderRadius: "50%" }}
              />
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 900, color: "#ffffff", letterSpacing: "0.05em", lineHeight: 1 }}>
                  ENETWORK
                </p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, color: "var(--color-gold)", letterSpacing: "0.3em", marginTop: 2 }}>
                  — ATM —
                </p>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 20 }}>
              Full-service ATM solutions for businesses throughout Westchester County and the East Coast.
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, color: "var(--color-gold)", letterSpacing: "0.2em" }}>
              RELIABLE. SECURE. NATIONWIDE.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#ffffff", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
              Our Services
            </p>
            {serviceLinks.map((s) => (
              <a
                key={s}
                href="#services"
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  marginBottom: 10,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {s}
              </a>
            ))}
          </div>

          {/* Service area */}
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#ffffff", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
              Service Area
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
              Westchester County, NY
              <br />
              New York City, NY
              <br />
              Long Island, NY
              <br />
              New Jersey
              <br />
              Connecticut
              <br />
              And throughout the East Coast
            </p>
            <div style={{ marginTop: 24 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#ffffff", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
                Contact
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.45)" }}>
                info@enetworkatm.com
                <br />
                (914) 555-0100
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © 2025 eNetwork ATM. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            Westchester County, NY | East Coast ATM Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
