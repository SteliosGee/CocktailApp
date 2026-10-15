import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {
  cocktailGlass, rocksGlass, highballGlass, champagneFlute,
  wineGlass, coupeGlass, hurricaneGlass, copperMug, julepCup, coffeeMug,
} from './cocktailSvg/glasses';
import {
  limeWheel, limeWedge, lemonTwist, lemonPeel, orangePeel, orangeSlice,
  cherry, olive, mintSprig, pineappleWedge, lemonSlice,
  berry, celeryStick, coffeeBeans, nutmeg, creamFloat, bittersDrops,
} from './cocktailSvg/garnishes';
import cocktailMap from './cocktailSvg/cocktailMap';

const GLASSES = {
  cocktail: cocktailGlass,
  rocks: rocksGlass,
  highball: highballGlass,
  flute: champagneFlute,
  wine: wineGlass,
  coupe: coupeGlass,
  hurricane: hurricaneGlass,
  copper: copperMug,
  julep: julepCup,
  coffee: coffeeMug,
};

const GARNISHES = {
  limeWheel, limeWedge, lemonTwist, lemonPeel, orangePeel, orangeSlice,
  cherry, olive, mintSprig, pineappleWedge, lemonSlice,
  berry, celery: celeryStick, coffeeBeans, nutmeg,
  cream: creamFloat, bitters: bittersDrops,
};

const fallback = {
  glass: 'cocktail',
  liquid: '#80DEEA',
  fill: 0.65,
  garnish: null,
};

const CocktailIcon = ({ name, size = 48 }) => {
  const config = cocktailMap[name] || fallback;
  const glassFn = GLASSES[config.glass] || cocktailGlass;
  const garnishFn = config.garnish ? GARNISHES[config.garnish] : null;

  const garnishX = config.glass === 'highball' ? 42 : 44;
  const garnishY = config.glass === 'flute' ? 6 : 14;

  const glassXml = glassFn(config.fill || 0.65, config.liquid);
  const garnishXml = garnishFn ? garnishFn(garnishX, garnishY) : '';

  let rimXml = '';
  if (config.saltRim) {
    const rimY = config.glass === 'rocks' ? 20 : 12;
    rimXml = Array.from({ length: 12 }, (_, i) =>
      `<circle cx="${16 + i * 3}" cy="${rimY}" r="0.6" fill="white" opacity="0.8"/>`
    ).join('');
  }
  if (config.sugarRim) {
    const rimY = config.glass === 'rocks' ? 20 : 12;
    rimXml = Array.from({ length: 12 }, (_, i) =>
      `<circle cx="${16 + i * 3}" cy="${rimY}" r="0.5" fill="#FFF9C4" opacity="0.7"/>`
    ).join('');
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    ${glassXml}
    ${garnishXml}
    ${rimXml}
  </svg>`;

  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <SvgXml xml={svg} width={size} height={size} />
    </View>
  );
};

export default CocktailIcon;
