const { default: mongoose } = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    carName :{
      type: String,
      required: true,
    },
    carColour :{
      type: String,
      required: true,
    },
    ceo : {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    }

  }
)
const Car = mongoose.model("Car", carSchema);
module.exports = { Car };
