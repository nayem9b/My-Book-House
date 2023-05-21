import { Schema, model } from "mongoose";
import { IBooks } from "./book.interface";

const bookSchema = new Schema<IBooks>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: [String],
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  publisher: {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  reviews: {
    type: [
      {
        user: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Schema.Types.Mixed,
    required: true,
  },
});

const Books = model<IBooks>("Books", bookSchema);
export default Books;

//  title: string;
//   author: string[];
//   genre: string;
//   publicationYear: number;
//   publisher: { name: string; location: string };
//   reviews: [{ user: string; comment: string }];
//   rating: number;
//   price: string | number;
