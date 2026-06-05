import COCKTAIL_TRANSLATIONS from '../i18n/cocktailTranslations';

export function translateCocktail(cocktail, lang) {
  if (!cocktail || lang !== 'el') return cocktail;
  const t = COCKTAIL_TRANSLATIONS[cocktail.name];
  if (!t) return cocktail;
  return {
    ...cocktail,
    name: t.name || cocktail.name,
    description: t.description || cocktail.description,
    base_spirit: t.base_spirit || cocktail.base_spirit,
    steps: t.steps || cocktail.steps,
  };
}
