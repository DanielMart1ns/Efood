export const formatCurrency = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const getTotalPrice = (items: itemsCart[]) => {
  return items.reduce((previous, current) => {
    return (previous += current.price);
  }, 0);
};

export const getDescription = (text: string, type: string) => {
  if (type === 'dish') {
    if (text.length > 254) {
      return text.slice(0, 250) + '...';
    }
  }

  return text;
};
