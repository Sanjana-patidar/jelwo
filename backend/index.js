import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./route/productRoutes.js";
import jewelryRoutes from "./route/jewelryRoutes.js";
import customerRoutes from "./route/customerRoutes.js";
import userRoutes from "./route/userRoute.js";
import adminRoutes from "./route/adminRoute.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ["https://jelwo.vercel.app", "http://localhost:5174/"],
  credentials: true
}));
app.use(express.json());

// uploads folder static access
app.use("/uploads", express.static("uploads"));
// Routes
app.use("/api/products", productRoutes);
app.use("/api/jewelry", jewelryRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

app.get('/ping', (req,res) => {
  res.send('Pong');
})

// Database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Atlas connected"))
.catch((err) => console.error("DB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servers running on port ${PORT}`);
});