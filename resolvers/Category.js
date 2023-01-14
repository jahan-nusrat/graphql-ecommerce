import { products } from '../data.js';

export const Category = {
  products: (parent, args, context) => {
    const { filter } = args;
    const { id: parentid } = parent;
    if (filter && filter.onSale) {
      return products.filter(product => product.onSale);
    } else {
      return products.filter(product => product.categoryId === parentid);
    }
  },
};
