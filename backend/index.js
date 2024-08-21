import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
dotenv.config();

try {
  mongoose.connect(process.env.DATABASE_URL);
  console.log("Connected to database");
} catch (error) {
  console.error(error.message);
}

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

app.listen(port, () => {
  console.log("Server running on port " + port);
});

app.use((err ,req, res,next) => {
        const statusCode = err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        return res.status(statusCode).json({
                success: false,
                message,
                statusCode
        });
})