import { categories, products, reviews } from '../data.js';

export const Query = {
  products: (parent, args, context) => {
    console.log(args);
    const { filter } = args;

    if (filter && (filter.onSale || filter.rating)) {
      const { onSale, rating } = filter;
      if (onSale) {
        return products.filter(product => product.onSale);
      }
      if (rating) {
        return products.filter(product => {
          return reviews
            .filter(review => review.productId === product.id)
            .filter(avg => {
              return avg.rating > rating;
            });
        });
      }
    }
    return products;
  },
  product: (parent, args, context) => {
    const { id } = args;
    return products.find(product => product.id === id);
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const { id: categoryId } = args;
    return categories.find(category => category.id === categoryId);
  },
  reviews: () => reviews,
  review: (parent, args, context) => {
    const { id } = args;
    return reviews.find(product => product.id === id);
  },
};
