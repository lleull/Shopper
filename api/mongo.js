import mongoose from "mongoose"
const DATABASE_URL =
  "mongodb+srv://leulm333:wizkhalifa@grocery.bctp67g.mongodb.net/?retryWrites=true&w=majority"

const connectmonogo = async () => {
  await mongoose
    .connect(DATABASE_URL, {})
    .then(() => console.log("Successful"))
    .catch((error) => console.log(error));
};
export default connectmonogo;