const express = require("express");
const { PORT } = require("./src/config/env");
const { connectmongoDB } = require("./src/config/mongodb");

const app = express();

app.use(express.json());
connectmongoDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
