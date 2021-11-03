export const calculateAge = (date: Date) => {
  const actualDate = new Date();
  const calculate = actualDate.getTime() - date.getTime();

  return Math.floor(calculate / (1000 * 60 * 60 * 24 * 365.25));
};
