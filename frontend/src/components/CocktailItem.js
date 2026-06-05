import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, makeStyles } from '../context/ThemeContext';
import { s } from '../utils/responsive';
import CocktailSvgIcon from './CocktailSvgIcon';

const useStyles = makeStyles((c) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: c.surfaceCard,
    borderRadius: s(16),
    marginHorizontal: s(16),
    marginVertical: 5,
    paddingHorizontal: s(14),
    paddingVertical: s(14),
    shadowColor: c.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  iconWrap: {
    marginRight: s(14),
  },
  textSection: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: s(3),
  },
  name: {
    fontSize: s(16),
    fontWeight: '600',
    color: c.text,
    flex: 1,
    letterSpacing: -0.2,
  },
  starIcon: {
    marginLeft: s(6),
  },
  description: {
    fontSize: s(13),
    color: c.textLight,
    lineHeight: 18,
    marginBottom: s(4),
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: c.primaryAlpha,
    borderRadius: s(6),
    paddingHorizontal: s(8),
    paddingVertical: s(2),
    marginTop: s(2),
  },
  tagText: {
    fontSize: s(11),
    fontWeight: '600',
    color: c.primaryDark,
  },
}));

const CocktailItem = ({ cocktail, onPress, isFavorite }) => {
  const styles = useStyles();
  const { colors: c } = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconWrap}>
        <CocktailSvgIcon name={cocktail.name} size={44} />
      </View>
      <View style={styles.textSection}>
        <View style={styles.nameRow}>
          <Text style={styles.name} numberOfLines={1}>{cocktail.name}</Text>
          {isFavorite && (
            <Ionicons name="star" size={14} color={c.star} style={styles.starIcon} />
          )}
        </View>
        {cocktail.description ? (
          <Text style={styles.description} numberOfLines={1}>
            {cocktail.description}
          </Text>
        ) : null}
        {cocktail.base_spirit ? (
          <View style={styles.tag}>
            <Text style={styles.tagText}>{cocktail.base_spirit}</Text>
          </View>
        ) : null}
      </View>
      <Ionicons name="chevron-forward" size={18} color={c.textMuted} />
    </TouchableOpacity>
  );
};

export default CocktailItem;
