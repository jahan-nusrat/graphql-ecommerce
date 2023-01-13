import { products } from '../data.js';

export const Category = {
  products: (parent, args, context) => {
    const { id: parentid } = parent;
    return products.filter(product => product.categoryId === parentid);
  },
};
