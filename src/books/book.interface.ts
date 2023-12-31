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
