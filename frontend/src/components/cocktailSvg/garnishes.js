export const limeWheel = (x = 42, y = 18) => `
  <circle cx="${x}" cy="${y}" r="5" fill="#AED581" stroke="#689F38" stroke-width="0.8"/>
  <circle cx="${x}" cy="${y}" r="2.5" fill="#C5E1A5"/>
  <line x1="${x - 2}" y1="${y - 1}" x2="${x + 2}" y2="${y + 1}" stroke="#689F38" stroke-width="0.4"/>
  <line x1="${x - 1}" y1="${y - 2.5}" x2="${x + 1}" y2="${y + 2.5}" stroke="#689F38" stroke-width="0.4"/>
  <line x1="${x - 2.5}" y1="${y}" x2="${x + 2.5}" y2="${y}" stroke="#689F38" stroke-width="0.4"/>
`;

export const limeWedge = (x = 44, y = 16) => `
  <path d="M${x - 4} ${y + 3} L${x} ${y - 3} L${x + 4} ${y + 3} Z" fill="#AED581" stroke="#689F38" stroke-width="0.8"/>
  <line x1="${x}" y1="${y - 1}" x2="${x}" y2="${y + 2}" stroke="#C5E1A5" stroke-width="0.6"/>
  <line x1="${x - 2}" y1="${y + 1}" x2="${x + 2}" y2="${y + 1}" stroke="#C5E1A5" stroke-width="0.4"/>
`;

export const lemonTwist = (x = 44, y = 14) => `
  <path d="M${x - 3} ${y + 4} Q${x + 2} ${y} ${x - 1} ${y - 4} Q${x + 3} ${y - 1} ${x + 1} ${y + 3}" fill="none" stroke="#FFF176" stroke-width="2" stroke-linecap="round"/>
  <path d="M${x - 2} ${y + 3} Q${x + 2} ${y + 1} ${x} ${y - 2}" fill="none" stroke="#F9A825" stroke-width="0.6"/>
`;

export const lemonPeel = (x = 44, y = 14) => `
  <path d="M${x - 4} ${y + 2} Q${x} ${y - 4} ${x + 4} ${y + 2}" fill="#FFF9C4" stroke="#F9A825" stroke-width="0.8"/>
  <path d="M${x - 3} ${y + 1} Q${x} ${y - 2} ${x + 3} ${y + 1}" fill="none" stroke="#FFF176" stroke-width="0.5"/>
`;

export const orangePeel = (x = 42, y = 16) => `
  <path d="M${x - 4} ${y + 2} Q${x} ${y - 4} ${x + 4} ${y + 2}" fill="#FFB74D" stroke="#E65100" stroke-width="0.8"/>
  <path d="M${x - 3} ${y + 1} Q${x} ${y - 2} ${x + 3} ${y + 1}" fill="none" stroke="#FF8A65" stroke-width="0.5"/>
`;

export const orangeSlice = (x = 44, y = 16) => `
  <circle cx="${x}" cy="${y}" r="5" fill="#FFB74D" stroke="#E65100" stroke-width="0.8"/>
  <circle cx="${x}" cy="${y}" r="3" fill="#FFE0B2"/>
  <line x1="${x}" y1="${y - 3}" x2="${x}" y2="${y + 3}" stroke="#FFB74D" stroke-width="0.5"/>
  <line x1="${x - 3}" y1="${y}" x2="${x + 3}" y2="${y}" stroke="#FFB74D" stroke-width="0.5"/>
  <line x1="${x - 2}" y1="${y - 2}" x2="${x + 2}" y2="${y + 2}" stroke="#FFB74D" stroke-width="0.4"/>
  <line x1="${x + 2}" y1="${y - 2}" x2="${x - 2}" y2="${y + 2}" stroke="#FFB74D" stroke-width="0.4"/>
`;

export const cherry = (x = 30, y = 16) => `
  <line x1="${x}" y1="${y - 4}" x2="${x + 2}" y2="${y - 8}" stroke="#4E342E" stroke-width="0.8"/>
  <circle cx="${x}" cy="${y}" r="3.5" fill="#E53935" stroke="#B71C1C" stroke-width="0.6"/>
  <circle cx="${x - 1}" cy="${y - 1}" r="1" fill="#EF5350" opacity="0.6"/>
`;

export const olive = (x = 28, y = 16) => `
  <ellipse cx="${x}" cy="${y}" rx="3.5" ry="2.5" fill="#A5D6A7" stroke="#388E3C" stroke-width="0.8"/>
  <circle cx="${x}" cy="${y}" r="1.2" fill="#E53935"/>
`;

export const mintSprig = (x = 28, y = 10) => `
  <line x1="${x}" y1="${y + 6}" x2="${x}" y2="${y - 2}" stroke="#2E7D32" stroke-width="1"/>
  <circle cx="${x - 3}" cy="${y}" r="2.5" fill="#4CAF50" stroke="#2E7D32" stroke-width="0.5"/>
  <circle cx="${x + 3}" cy="${y - 1}" r="2.2" fill="#66BB6A" stroke="#2E7D32" stroke-width="0.5"/>
  <circle cx="${x}" cy="${y - 3}" r="2" fill="#43A047" stroke="#2E7D32" stroke-width="0.5"/>
`;

