export const cocktailGlass = (liquid = 0.65, liquidColor = '#E8F5E9', rim = '#E0E0E0') => {
  const liqTop = 14 + (1 - liquid) * 4;
  const liqLeft = 16 + (1 - liquid) * 8;
  const liqRight = 48 - (1 - liquid) * 8;
  const liqBottom = 36 - (1 - liquid) * 2;
  return `
    <path d="M14 12 L32 36 L50 12 Z" fill="white" stroke="${rim}" stroke-width="1.5"/>
    ${liquid > 0 ? `<path d="M${liqLeft} ${liqTop} L32 ${liqBottom} L${liqRight} ${liqTop} Z" fill="${liquidColor}" opacity="0.75"/>` : ''}
    <line x1="32" y1="36" x2="32" y2="48" stroke="${rim}" stroke-width="2.5"/>
    <ellipse cx="32" cy="49" rx="8" ry="2.5" fill="${rim}" opacity="0.3"/>
  `;
};

export const rocksGlass = (liquid = 0.5, liquidColor = '#FF8F00', rim = '#E0E0E0') => {
  const liqY = 50 - liquid * 26;
  const liqH = liquid * 26;
  return `
    <rect x="16" y="20" width="32" height="30" rx="3" fill="white" stroke="${rim}" stroke-width="1.5"/>
    ${liquid > 0 ? `<rect x="18" y="${liqY}" width="28" height="${liqH}" rx="2" fill="${liquidColor}" opacity="0.6"/>` : ''}
    <rect x="16" y="50" width="32" height="3" rx="1.5" fill="${rim}" opacity="0.4"/>
  `;
};

export const highballGlass = (liquid = 0.7, liquidColor = '#FFE082', rim = '#E0E0E0') => {
  const liqTop = 12 + (1 - liquid) * 8;
  return `
    <path d="M20 10 L18 52 Q18 54 22 54 L42 54 Q46 54 46 52 L44 10 Z" fill="white" stroke="${rim}" stroke-width="1.5"/>
    ${liquid > 0 ? `<path d="M${20.5 - (1 - liquid)} ${liqTop} L${18.5 + (1 - liquid) * 0.5} 50 Q${18.5 + (1 - liquid) * 0.5} 52 22 52 L42 52 Q${45.5 - (1 - liquid) * 0.5} 52 ${45.5 - (1 - liquid) * 0.5} 50 L${43.5 + (1 - liquid)} ${liqTop} Z" fill="${liquidColor}" opacity="0.55"/>` : ''}
  `;
};

export const champagneFlute = (liquid = 0.75, liquidColor = '#FFF9C4', rim = '#E0E0E0') => {
  const liqTop = 10 + (1 - liquid) * 14;
  return `
    <path d="M26 8 Q22 28 24 40 L24 48 L40 48 L40 40 Q42 28 38 8 Z" fill="white" stroke="${rim}" stroke-width="1.5"/>
    ${liquid > 0 ? `<path d="M27 ${liqTop} Q${23 + (1 - liquid) * 2} 28 24.5 40 L24.5 47 L39.5 47 L39.5 40 Q${40.5 - (1 - liquid) * 2} 28 37 ${liqTop} Z" fill="${liquidColor}" opacity="0.6"/>` : ''}
    <line x1="32" y1="48" x2="32" y2="52" stroke="${rim}" stroke-width="2"/>
    <ellipse cx="32" cy="53" rx="6" ry="2" fill="${rim}" opacity="0.3"/>
  `;
};

export const wineGlass = (liquid = 0.8, liquidColor = '#FFFDE7', rim = '#E0E0E0') => {
  const liqTop = 12 + (1 - liquid) * 10;
  return `
    <path d="M22 10 Q18 28 22 38 L24 46 L40 46 L42 38 Q46 28 42 10 Z" fill="white" stroke="${rim}" stroke-width="1.5"/>
    ${liquid > 0 ? `<path d="M${23 + (1 - liquid) * 2} ${liqTop} Q${19.5 + (1 - liquid) * 2} 28 22.5 38 L24.5 45 L39.5 45 L41.5 38 Q${44.5 - (1 - liquid) * 2} 28 ${41 - (1 - liquid) * 2} ${liqTop} Z" fill="${liquidColor}" opacity="0.55"/>` : ''}
    <line x1="32" y1="46" x2="32" y2="50" stroke="${rim}" stroke-width="2"/>
    <ellipse cx="32" cy="51" rx="7" ry="2.5" fill="${rim}" opacity="0.3"/>
  `;
};

