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
  reviews: [
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
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Schema.Types.Mixed,
    required: true,
  },
});

const Books = model<IBooks>("", bookSchema, "Books");
export default Books;
