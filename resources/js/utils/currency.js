export const formatCurrency = number => {
  return Number(number).toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ars',
  });
};
