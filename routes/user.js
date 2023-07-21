 const express = require("express");
 const router = express.Router();

 const User = require("../models/User");

 const {login, signup} = require("../Controllers/Auth");
 const {auth, isStudent, isAdmin} = require("../middlewares/auth");

 router.post("/login", login);
 router.post("/signup", signup);

 // testing protected routes for signal middleware
 router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the Protected routes for Students',
    });
 });

 router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the Protected routes for Admin',
    });
 });

 module.exports = router;
 