const express = require("express");
const cors = require("cors"); // Add this line
const weatherRoutes = require("./routes/weatherRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Use CORS middleware
app.use(cors()); 

app.use(express.json());
app.use("/", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
