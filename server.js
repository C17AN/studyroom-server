const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const seatRouter = require("./routes/seat");

require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use("/user", userRouter);
app.use("/seat", seatRouter);

app.listen(5000, () => console.log("server is at 5000"));
