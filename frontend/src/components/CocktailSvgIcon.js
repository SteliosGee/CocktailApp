import React from 'react';
import { View, Image } from 'react-native';
import cocktailMap from './cocktailSvg/cocktailMap';

const GLASS_ICONS = {
  cocktail: require('../../assets/icons/cocktail.png'),
  coupe: require('../../assets/icons/coupe.png'),
  rocks: require('../../assets/icons/rocks.png'),
  highball: require('../../assets/icons/highball.png'),
  flute: require('../../assets/icons/champagne.png'),
  wine: require('../../assets/icons/wine.png'),
  hurricane: require('../../assets/icons/cocktail.png'),
  copper: require('../../assets/icons/cocktail.png'),
  julep: require('../../assets/icons/rocks.png'),
  coffee: require('../../assets/icons/cocktail.png'),
};

const FALLBACK = require('../../assets/icons/cocktail.png');

const CocktailIcon = ({ name, size = 48 }) => {
  const config = cocktailMap[name] || { glass: 'cocktail' };
  const source = GLASS_ICONS[config.glass] || FALLBACK;

  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Image source={source} style={{ width: size, height: size }} />
    </View>
  );
};

export default CocktailIcon;
