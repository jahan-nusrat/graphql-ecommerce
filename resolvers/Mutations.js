import { v4 as uuid } from 'uuid';
import { categories } from '../data.js';

export const Mutation = {
  addCategory: (parent, args, context) => {
    const {
      input: { name },
    } = args;

    const newCategory = { id: uuid(), name };
    categories.push(newCategory);
    return newCategory;
  },

  updateCategory: (parent, args, context) => {
    console.log(args);
  },
};
