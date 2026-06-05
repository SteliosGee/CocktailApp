import AsyncStorage from '@react-native-async-storage/async-storage';
import COCKTAILS from '../data/cocktails';

const FAVORITES_KEY = 'cocktail_favorites';

let favoritesCache = [];

async function loadFavorites() {
  try {
    const raw = await AsyncStorage.getItem(FAVORITES_KEY);
    favoritesCache = raw ? JSON.parse(raw) : [];
  } catch {
    favoritesCache = [];
  }
  return favoritesCache;
}

async function saveFavorites(favs) {
  favoritesCache = favs;
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
}

function getNextFavId() {
  if (favoritesCache.length === 0) return 1;
  const max = Math.max(...favoritesCache.map(f => f.id));
  return max + 1;
}

export const dataService = {
  async getAll(params = {}) {
    await loadFavorites();
    let results = [...COCKTAILS];

    if (params.is_alcoholic !== undefined && params.is_alcoholic !== '') {
      const val = params.is_alcoholic === 'true' || params.is_alcoholic === true;
      results = results.filter(c => c.is_alcoholic === val);
    }

    if (params.base_spirit) {
      const spirits = params.base_spirit.split(',').map(s => s.trim().toLowerCase());
      results = results.filter(c =>
        spirits.some(s => c.base_spirit.toLowerCase().includes(s))
      );
    }

    if (params.ingredient) {
      const ingredients = params.ingredient.split(',').map(s => s.trim().toLowerCase());
      results = results.filter(c =>
        c.ingredients.some(ing =>
          ingredients.some(s => ing.name.toLowerCase().includes(s))
        )
      );
    }

    if (params.search) {
      const q = params.search.toLowerCase();
      results = results.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.base_spirit.toLowerCase().includes(q)
      );
    }

    results = results.map(c => {
      const fav = favoritesCache.find(f => f.cocktailId === c.id);
      return {
        ...c,
        is_favorited: !!fav,
        favorite_id: fav ? fav.id : null,
      };
    });

    return { data: results };
  },

  async getById(id) {
    await loadFavorites();
    const cocktail = COCKTAILS.find(c => c.id === Number(id));
    if (!cocktail) throw new Error('Cocktail not found');

    const fav = favoritesCache.find(f => f.cocktailId === cocktail.id);
    return {
      data: {
        ...cocktail,
        is_favorited: !!fav,
        favorite_id: fav ? fav.id : null,
        cocktail_ingredients: cocktail.ingredients.map((ing, idx) => ({
          id: idx,
          ingredient: { name: ing.name },
          quantity: ing.quantity,
          unit: ing.unit,
        })),
      },
    };
  },

  async getFavorites() {
    await loadFavorites();
    const results = favoritesCache.map(fav => {
      const cocktail = COCKTAILS.find(c => c.id === fav.cocktailId);
      return {
        id: fav.id,
        cocktail: cocktail ? {
          id: cocktail.id,
          name: cocktail.name,
          description: cocktail.description,
          base_spirit: cocktail.base_spirit,
          emoji: cocktail.emoji,
        } : null,
      };
    }).filter(f => f.cocktail !== null);

    return { data: results };
  },

  async addFavorite(cocktailId) {
    await loadFavorites();
    const exists = favoritesCache.find(f => f.cocktailId === cocktailId);
    if (exists) return { data: exists };

    const newFav = { id: getNextFavId(), cocktailId };
    const updated = [...favoritesCache, newFav];
    await saveFavorites(updated);
    return { data: newFav };
  },

  async removeFavorite(id) {
    await loadFavorites();
    const updated = favoritesCache.filter(f => f.id !== id);
    await saveFavorites(updated);
    return { data: null };
  },
};
