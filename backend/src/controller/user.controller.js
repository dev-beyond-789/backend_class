const bcrypt = require("bcrypt");
const { User } = require("../module/user.module");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(400).json({
        message: "User already exists.",
      });
    }
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  register,
};
