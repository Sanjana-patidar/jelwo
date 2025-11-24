import mongoose from "mongoose";

const jewelrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  item: { type: Number, required: true },
  image: { type: String, required:true},
});

const Jewelry = mongoose.model("Jewelry", jewelrySchema);
export default Jewelry;
