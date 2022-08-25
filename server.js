require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/config");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");


//connection mongodb
connectDB();


// middlewares
app.use(express.json());
app.use(cors())

// routes
app.get('/', (req,res) =>
  res.status(200).json('welcome to my pizza delivery app'),
)
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);


//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/payment/", require("./routes/orderRoute"));

// server is listening for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port: ${PORT}`);
});

