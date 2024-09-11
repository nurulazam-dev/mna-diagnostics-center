export const formatDate = (date, config) => {
  const defaultOptions = { day: "numeric", month: "short", year: "numeric" };
  const option = config ? config : defaultOptions;
  return new Date(date).toLocaleDateString("en-US", option);
};
