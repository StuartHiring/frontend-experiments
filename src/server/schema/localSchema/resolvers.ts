/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { books, authors } from "./data";

export default {
  Query: {
    books: (parent, args, context) => {
      return books;
    },
    book: (parent, args, context) => {
      return books.find((book) => book.id === args.id);
    },
    authors: (parent, args, context) => {
      return authors;
    },
    author: (parent, args, context) => {
      return authors.find((author) => author.name === args.name);
    },
    test: () => {
      return ["DEF"];
    },
  },

  Book: {
    author: (parent, args, context) => {
      return authors.find((author) => author.name === parent.author);
    },
  },
};
