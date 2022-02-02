const express = require("express");
const cors = require("cors");
const connectDb = require("./database");
const productsRoutes = require("./api/products/routes");
const { logger, errorMessage } = require("./middleware/middlewares");

const app = express();
connectDb();

app.use(cors());
app.use(express.json());

app.use(logger);

// Routes
app.use("/products", productsRoutes);

app.use(errorMessage);
app.listen(process.env.PORT || 5000);
