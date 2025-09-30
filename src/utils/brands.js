export const toBrandOptions = (brands) => {
  const brandsCopy = Array.isArray(brands) ? brands : [];

  const cleanBrands = Array.from(
    new Set(
      brandsCopy
        .filter(Boolean)
        .map((brand) => String(brand).trim())
        .filter(Boolean)
    )
  );

  return cleanBrands
    .sort((a, b) => a.localeCompare(b))
    .map((brand) => ({ value: brand, label: brand }));
};
