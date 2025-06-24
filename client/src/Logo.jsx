import React from "react";

const Logo = ({ className }) => (
  <svg
    className={className}
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="32"
      cy="20"
      rx="22"
      ry="10"
      fill="#00a67e"
      fillOpacity="0.85"
    />
    <ellipse
      cx="32"
      cy="20"
      rx="22"
      ry="10"
      fill="url(#paint0_radial)"
      fillOpacity="0.3"
    />
    <rect
      x="10"
      y="20"
      width="44"
      height="24"
      rx="12"
      fill="#fff"
      fillOpacity="0.95"
    />
    <ellipse
      cx="32"
      cy="44"
      rx="22"
      ry="10"
      fill="#00a67e"
      fillOpacity="0.15"
    />
    <ellipse
      cx="32"
      cy="44"
      rx="22"
      ry="10"
      fill="url(#paint1_radial)"
      fillOpacity="0.2"
    />
    <text
      x="50%"
      y="38"
      textAnchor="middle"
      fontFamily="ColfaxAI, Helvetica, Arial, sans-serif"
      fontWeight="bold"
      fontSize="18"
      fill="#00a67e"
      letterSpacing="2"
    >
      SQL GPT
    </text>
    <defs>
      <radialGradient
        id="paint0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(32 20) scale(22 10)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0cbaba" />
        <stop offset="1" stopColor="#00a67e" stopOpacity="0.5" />
      </radialGradient>
      <radialGradient
        id="paint1_radial"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(32 44) scale(22 10)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0cbaba" />
        <stop offset="1" stopColor="#00a67e" stopOpacity="0.2" />
      </radialGradient>
    </defs>
  </svg>
);

export default Logo;
