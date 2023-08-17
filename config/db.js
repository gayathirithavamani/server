import mongoose from "mongoose";

const connectToMongo = async () => {
  const res = await mongoose.connect(
   
    "mongodb+srv://merngalleryapp:merngalleryapp123@cluster0.nt3tb8j.mongodb.net/?retryWrites=true&w=majority"
  );
  if (res) {
    console.log("Connected Succesffuly");
  }
};

export default connectToMongo;
