require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/products", require("./routes/productRoutes"));

app.get("/", (req, res) => {
    res.send("Product API is running");
});

// Thêm đoạn này
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        service: "product-api"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});