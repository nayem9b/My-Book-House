export interface IBooks {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  rating: number;
  price: string | number;
  publisher: { name: string; location: string };
  reviews: [
    { user: string; comment: string },
    { user: string; comment: string }
  ];
}
