import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import fetch from "node-fetch"; // Required for OpenAI API
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 8001;

// Middleware
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:5175", // Replace with your frontend URL
    credentials: true
};
app.use(cors(corsOptions));

// Database Connection
console.log("MongoDB URL:", process.env.MONGO_URL);

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
          // No longer needed in Mongoose 6+
        });
        console.log("✅ MongoDB database is connected");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err);
        process.exit(1);
    }
};



// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);

// OpenAI API Route
const API_KEY = process.env.API_KEY;
app.post("/completions", async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.message }],
            max_tokens: 100
        })
    };
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "OpenAI API error" });
    }
});

// Start Server After DB Connects
const startServer = async () => {
    await connectDB();
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
};

startServer();
