const bcrypt = require("bcrypt");
const product = require("../module/product.model");

const productDetail = async (req, res) => {
  try {
    const { buyername, productname, productquantity } = req.body;
    const isExist = await User.findOne({ buyername});
  } catch (error) {
    res.status(500).json({
      success: true,
      message: message.error,
    });
  }
};
