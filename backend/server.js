import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Razorpay from "razorpay";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// 🔹 User Model
const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  isPremium: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

// 🔹 Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Sample route
app.get("/", (req, res) => {
  res.send("CodeWithYash Backend Running 🚀");
});

// 🔹 Create Razorpay order
app.post("/api/payment/create-order", async (req, res) => {
  try {
    const { amount, userId } = req.body;

    if (!amount || !userId) {
      return res.status(400).json({ error: "Amount and userId are required" });
    }

    const options = {
      amount: amount * 100, // in paise
      currency: "INR",
      receipt: `receipt_${userId}_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// 🔹 Mark user as premium after successful payment
app.post("/api/payment/success", async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { clerkId: userId },
      { isPremium: true },
      { upsert: true, new: true }
    );

    res.json({ message: "User is now premium", user: updatedUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update user" });
  }
});

// 🔹 Check if user is premium (optional route for frontend)
app.get("/api/user/:clerkId", async (req, res) => {
  try {
    const user = await User.findOne({ clerkId: req.params.clerkId });
    res.json({ isPremium: user?.isPremium || false });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