export const pineappleWedge = (x = 44, y = 14) => `
  <path d="M${x - 4} ${y + 4} L${x} ${y - 4} L${x + 4} ${y + 4} Z" fill="#FFF176" stroke="#F9A825" stroke-width="0.8"/>
  <line x1="${x - 2}" y1="${y + 2}" x2="${x + 2}" y2="${y + 2}" stroke="#FFEB3B" stroke-width="0.5"/>
  <line x1="${x - 1}" y1="${y}" x2="${x + 1}" y2="${y}" stroke="#FFEB3B" stroke-width="0.4"/>
  <line x1="${x}" y1="${y - 4}" x2="${x}" y2="${y - 7}" stroke="#8BC34A" stroke-width="1" stroke-linecap="round"/>
`;

export const lemonSlice = (x = 44, y = 16) => `
  <circle cx="${x}" cy="${y}" r="5" fill="#FFF9C4" stroke="#F9A825" stroke-width="0.8"/>
  <circle cx="${x}" cy="${y}" r="3" fill="#FFFDE7"/>
  <line x1="${x}" y1="${y - 3}" x2="${x}" y2="${y + 3}" stroke="#FFF9C4" stroke-width="0.5"/>
  <line x1="${x - 3}" y1="${y}" x2="${x + 3}" y2="${y}" stroke="#FFF9C4" stroke-width="0.5"/>
  <line x1="${x - 2}" y1="${y - 2}" x2="${x + 2}" y2="${y + 2}" stroke="#FFF9C4" stroke-width="0.4"/>
  <line x1="${x + 2}" y1="${y - 2}" x2="${x - 2}" y2="${y + 2}" stroke="#FFF9C4" stroke-width="0.4"/>
`;

export const berry = (x = 30, y = 16) => `
  <circle cx="${x - 2}" cy="${y}" r="2.5" fill="#4A148C" stroke="#311B92" stroke-width="0.5"/>
  <circle cx="${x + 2}" cy="${y - 1}" r="2.2" fill="#6A1B9A" stroke="#4A148C" stroke-width="0.5"/>
  <circle cx="${x}" cy="${y + 2}" r="2" fill="#7B1FA2" stroke="#4A148C" stroke-width="0.5"/>
  <circle cx="${x - 1}" cy="${y - 1}" r="0.6" fill="#CE93D8" opacity="0.5"/>
`;

export const celeryStick = (x = 28, y = 8) => `
  <line x1="${x}" y1="${y + 8}" x2="${x}" y2="${y - 4}" stroke="#8BC34A" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M${x - 1} ${y - 2} Q${x - 4} ${y - 6} ${x - 2} ${y - 8}" fill="none" stroke="#AED581" stroke-width="1"/>
  <path d="M${x + 1} ${y} Q${x + 4} ${y - 4} ${x + 2} ${y - 6}" fill="none" stroke="#AED581" stroke-width="1"/>
`;

export const coffeeBeans = (x = 32, y = 16) => `
  <ellipse cx="${x - 3}" cy="${y}" rx="2.5" ry="1.8" fill="#4E342E" transform="rotate(-20 ${x - 3} ${y})"/>
  <line x1="${x - 4.5}" y1="${y}" x2="${x - 1.5}" y2="${y}" stroke="#3E2723" stroke-width="0.5"/>
  <ellipse cx="${x + 3}" cy="${y - 1}" rx="2.2" ry="1.5" fill="#5D4037" transform="rotate(15 ${x + 3} ${y - 1})"/>
  <line x1="${x + 1.5}" y1="${y - 1}" x2="${x + 4.5}" y2="${y - 1}" stroke="#3E2723" stroke-width="0.5"/>
  <ellipse cx="${x}" cy="${y + 2.5}" rx="2" ry="1.3" fill="#6D4C41" transform="rotate(-10 ${x} ${y + 2.5})"/>
  <line x1="${x - 1.5}" y1="${y + 2.5}" x2="${x + 1.5}" y2="${y + 2.5}" stroke="#3E2723" stroke-width="0.4"/>
`;

export const nutmeg = (x = 32, y = 14) => {
  let lines = '';
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 * Math.PI) / 180;
    lines += `<line x1="${x + Math.cos(angle)}" y1="${y + Math.sin(angle)}" x2="${x + Math.cos(angle) * 2.5}" y2="${y + Math.sin(angle) * 2.5}" stroke="#5D4037" stroke-width="0.3"/>`;
  }
  return `
    <circle cx="${x}" cy="${y}" r="3" fill="#8D6E63" stroke="#5D4037" stroke-width="0.6"/>
    ${lines}
  `;
};

export const creamFloat = (x = 32, y = 10) => `
  <ellipse cx="${x}" cy="${y}" rx="10" ry="3" fill="#FFFDE7" opacity="0.85" stroke="#E0E0E0" stroke-width="0.5"/>
  <ellipse cx="${x - 3}" cy="${y - 1}" rx="3" ry="1.5" fill="white" opacity="0.5"/>
`;

export const bittersDrops = (x = 32, y = 16) => `
  <circle cx="${x - 3}" cy="${y}" r="1.5" fill="#8D6E63" opacity="0.7"/>
  <circle cx="${x + 2}" cy="${y + 1}" r="1.2" fill="#6D4C41" opacity="0.6"/>
  <circle cx="${x}" cy="${y + 3}" r="1" fill="#795548" opacity="0.5"/>
`;
