import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const cocktails = {
  Mojito: {
    color: '#2E7D32',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect x="20" y="16" width="24" height="40" rx="3" fill="#C8E6C9" stroke="#2E7D32" stroke-width="1.5"/>
      <rect x="22" y="30" width="20" height="24" rx="2" fill="#4CAF50" opacity="0.7"/>
      <circle cx="28" cy="24" r="2.5" fill="#1B5E20"/>
      <circle cx="36" cy="22" r="2" fill="#2E7D32"/>
      <circle cx="32" cy="20" r="1.8" fill="#388E3C"/>
      <circle cx="30" cy="38" r="1.5" fill="#E8F5E9" opacity="0.5"/>
      <circle cx="35" cy="42" r="1" fill="#E8F5E9" opacity="0.4"/>
      <circle cx="28" cy="45" r="1.2" fill="#E8F5E9" opacity="0.3"/>
      <line x1="34" y1="8" x2="34" y2="18" stroke="#F9A825" stroke-width="2" stroke-linecap="round"/>
      <rect x="37" y="26" width="6" height="4" rx="1" fill="#8BC34A" opacity="0.8"/>
    </svg>`,
  },
  Daiquiri: {
    color: '#FF9800',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <path d="M16 20 L32 38 L48 20 Z" fill="#FFF9C4" stroke="#FF9800" stroke-width="1.5"/>
      <line x1="32" y1="38" x2="32" y2="50" stroke="#FF9800" stroke-width="2.5"/>
      <ellipse cx="32" cy="51" rx="10" ry="3" fill="#FF9800" opacity="0.3"/>
      <circle cx="22" cy="26" r="4" fill="#FFF176" stroke="#F9A825" stroke-width="0.8"/>
      <circle cx="22" cy="26" r="1.5" fill="#FFECB3"/>
      <path d="M20 24 Q22 22 24 24" fill="none" stroke="#F9A825" stroke-width="0.6"/>
      <path d="M20 28 Q22 26 24 28" fill="none" stroke="#F9A825" stroke-width="0.6"/>
    </svg>`,
  },
  'Aperol Spritz': {
    color: '#FF5722',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <path d="M20 16 Q20 40 32 44 Q44 40 44 16 Z" fill="#FFE0B2" stroke="#FF5722" stroke-width="1.5"/>
      <path d="M22 22 Q22 38 32 42 Q42 38 42 22 Z" fill="#FF8A65" opacity="0.6"/>
      <circle cx="28" cy="30" r="1.5" fill="white" opacity="0.5"/>
      <circle cx="36" cy="26" r="1" fill="white" opacity="0.4"/>
      <circle cx="32" cy="34" r="1.2" fill="white" opacity="0.35"/>
      <circle cx="26" cy="36" r="0.8" fill="white" opacity="0.3"/>
      <line x1="32" y1="44" x2="32" y2="52" stroke="#FF5722" stroke-width="2.5"/>
      <ellipse cx="32" cy="53" rx="8" ry="2.5" fill="#FF5722" opacity="0.3"/>
      <circle cx="44" cy="22" r="4" fill="#FF9800" opacity="0.5"/>
      <path d="M43 20 L45 24" stroke="#E65100" stroke-width="0.6"/>
    </svg>`,
  },
  Negroni: {
    color: '#E91E63',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect x="18" y="24" width="28" height="26" rx="3" fill="#FFCDD2" stroke="#E91E63" stroke-width="1.5"/>
      <rect x="20" y="32" width="24" height="16" rx="2" fill="#E57373" opacity="0.6"/>
      <rect x="18" y="50" width="28" height="3" rx="1.5" fill="#E91E63" opacity="0.4"/>
      <circle cx="32" cy="20" r="3" fill="#FFF59D" opacity="0.5"/>
      <path d="M30 18 Q32 16 34 18" fill="none" stroke="#F9A825" stroke-width="0.8"/>
      <circle cx="28" cy="40" r="1" fill="#FFCDD2" opacity="0.4"/>
      <circle cx="35" cy="38" r="0.8" fill="#FFCDD2" opacity="0.3"/>
    </svg>`,
  },
  'Pina Colada': {
    color: '#FFC107',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <path d="M22 12 Q18 40 24 46 Q32 50 40 46 Q46 40 42 12 Z" fill="#FFF8E1" stroke="#FFC107" stroke-width="1.5"/>
      <path d="M24 18 Q21 38 26 44 Q32 48 38 44 Q43 38 40 18 Z" fill="#FFE082" opacity="0.5"/>
      <ellipse cx="32" cy="14" rx="10" ry="3" fill="#FFF9C4" stroke="#FFC107" stroke-width="1"/>
      <circle cx="44" cy="10" r="3" fill="#FFA726"/>
      <path d="M44 7 L44 13 M41 10 L47 10" stroke="#E65100" stroke-width="0.8"/>
      <line x1="38" y1="6" x2="42" y2="12" stroke="#F9A825" stroke-width="1.5"/>
      <circle cx="28" cy="30" r="0.8" fill="#FFF9C4" opacity="0.5"/>
      <circle cx="36" cy="26" r="0.6" fill="#FFF9C4" opacity="0.4"/>
      <polygon points="42,14 46,8 44,14" fill="#FF7043" opacity="0.6"/>
    </svg>`,
  },
  'Moscow Mule': {
    color: '#795548',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <path d="M18 16 L16 46 Q16 50 20 50 L44 50 Q48 50 48 46 L46 16 Z" fill="#D7CCC8" stroke="#795548" stroke-width="1.5"/>
      <path d="M19 22 L17.5 44 Q17.5 48 21 48 L43 48 Q46.5 48 46.5 44 L45 22 Z" fill="#A1887F" opacity="0.4"/>
      <path d="M46 24 Q52 24 52 32 Q52 40 46 40" fill="none" stroke="#795548" stroke-width="2" stroke-linecap="round"/>
      <circle cx="28" cy="28" r="2.5" fill="#8D6E63" opacity="0.5"/>
      <circle cx="36" cy="32" r="2" fill="#8D6E63" opacity="0.4"/>
      <circle cx="32" cy="38" r="1.5" fill="#8D6E63" opacity="0.3"/>
      <rect x="24" y="12" width="4" height="6" rx="1" fill="#8BC34A" opacity="0.7"/>
    </svg>`,
  },
  Cosmopolitan: {
    color: '#E91E63',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <path d="M16 18 L28 38 L36 38 L48 18 Z" fill="#F8BBD0" stroke="#E91E63" stroke-width="1.5"/>
      <line x1="32" y1="38" x2="32" y2="50" stroke="#E91E63" stroke-width="2.5"/>
      <ellipse cx="32" cy="51" rx="8" ry="2.5" fill="#E91E63" opacity="0.3"/>
      <circle cx="26" cy="28" r="2" fill="#AD1457" opacity="0.5"/>
      <circle cx="32" cy="24" r="1.5" fill="#AD1457" opacity="0.4"/>
      <circle cx="38" cy="28" r="1.8" fill="#AD1457" opacity="0.45"/>
    </svg>`,
  },
  'Espresso Martini': {
    color: '#3E2723',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <path d="M16 18 L28 38 L36 38 L48 18 Z" fill="#5D4037" stroke="#3E2723" stroke-width="1.5"/>
      <line x1="32" y1="38" x2="32" y2="50" stroke="#3E2723" stroke-width="2.5"/>
      <ellipse cx="32" cy="51" rx="8" ry="2.5" fill="#3E2723" opacity="0.3"/>
      <path d="M18 22 L46 22" stroke="#4E342E" stroke-width="1" opacity="0.5"/>
      <circle cx="26" cy="20" r="1.5" fill="#D7CCC8" opacity="0.5"/>
      <circle cx="32" cy="19" r="1.5" fill="#D7CCC8" opacity="0.5"/>
      <circle cx="38" cy="20" r="1.5" fill="#D7CCC8" opacity="0.5"/>
      <circle cx="29" cy="16" r="1" fill="#8D6E63" opacity="0.4"/>
      <circle cx="35" cy="16" r="1" fill="#8D6E63" opacity="0.4"/>
    </svg>`,
  },
  Margarita: {
    color: '#8BC34A',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <path d="M12 16 L32 38 L52 16 Z" fill="#F0F4C3" stroke="#8BC34A" stroke-width="1.5"/>
      <line x1="32" y1="38" x2="32" y2="50" stroke="#8BC34A" stroke-width="2.5"/>
      <ellipse cx="32" cy="51" rx="8" ry="2.5" fill="#8BC34A" opacity="0.3"/>
      <path d="M14 16 L50 16" stroke="white" stroke-width="3" opacity="0.6"/>
      <circle cx="50" cy="20" r="4" fill="#C5E1A5" stroke="#8BC34A" stroke-width="0.8"/>
      <circle cx="50" cy="20" r="1.5" fill="#F0F4C3"/>
      <path d="M48 19 Q50 17 52 19" fill="none" stroke="#689F38" stroke-width="0.5"/>
    </svg>`,
  },
  'Whiskey Sour': {
    color: '#FF8F00',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect x="18" y="24" width="28" height="26" rx="3" fill="#FFE0B2" stroke="#FF8F00" stroke-width="1.5"/>
      <rect x="20" y="32" width="24" height="16" rx="2" fill="#FFB74D" opacity="0.6"/>
      <rect x="18" y="50" width="28" height="3" rx="1.5" fill="#FF8F00" opacity="0.4"/>
      <circle cx="26" cy="28" r="3.5" fill="#FFF176" stroke="#F9A825" stroke-width="0.6"/>
      <circle cx="26" cy="28" r="1.2" fill="#FFECB3"/>
      <path d="M24 26 Q26 24 28 26" fill="none" stroke="#F9A825" stroke-width="0.5"/>
      <circle cx="34" cy="40" r="2" fill="#E53935" opacity="0.6"/>
    </svg>`,
  },
  'Old Fashioned': {
    color: '#BF360C',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect x="18" y="24" width="28" height="26" rx="3" fill="#FFCCBC" stroke="#BF360C" stroke-width="1.5"/>
      <rect x="20" y="30" width="24" height="18" rx="2" fill="#FF8A65" opacity="0.5"/>
      <rect x="18" y="50" width="28" height="3" rx="1.5" fill="#BF360C" opacity="0.4"/>
      <rect x="26" y="26" width="8" height="8" rx="1.5" fill="#FFECB3" opacity="0.6" stroke="#F9A825" stroke-width="0.5"/>
      <circle cx="38" cy="28" r="3" fill="#FF5722" opacity="0.4"/>
      <path d="M37 26 Q39 24 40 27" fill="none" stroke="#E65100" stroke-width="0.6"/>
      <circle cx="28" cy="40" r="0.8" fill="#FFCCBC" opacity="0.4"/>
      <circle cx="36" cy="42" r="0.6" fill="#FFCCBC" opacity="0.3"/>
    </svg>`,
  },
  Martini: {
    color: '#607D8B',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <path d="M14 16 L32 38 L50 16 Z" fill="#ECEFF1" stroke="#607D8B" stroke-width="1.5"/>
      <line x1="32" y1="38" x2="32" y2="50" stroke="#607D8B" stroke-width="2.5"/>
      <ellipse cx="32" cy="51" rx="8" ry="2.5" fill="#607D8B" opacity="0.3"/>
      <line x1="26" y1="20" x2="26" y2="34" stroke="#90A4AE" stroke-width="1" opacity="0.4"/>
      <circle cx="26" cy="18" r="2.5" fill="#8BC34A"/>
      <circle cx="26" cy="18" r="1" fill="#689F38"/>
      <circle cx="22" cy="32" r="1" fill="#B0BEC5" opacity="0.5"/>
      <circle cx="30" cy="30" r="0.8" fill="#B0BEC5" opacity="0.4"/>
    </svg>`,
  },
};

const fallbackCocktail = {
  color: '#5BBCBF',
  svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path d="M16 16 L32 38 L48 16 Z" fill="#E0F7FA" stroke="#5BBCBF" stroke-width="1.5"/>
    <line x1="32" y1="38" x2="32" y2="50" stroke="#5BBCBF" stroke-width="2.5"/>
    <ellipse cx="32" cy="51" rx="8" ry="2.5" fill="#5BBCBF" opacity="0.3"/>
    <circle cx="32" cy="26" r="2" fill="#80DEEA" opacity="0.5"/>
  </svg>`,
};

const CocktailIcon = ({ name, size = 48 }) => {
  const cocktail = cocktails[name] || fallbackCocktail;

  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <SvgXml xml={cocktail.svg} width={size} height={size} />
    </View>
  );
};

export default CocktailIcon;
