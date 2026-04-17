import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 48,
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(236,246,255,1) 100%)",
          color: "#102845",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(16,77,129,0.14)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(240,248,255,0.98) 100%)",
            padding: 56,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontSize: 22,
                textTransform: "uppercase",
                letterSpacing: 6,
                color: "#1698c9",
              }}
            >
              REVA Support for Realtors
            </div>
            <div
              style={{
                fontSize: 78,
                lineHeight: 1,
                fontWeight: 700,
                maxWidth: 760,
              }}
            >
              Back Office Solutions
            </div>
            <div
              style={{
                fontSize: 32,
                lineHeight: 1.3,
                maxWidth: 820,
                color: "#355c82",
              }}
            >
              Lead follow-up, CRM management, appointment setting, and back
              office support.
            </div>
          </div>

          <div style={{ display: "flex", gap: 20 }}>
            {[
              "Lead response and appointment setting",
              "CRM updates and data entry",
              "Listing and back office support",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid rgba(16,77,129,0.12)",
                  background: "rgba(255,255,255,0.92)",
                  borderRadius: 18,
                  padding: "18px 20px",
                  fontSize: 24,
                  lineHeight: 1.3,
                  color: "#173a66",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 24,
              color: "#355c82",
            }}
          >
            <div>Edmonton, Alberta</div>
            <div>backofficesolutions.ca</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
