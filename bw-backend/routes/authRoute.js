import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //check for exisiting user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
        }

        //hahsing user password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "Registered user successfulluy" });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        //Check for already a user
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "Invalid Credentials" });
        }

        //check for password match
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            res.status(401).json({ message: "Invalid Credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1d",
            }
        );

        let oldTokens = user.tokens || [];

        if (oldTokens.length) {
            oldTokens = oldTokens.filter((t) => {
                const timeDiff = (Date.now() - parseInt(t.signedAt)) / 1000;
                if (timeDiff < 86400) {
                    return t;
                }
            });
        }

        await User.findByIdAndUpdate(user._id, {
            tokens: [...oldTokens, { token, signedAt: Date.now().toString() }],
        });

        const userInfo = {
            name: user.name,
            email: user.email,
        };

        res.json({ success: true, user: userInfo, token });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

router.get("/profile", verifyToken, async (req, res) => {
    try {
        // Use the decoded user ID from the token to fetch user data
        const user = await User.findById(req.user.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/logout", verifyToken, (req, res) => {
    // Instruct the client to delete the token by setting an empty cookie or clearing local storage, depending on your frontend implementation
    res.clearCookie("token"); // If you're using cookies for token storage
    // Or you can return a JSON response to clear token from local storage in your frontend
    res.json({ message: "Logged out successfully" });
});

export default router;
