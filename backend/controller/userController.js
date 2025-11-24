import  User  from "../modal/userModal.js";
import bcrypt from "bcryptjs";

// this file handle the logic for sign up and login

//Sign up logic
export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //  Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });


    
    //  Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  Save user to database
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//login logic

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    // Remove password before sending response
    const { password: pwd, ...userData } = user._doc;

    res.status(200).json({ message: "Login successful", user: userData });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//get all users 

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // remove password
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

