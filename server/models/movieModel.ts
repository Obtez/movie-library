import { Schema, model } from "mongoose"

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: [
      "watched",
      "not watched",
      "want to watch",
      "watching"
    ]
  },
});

const Movie = model("Movie", movieSchema);

export default Movie;