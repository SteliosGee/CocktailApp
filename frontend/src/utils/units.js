const ML_PER_OZ = 29.5735;

export const convertQuantity = (quantity, fromUnit, toUnit) => {
  if (!quantity && quantity !== 0) return { quantity, unit: toUnit || fromUnit };

  const from = normalizeUnit(fromUnit);
  const to = normalizeUnit(toUnit);

  if (from === to) return { quantity, unit: toUnit };

  const convertible = ['ml', 'oz', 'cl', 'l'];
  if (!convertible.includes(from) || !convertible.includes(to)) {
    return { quantity, unit: fromUnit };
  }

  let converted;
  if (from === 'ml' && to === 'oz') {
    converted = quantity / ML_PER_OZ;
  } else if (from === 'oz' && to === 'ml') {
    converted = quantity * ML_PER_OZ;
  } else if (from === 'ml' && to === 'cl') {
    converted = quantity / 10;
  } else if (from === 'cl' && to === 'ml') {
    converted = quantity * 10;
  } else if (from === 'ml' && to === 'l') {
    converted = quantity / 1000;
  } else if (from === 'l' && to === 'ml') {
    converted = quantity * 1000;
  } else if (from === 'oz' && to === 'cl') {
    converted = (quantity * ML_PER_OZ) / 10;
  } else if (from === 'cl' && to === 'oz') {
    converted = (quantity * 10) / ML_PER_OZ;
  } else if (from === 'oz' && to === 'l') {
    converted = (quantity * ML_PER_OZ) / 1000;
  } else if (from === 'l' && to === 'oz') {
    converted = (quantity * 1000) / ML_PER_OZ;
  } else if (from === 'cl' && to === 'l') {
    converted = quantity / 100;
  } else if (from === 'l' && to === 'cl') {
    converted = quantity * 100;
  } else {
    return { quantity, unit: fromUnit };
  }

  return { quantity: roundQuantity(converted), unit: toUnit };
};

const normalizeUnit = (unit) => {
  if (!unit) return 'ml';
  const u = unit.toLowerCase().trim();
  if (u === 'oz' || u === 'ounce' || u === 'ounces') return 'oz';
  if (u === 'ml' || u === 'milliliter' || u === 'milliliters') return 'ml';
  if (u === 'cl' || u === 'centiliter' || u === 'centiliters') return 'cl';
  if (u === 'l' || u === 'liter' || u === 'liters') return 'l';
  if (u === 'cup' || u === 'cups') return 'cup';
  if (u === 'tbsp' || u === 'tablespoon' || u === 'tablespoons') return 'tbsp';
  if (u === 'tsp' || u === 'teaspoon' || u === 'teaspoons') return 'tsp';
  return u;
};

const roundQuantity = (num) => {
  if (num >= 10) return Math.round(num);
  if (num >= 1) return Math.round(num * 10) / 10;
  return Math.round(num * 100) / 100;
};

export const formatQuantity = (quantity, unit) => {
  if (!quantity && quantity !== 0) return '';
  const displayUnit = getDisplayUnit(unit);
  return `${quantity} ${displayUnit}`;
};

const getDisplayUnit = (unit) => {
  if (!unit) return 'ml';
  const u = unit.toLowerCase().trim();
  if (u === 'oz' || u === 'ounce' || u === 'ounces') return 'oz';
  if (u === 'ml' || u === 'milliliter' || u === 'milliliters') return 'ml';
  if (u === 'cl' || u === 'centiliter' || u === 'centiliters') return 'cl';
  if (u === 'l' || u === 'liter' || u === 'liters') return 'L';
  if (u === 'cup' || u === 'cups') return 'cup';
  if (u === 'tbsp' || u === 'tablespoon' || u === 'tablespoons') return 'tbsp';
  if (u === 'tsp' || u === 'teaspoon' || u === 'teaspoons') return 'tsp';
  if (u === 'dash' || u === 'dashes') return 'dash';
  if (u === 'piece' || u === 'pieces' || u === 'whole') return unit;
  if (u === 'slice' || u === 'slices') return unit;
  if (u === 'wedge' || u === 'wedges') return unit;
  if (u === 'leaf' || u === 'leaves') return unit;
  if (u === 'sprig' || u === 'sprigs') return unit;
  return unit;
};
