import mongoose from "mongoose";   

const productSchema = new mongoose.Schema({
    name:{type:String, required:true},
    size:{type:Number, required:true},
    purchasePrice:{type:Number, required:true},
    sellPrice:{type:Number, required:true},
    dataAdded:{type:Date, default:Date.now},
});
const product = mongoose.model("Product", productSchema);
export default product;