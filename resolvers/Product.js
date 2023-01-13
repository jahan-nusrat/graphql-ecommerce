import { categories } from '../data.js';

export const Product = {
  category: (parent, args, context) => {
    const { categoryId } = parent;
    return categories.find(category => category.id === categoryId);
  },
};
