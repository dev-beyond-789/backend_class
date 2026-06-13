const { User } = require("../module/user.module");

const isAuthorization = roles => {
  return async (req, res, next) => {
    try {
      const _id = req._id;
      console.log(_id)
      const user = await User.findById(_id);
      const userRole = user.role;
      if (roles.includes(userRole)) {
        next();
      } else {
        res.status(403).json({
          message: "User not authoried",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

module.exports = isAuthorization;
