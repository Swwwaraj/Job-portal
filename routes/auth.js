const express = require('express');
const router = require.Router();
const userModel =require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res, next) => {
    try{
        const { name, email, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = new userModel({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();
        res.json({ message: "User registered successfully"}).status(200);
    }
    catch (err) {
        next(err);
    }
});

router.post("/login",async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email});
        if (!user) {
            return res.status(401).json({ message: "User Not Found"});
        }
    }
    catch (err){
        next(err);
    }
});