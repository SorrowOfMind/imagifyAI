const express = require("express");
const cors = require("cors");
require("dotenv").config();

const imageRoutes = require("./routes/imageRoutes");
const openaiRoutes = require("./routes/openaiRoutes");
const connectDB = require("./mongodb/connect.js");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use("/api/v1/images", imageRoutes);
app.use("/api/v1/openai", openaiRoutes);


const startServer = async() => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => console.log(`server is up and listening on port ${PORT}`));
    } catch(err) {
        console.log(err);
    }


}

startServer();

