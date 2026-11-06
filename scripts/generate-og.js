const sharp = require("sharp");
const path = require("path");

const W = 1200;
const H = 630;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#0a0a0b"/>
  <g stroke="#1b1b21" stroke-width="1">
    ${Array.from({ length: 15 }, (_, i) => `<line x1="${i * 80}" y1="0" x2="${i * 80}" y2="${H}"/>`).join("")}
    ${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${i * 80}" x2="${W}" y2="${i * 80}"/>`).join("")}
  </g>

  <rect x="72" y="72" width="48" height="48" rx="10" fill="#c9f24b"/>
  <text x="96" y="104" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="700"
        fill="#0a0a0b" text-anchor="middle">RS</text>
  <text x="136" y="104" font-family="Segoe UI, Arial, sans-serif" font-size="19" letter-spacing="5"
        fill="#a0a0ab">RAJAT SHARMA</text>

  <text x="72" y="300" font-family="Segoe UI, Arial, sans-serif" font-size="66" font-weight="600"
        letter-spacing="-2" fill="#f2f2f3">Building thoughtful</text>
  <text x="72" y="378" font-family="Segoe UI, Arial, sans-serif" font-size="66" font-weight="600"
        letter-spacing="-2" fill="#f2f2f3">digital experiences</text>
  <text x="72" y="456" font-family="Segoe UI, Arial, sans-serif" font-size="66" font-weight="300"
        letter-spacing="-2" fill="#a0a0ab">through engineering.</text>

  <line x1="72" y1="530" x2="${W - 72}" y2="530" stroke="#232329" stroke-width="1"/>
  <text x="72" y="570" font-family="Segoe UI, Arial, sans-serif" font-size="18" letter-spacing="3"
        fill="#6c6c78">REACT · NEXT.JS · VUE · TYPESCRIPT</text>
  <text x="${W - 72}" y="570" font-family="Segoe UI, Arial, sans-serif" font-size="18" letter-spacing="1"
        fill="#6c6c78" text-anchor="end">SENIOR SOFTWARE ENGINEER</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, "..", "public", "og-image.png"))
  .then((info) => console.log("og-image.png written:", info.width, "x", info.height))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
