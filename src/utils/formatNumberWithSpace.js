export const formatNumberWithSpace = (value) => {
  return value ? Number(value).toLocaleString("en-US").replace(/,/g, " ") : "";
};
