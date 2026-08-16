import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#173c2c",
          borderRadius: 7,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 38 38" fill="none">
          <circle cx="19" cy="19" r="17.25" stroke="#f6f4ea" strokeWidth="2" />
          <path
            d="M12.5 19.5L16.8 24L26 14"
            stroke="#f6f4ea"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
