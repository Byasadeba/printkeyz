// require("dotenv").config();
// const app = require("./src/app");
// const connectDB = require("./src/config/db");

// connectDB();

// app.listen(5000, () => {
//   console.log("Backend running on port 5000");
// });



const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./src/config/passport");
const connectDB = require("./src/config/db");

const authRoutes = require("./src/routes/auth.routes");
const cookieParser = require("cookie-parser");


connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

