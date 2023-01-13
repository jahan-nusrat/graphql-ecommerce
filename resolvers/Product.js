import { categories, reviews } from '../data.js';

export const Product = {
  category: (parent, args, context) => {
    const { categoryId } = parent;
    return categories.find(category => category.id === categoryId);
  },

  review: (parent, args, context) => {
    const { id: productId } = parent;
    return reviews.filter(review => review.productId === productId);
  },
};
