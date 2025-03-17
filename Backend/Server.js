const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");
// const crudRoutes = require("./routes/crudRoutes");
const crudRoutes = require("../Backend/routes/crudRoutes")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api", crudRoutes);

// Home route (Test Route)
app.get("/", (req, res) => {
  res.json({ success: true, message: "The route is working successfully." });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});