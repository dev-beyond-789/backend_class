const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    buyername: {
      type: String,
      required: true,
      trim: true,
    },
    productname: {
      type: String,
      required: true,
    },
    productquantity: {
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
