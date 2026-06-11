const { default: mongoose, isObjectIdOrHexString } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    Buyername: {
      type: String,
      required: true,
      trim: true,
    },
    productname: {
      type: String,
      required: true,
      unique: true,
    },
    ptoductquantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const Product = mongoose.model("Product", productSchema);
module.exports = { Product };
