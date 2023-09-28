import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res
            .status(401)
            .json({ message: "Access denied, token missing" });
    }

    try {
        // Verify and decode the JWT token using your secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res
            .status(401)
            .json({ message: "Access denied, invalid token" });
    }
};

export { verifyToken };
