import { categories, products } from '../data.js';

export const Query = {
  products: () => products,
  product: (parent, args, context) => {
    const { id } = args;
    return products.find(product => product.id === id);
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const { id: categoryId } = args;
    return categories.find(category => category.id === categoryId);
  },
};
