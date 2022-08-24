require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");
require("colors");
const morgan = require("morgan");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())




// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);


//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/payment/", require("./routes/orderRoute"));

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
