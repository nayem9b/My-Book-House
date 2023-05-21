export interface IBooks {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: { name: string; location: string };
  reviews: [{ user: string; comment: string }];
  rating: number;
  price: string | number;
}

// import { Document } from "mongoose";

// interface Author {
//   name: string;
// }

// interface Publisher {
//   name: string;
//   location: string;
// }

// interface Review {
//   user: string;
//   comment: string;
// }

// export interface IBooks extends Document {
//   title: string;
//   author: Author[];
//   genre: string;
//   publicationYear: number;
//   publisher: Publisher;
//   reviews: Review[];
//   rating: number;
//   price: number | string;
// }