export const coupeGlass = (liquid = 0.65, liquidColor = '#E8F5E9', rim = '#E0E0E0') => {
  const liqTop = 16 + (1 - liquid) * 6;
  const liqLeft = 18 + (1 - liquid) * 4;
  const liqRight = 46 - (1 - liquid) * 4;
  const liqBottom = 36 - (1 - liquid) * 2;
  return `
    <path d="M16 14 Q16 34 32 38 Q48 34 48 14 Z" fill="white" stroke="${rim}" stroke-width="1.5"/>
    ${liquid > 0 ? `<path d="M${liqLeft} ${liqTop} Q${liqLeft} 32 32 ${liqBottom} Q${liqRight} 32 ${liqRight} ${liqTop} Z" fill="${liquidColor}" opacity="0.6"/>` : ''}
    <line x1="32" y1="38" x2="32" y2="48" stroke="${rim}" stroke-width="2.5"/>
    <ellipse cx="32" cy="49" rx="8" ry="2.5" fill="${rim}" opacity="0.3"/>
  `;
};

export const hurricaneGlass = (liquid = 0.75, liquidColor = '#FFF59D', rim = '#E0E0E0') => {
  const liqTop = 12 + (1 - liquid) * 8;
  return `
    <path d="M22 10 Q18 30 22 42 Q28 50 32 50 Q36 50 42 42 Q46 30 42 10 Z" fill="white" stroke="${rim}" stroke-width="1.5"/>
    ${liquid > 0 ? `<path d="M${23 + (1 - liquid) * 2} ${liqTop} Q${19.5 + (1 - liquid) * 2} 30 22.5 42 Q28 49 32 49 Q36 49 41.5 42 Q${44.5 - (1 - liquid) * 2} 30 ${41 - (1 - liquid) * 2} ${liqTop} Z" fill="${liquidColor}" opacity="0.55"/>` : ''}
    <line x1="32" y1="50" x2="32" y2="54" stroke="${rim}" stroke-width="2.5"/>
    <ellipse cx="32" cy="55" rx="6" ry="2" fill="${rim}" opacity="0.3"/>
  `;
};

export const copperMug = (liquid = 0.7, liquidColor = '#FFE082', rim = '#E8A87C') => {
  const liqTop = 16 + (1 - liquid) * 10;
  return `
    <path d="M16 14 L14 46 Q14 50 18 50 L46 50 Q50 50 50 46 L48 14 Z" fill="#D4A574" stroke="${rim}" stroke-width="1.5"/>
    ${liquid > 0 ? `<path d="M16.5 ${liqTop} L${14.5 + (1 - liquid) * 0.5} 44 Q${14.5 + (1 - liquid) * 0.5} 48 18 48 L46 48 Q${49.5 - (1 - liquid) * 0.5} 48 ${49.5 - (1 - liquid) * 0.5} 44 L47.5 ${liqTop} Z" fill="${liquidColor}" opacity="0.5"/>` : ''}
    <path d="M50 22 Q56 22 56 32 Q56 42 50 42" fill="none" stroke="${rim}" stroke-width="2.5" stroke-linecap="round"/>
  `;
};

export const julepCup = (liquid = 0.65, liquidColor = '#FF8F00', rim = '#C0C0C0') => {
  const liqTop = 18 + (1 - liquid) * 10;
  return `
    <path d="M18 16 L16 46 Q16 50 20 50 L44 50 Q48 50 48 46 L46 16 Z" fill="#E8E8E8" stroke="${rim}" stroke-width="1.5"/>
    ${liquid > 0 ? `<path d="M18.5 ${liqTop} L${16.5 + (1 - liquid) * 0.5} 44 Q${16.5 + (1 - liquid) * 0.5} 48 20 48 L44 48 Q${47.5 - (1 - liquid) * 0.5} 48 ${47.5 - (1 - liquid) * 0.5} 44 L45.5 ${liqTop} Z" fill="${liquidColor}" opacity="0.5"/>` : ''}
    <rect x="16" y="14" width="32" height="3" rx="1.5" fill="${rim}" opacity="0.6"/>
  `;
};

export const coffeeMug = (liquid = 0.7, liquidColor = '#3E2723', rim = '#8D6E63') => {
  const liqY = 50 - liquid * 30;
  const liqH = liquid * 30;
  return `
    <rect x="16" y="16" width="30" height="34" rx="3" fill="white" stroke="${rim}" stroke-width="1.5"/>
    ${liquid > 0 ? `<rect x="18" y="${liqY}" width="26" height="${liqH}" rx="2" fill="${liquidColor}" opacity="0.65"/>` : ''}
    <path d="M46 24 Q54 24 54 34 Q54 44 46 44" fill="none" stroke="${rim}" stroke-width="2.5" stroke-linecap="round"/>
  `;
};
