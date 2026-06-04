const express = require("express");
const { PORT } = require("./src/config/env");
const { connectmongoDB } = require("./src/config/mongodb");
const { userRouter } = require("./src/routes/user.route");

const app = express();

app.use(express.json());
connectmongoDB();
app.use("/api/user", userRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
