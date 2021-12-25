import mongoose, { ConnectOptions } from "mongoose";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions

const connectToDB = async (URI: string) => {
  try
  {
    await mongoose.connect(URI, options)
    console.log("Connected to MongoDB.")
  } catch (error) {
    console.log(error)
  }
}

export default connectToDB;