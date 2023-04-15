const express = require("express");

const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const { categoryRouter, productRouter } = require("./routes");

app.use("/category", categoryRouter);
app.use("/product", productRouter);

module.exports = app;
