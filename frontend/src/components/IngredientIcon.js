import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const ingredientSvgs = {
  // Citrus
  'lime': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="32" rx="20" ry="18" fill="#8BC34A" stroke="#558B2F" stroke-width="1.5"/>
    <ellipse cx="32" cy="32" rx="14" ry="12" fill="#AED581" opacity="0.6"/>
    <path d="M32 20 Q32 32 32 44" stroke="#7CB342" stroke-width="0.8" opacity="0.5"/>
    <path d="M20 28 Q32 32 44 28" stroke="#7CB342" stroke-width="0.8" opacity="0.5"/>
    <path d="M22 36 Q32 32 42 36" stroke="#7CB342" stroke-width="0.8" opacity="0.5"/>
  </svg>`,
  'lemon': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="32" rx="20" ry="18" fill="#FFF176" stroke="#F9A825" stroke-width="1.5"/>
    <ellipse cx="32" cy="32" rx="14" ry="12" fill="#FFF9C4" opacity="0.6"/>
    <path d="M32 20 Q32 32 32 44" stroke="#FDD835" stroke-width="0.8" opacity="0.5"/>
    <path d="M20 28 Q32 32 44 28" stroke="#FDD835" stroke-width="0.8" opacity="0.5"/>
    <path d="M22 36 Q32 32 42 36" stroke="#FDD835" stroke-width="0.8" opacity="0.5"/>
  </svg>`,
  'lime juice': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M22 14 L22 40 Q22 46 32 46 Q42 46 42 40 L42 14 Z" fill="#C5E1A5" stroke="#7CB342" stroke-width="1.5"/>
    <path d="M24 22 L24 38 Q24 42 32 42 Q40 42 40 38 L40 22 Z" fill="#AED581" opacity="0.5"/>
    <ellipse cx="32" cy="14" rx="10" ry="3" fill="#DCEDC8" stroke="#7CB342" stroke-width="1"/>
  </svg>`,
  'lemon juice': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M22 14 L22 40 Q22 46 32 46 Q42 46 42 40 L42 14 Z" fill="#FFF9C4" stroke="#F9A825" stroke-width="1.5"/>
    <path d="M24 22 L24 38 Q24 42 32 42 Q40 42 40 38 L40 22 Z" fill="#FFF176" opacity="0.5"/>
    <ellipse cx="32" cy="14" rx="10" ry="3" fill="#FFFDE7" stroke="#F9A825" stroke-width="1"/>
  </svg>`,
  'orange juice': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M22 14 L22 40 Q22 46 32 46 Q42 46 42 40 L42 14 Z" fill="#FFE0B2" stroke="#FF9800" stroke-width="1.5"/>
    <path d="M24 22 L24 38 Q24 42 32 42 Q40 42 40 38 L40 22 Z" fill="#FFCC80" opacity="0.5"/>
    <ellipse cx="32" cy="14" rx="10" ry="3" fill="#FFF3E0" stroke="#FF9800" stroke-width="1"/>
  </svg>`,
  'cranberry juice': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M22 14 L22 40 Q22 46 32 46 Q42 46 42 40 L42 14 Z" fill="#EF9A9A" stroke="#C62828" stroke-width="1.5"/>
    <path d="M24 22 L24 38 Q24 42 32 42 Q40 42 40 38 L40 22 Z" fill="#E57373" opacity="0.5"/>
    <ellipse cx="32" cy="14" rx="10" ry="3" fill="#FFCDD2" stroke="#C62828" stroke-width="1"/>
  </svg>`,
  'pineapple juice': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M22 14 L22 40 Q22 46 32 46 Q42 46 42 40 L42 14 Z" fill="#FFF9C4" stroke="#F9A825" stroke-width="1.5"/>
    <path d="M24 22 L24 38 Q24 42 32 42 Q40 42 40 38 L40 22 Z" fill="#FFF176" opacity="0.4"/>
    <ellipse cx="32" cy="14" rx="10" ry="3" fill="#FFFDE7" stroke="#F9A825" stroke-width="1"/>
  </svg>`,
  'campari': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M22 14 L22 40 Q22 46 32 46 Q42 46 42 40 L42 14 Z" fill="#EF5350" stroke="#B71C1C" stroke-width="1.5"/>
    <path d="M24 22 L24 38 Q24 42 32 42 Q40 42 40 38 L40 22 Z" fill="#E53935" opacity="0.5"/>
    <ellipse cx="32" cy="14" rx="10" ry="3" fill="#FFCDD2" stroke="#B71C1C" stroke-width="1"/>
  </svg>`,

  // Spirits
  'rum': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#8D6E63" stroke="#5D4037" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#A1887F" stroke="#5D4037" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="#D7CCC8" opacity="0.6"/>
    <path d="M26 32 L38 32" stroke="#8D6E63" stroke-width="0.5"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#6D4C41" opacity="0.4"/>
  </svg>`,
  'white rum': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#E0E0E0" stroke="#9E9E9E" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#F5F5F5" stroke="#9E9E9E" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="white" opacity="0.6"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#BDBDBD" opacity="0.4"/>
  </svg>`,
  'gin': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#CE93D8" stroke="#7B1FA2" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#E1BEE7" stroke="#7B1FA2" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="#F3E5F5" opacity="0.6"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#AB47BC" opacity="0.4"/>
  </svg>`,
  'vodka': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#B39DDB" stroke="#4527A0" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#D1C4E9" stroke="#4527A0" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="#EDE7F6" opacity="0.6"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#7E57C2" opacity="0.4"/>
  </svg>`,
  'tequila': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#FFCC80" stroke="#E65100" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#FFE0B2" stroke="#E65100" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="#FFF3E0" opacity="0.6"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#FF9800" opacity="0.4"/>
  </svg>`,
  'whiskey': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#A1887F" stroke="#4E342E" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#BCAAA4" stroke="#4E342E" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="#D7CCC8" opacity="0.6"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#6D4C41" opacity="0.4"/>
  </svg>`,
  'bourbon': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#8D6E63" stroke="#3E2723" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#A1887F" stroke="#3E2723" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="#BCAAA4" opacity="0.6"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#5D4037" opacity="0.4"/>
  </svg>`,

  // Mixers
  'soda': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="22" y="10" width="20" height="42" rx="4" fill="#E3F2FD" stroke="#42A5F5" stroke-width="1.5"/>
    <rect x="24" y="24" width="16" height="12" rx="2" fill="white" opacity="0.6"/>
    <circle cx="30" cy="30" r="1" fill="#90CAF9" opacity="0.4"/>
    <circle cx="34" cy="28" r="0.8" fill="#90CAF9" opacity="0.3"/>
    <circle cx="32" cy="34" r="0.6" fill="#90CAF9" opacity="0.3"/>
    <rect x="22" y="10" width="20" height="6" rx="3" fill="#42A5F5" opacity="0.3"/>
  </svg>`,
  'soda water': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="22" y="10" width="20" height="42" rx="4" fill="#E3F2FD" stroke="#42A5F5" stroke-width="1.5"/>
    <rect x="24" y="24" width="16" height="12" rx="2" fill="white" opacity="0.6"/>
    <circle cx="30" cy="30" r="1" fill="#90CAF9" opacity="0.4"/>
    <circle cx="34" cy="28" r="0.8" fill="#90CAF9" opacity="0.3"/>
    <rect x="22" y="10" width="20" height="6" rx="3" fill="#42A5F5" opacity="0.3"/>
  </svg>`,
  'tonic water': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="22" y="10" width="20" height="42" rx="4" fill="#E1F5FE" stroke="#29B6F6" stroke-width="1.5"/>
    <rect x="24" y="24" width="16" height="12" rx="2" fill="white" opacity="0.5"/>
    <path d="M28 30 Q30 28 32 30 Q34 32 36 30" fill="none" stroke="#4FC3F7" stroke-width="0.8" opacity="0.5"/>
    <rect x="22" y="10" width="20" height="6" rx="3" fill="#29B6F6" opacity="0.3"/>
  </svg>`,
  'simple syrup': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M24 14 L24 40 Q24 46 32 46 Q40 46 40 40 L40 14 Z" fill="#FFF9C4" stroke="#F9A825" stroke-width="1.5"/>
    <path d="M26 22 L26 38 Q26 42 32 42 Q38 42 38 38 L38 22 Z" fill="#FFF176" opacity="0.4"/>
    <ellipse cx="32" cy="14" rx="8" ry="3" fill="#FFFDE7" stroke="#F9A825" stroke-width="1"/>
  </svg>`,
  'agave syrup': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M24 14 L24 40 Q24 46 32 46 Q40 46 40 40 L40 14 Z" fill="#C5E1A5" stroke="#689F38" stroke-width="1.5"/>
    <path d="M26 22 L26 38 Q26 42 32 42 Q38 42 38 38 L38 22 Z" fill="#AED581" opacity="0.4"/>
    <ellipse cx="32" cy="14" rx="8" ry="3" fill="#DCEDC8" stroke="#689F38" stroke-width="1"/>
  </svg>`,
  'grenadine': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M24 14 L24 40 Q24 46 32 46 Q40 46 40 40 L40 14 Z" fill="#EF9A9A" stroke="#C62828" stroke-width="1.5"/>
    <path d="M26 22 L26 38 Q26 42 32 42 Q38 42 38 38 L38 22 Z" fill="#E57373" opacity="0.4"/>
    <ellipse cx="32" cy="14" rx="8" ry="3" fill="#FFCDD2" stroke="#C62828" stroke-width="1"/>
  </svg>`,
  'bitters': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="26" y="16" width="12" height="30" rx="2" fill="#A1887F" stroke="#4E342E" stroke-width="1.5"/>
    <rect x="28" y="12" width="8" height="8" rx="2" fill="#BCAAA4" stroke="#4E342E" stroke-width="1"/>
    <rect x="28" y="30" width="8" height="6" rx="1" fill="#D7CCC8" opacity="0.5"/>
    <rect x="28" y="42" width="8" height="4" rx="1" fill="#6D4C41" opacity="0.3"/>
  </svg>`,
  'triple sec': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#FFE082" stroke="#FF8F00" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#FFF9C4" stroke="#FF8F00" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="#FFFDE7" opacity="0.6"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#FFB300" opacity="0.4"/>
  </svg>`,
  'sweet vermouth': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#EF9A9A" stroke="#B71C1C" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#FFCDD2" stroke="#B71C1C" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="#FFEBEE" opacity="0.6"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#E53935" opacity="0.4"/>
  </svg>`,
  'dry vermouth': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#DCEDC8" stroke="#558B2F" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#F1F8E9" stroke="#558B2F" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="#F9FBF5" opacity="0.6"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#8BC34A" opacity="0.4"/>
  </svg>`,
  'coffee liqueur': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#4E342E" stroke="#1B0000" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#6D4C41" stroke="#1B0000" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="#795548" opacity="0.6"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#3E2723" opacity="0.4"/>
  </svg>`,
  'kahlua': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="12" width="16" height="36" rx="3" fill="#3E2723" stroke="#000000" stroke-width="1.5"/>
    <rect x="28" y="8" width="8" height="8" rx="2" fill="#5D4037" stroke="#000000" stroke-width="1"/>
    <rect x="26" y="28" width="12" height="8" rx="1" fill="#6D4C41" opacity="0.5"/>
    <rect x="27" y="44" width="10" height="4" rx="1" fill="#1B0000" opacity="0.4"/>
  </svg>`,
  'espresso': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M20 20 L20 40 Q20 46 32 46 Q44 46 44 40 L44 20 Z" fill="#5D4037" stroke="#3E2723" stroke-width="1.5"/>
    <path d="M22 24 L22 38 Q22 42 32 42 Q42 42 42 38 L42 24 Z" fill="#795548" opacity="0.5"/>
    <ellipse cx="32" cy="20" rx="12" ry="3" fill="#8D6E63" opacity="0.4"/>
    <path d="M28 18 Q32 16 36 18" fill="none" stroke="#BCAAA4" stroke-width="0.8" opacity="0.5"/>
  </svg>`,

  // Garnishes
  'olive': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="32" rx="10" ry="8" fill="#558B2F" stroke="#1B5E20" stroke-width="1.5"/>
    <ellipse cx="32" cy="32" rx="4" ry="3" fill="#33691E" opacity="0.6"/>
    <line x1="32" y1="16" x2="32" y2="24" stroke="#795548" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  'lemon twist': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M20 32 Q24 20 32 24 Q40 28 36 36 Q32 44 24 40 Q16 36 20 32" fill="#FFF176" stroke="#F9A825" stroke-width="1.5"/>
    <path d="M24 30 Q28 24 32 28 Q36 32 32 36 Q28 40 24 36 Q20 32 24 30" fill="#FFF9C4" opacity="0.5"/>
  </svg>`,
  'lime wedge': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M16 40 L32 16 L48 40 Z" fill="#8BC34A" stroke="#558B2F" stroke-width="1.5"/>
    <path d="M24 36 L32 20 L40 36 Z" fill="#AED581" opacity="0.5"/>
    <path d="M32 20 L32 36" stroke="#7CB342" stroke-width="0.8" opacity="0.5"/>
  </svg>`,
  'mint sprig': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <line x1="32" y1="48" x2="32" y2="16" stroke="#388E3C" stroke-width="2"/>
    <ellipse cx="26" cy="24" rx="6" ry="4" fill="#66BB6A" stroke="#388E3C" stroke-width="1" transform="rotate(-30 26 24)"/>
    <ellipse cx="38" cy="20" rx="6" ry="4" fill="#66BB6A" stroke="#388E3C" stroke-width="1" transform="rotate(30 38 20)"/>
    <ellipse cx="28" cy="14" rx="5" ry="3.5" fill="#81C784" stroke="#388E3C" stroke-width="1" transform="rotate(-20 28 14)"/>
    <ellipse cx="36" cy="12" rx="5" ry="3.5" fill="#81C784" stroke="#388E3C" stroke-width="1" transform="rotate(20 36 12)"/>
  </svg>`,
  'mint leaves': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="24" cy="28" rx="8" ry="6" fill="#66BB6A" stroke="#388E3C" stroke-width="1" transform="rotate(-20 24 28)"/>
    <ellipse cx="40" cy="24" rx="8" ry="6" fill="#81C784" stroke="#388E3C" stroke-width="1" transform="rotate(20 40 24)"/>
    <ellipse cx="32" cy="36" rx="7" ry="5" fill="#4CAF50" stroke="#2E7D32" stroke-width="1"/>
    <path d="M24 28 L24 28" stroke="#2E7D32" stroke-width="0.8"/>
    <path d="M40 24 L40 24" stroke="#2E7D32" stroke-width="0.8"/>
  </svg>`,
  'mint': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="24" cy="28" rx="8" ry="6" fill="#66BB6A" stroke="#388E3C" stroke-width="1" transform="rotate(-20 24 28)"/>
    <ellipse cx="40" cy="24" rx="8" ry="6" fill="#81C784" stroke="#388E3C" stroke-width="1" transform="rotate(20 40 24)"/>
    <ellipse cx="32" cy="36" rx="7" ry="5" fill="#4CAF50" stroke="#2E7D32" stroke-width="1"/>
  </svg>`,
  'coconut cream': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M22 16 L22 40 Q22 46 32 46 Q42 46 42 40 L42 16 Z" fill="#FFFDE7" stroke="#F9A825" stroke-width="1.5"/>
    <path d="M24 24 L24 38 Q24 42 32 42 Q40 42 40 38 L40 24 Z" fill="white" opacity="0.5"/>
    <ellipse cx="32" cy="16" rx="10" ry="3" fill="#FFF9C4" stroke="#F9A825" stroke-width="1"/>
  </svg>`,
  'cream': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M22 16 L22 40 Q22 46 32 46 Q42 46 42 40 L42 16 Z" fill="#FFFDE7" stroke="#E0E0E0" stroke-width="1.5"/>
    <path d="M24 24 L24 38 Q24 42 32 42 Q40 42 40 38 L40 24 Z" fill="white" opacity="0.5"/>
    <ellipse cx="32" cy="16" rx="10" ry="3" fill="#FAFAFA" stroke="#E0E0E0" stroke-width="1"/>
  </svg>`,
  'heavy cream': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M22 16 L22 40 Q22 46 32 46 Q42 46 42 40 L42 16 Z" fill="#FFF8E1" stroke="#E0E0E0" stroke-width="1.5"/>
    <path d="M24 24 L24 38 Q24 42 32 42 Q40 42 40 38 L40 24 Z" fill="#FFFDE7" opacity="0.5"/>
    <ellipse cx="32" cy="16" rx="10" ry="3" fill="#FFFDE7" stroke="#E0E0E0" stroke-width="1"/>
  </svg>`,
  'water': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M32 12 Q20 28 20 38 Q20 48 32 48 Q44 48 44 38 Q44 28 32 12" fill="#E3F2FD" stroke="#42A5F5" stroke-width="1.5"/>
    <path d="M32 18 Q24 30 24 38 Q24 44 32 44" fill="#BBDEFB" opacity="0.5"/>
  </svg>`,
  'ice': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="20" y="20" width="24" height="24" rx="4" fill="#E1F5FE" stroke="#90CAF9" stroke-width="1.5" transform="rotate(10 32 32)"/>
    <rect x="24" y="24" width="16" height="16" rx="2" fill="#BBDEFB" opacity="0.4" transform="rotate(10 32 32)"/>
    <path d="M26 28 L32 24 L38 28" fill="none" stroke="white" stroke-width="0.8" opacity="0.5"/>
  </svg>`,
  'sugar': `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect x="20" y="22" width="24" height="22" rx="3" fill="#FFFDE7" stroke="#F9A825" stroke-width="1.5"/>
    <rect x="22" y="24" width="20" height="18" rx="2" fill="white" opacity="0.6"/>
    <circle cx="28" cy="32" r="1.5" fill="#FFF9C4" opacity="0.6"/>
    <circle cx="36" cy="30" r="1" fill="#FFF9C4" opacity="0.5"/>
    <circle cx="32" cy="36" r="1.2" fill="#FFF9C4" opacity="0.5"/>
  </svg>`,
};

const fallbackIngredient = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="16" fill="#E0E0E0" stroke="#9E9E9E" stroke-width="1.5"/>
  <circle cx="32" cy="32" r="8" fill="#BDBDBD" opacity="0.5"/>
</svg>`;

const IngredientIcon = ({ name, size = 52 }) => {
  const lower = name?.toLowerCase() || '';
  let matchedKey = null;

  for (const key of Object.keys(ingredientSvgs)) {
    if (lower.includes(key)) {
      matchedKey = key;
      break;
    }
  }

  const ingredient = matchedKey ? ingredientSvgs[matchedKey] : fallbackIngredient;

  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <SvgXml xml={ingredient} width={size} height={size} />
    </View>
  );
};

export default IngredientIcon;
