const express =require("express");
const userModel = require("../models/user.model");
const router = express.Router();
const applicationModel = require("../models/application.model");

// get id from token
// get user from that id
router.get("/", async (req, res, next) => {
    try {
        const { id } = req.user;
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(401).json({ message:"User not found"});

        }
        res.json(user).status(200);
    }
    catch(err){
        next(err);
    }
    

});

router.delete("/", async (req, res, next) => {
    try {
        const { id } = req.user;
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({message: "User not Found" });

        }
        res.json({message: "User deleted Successfully"}).status(200);
    }
    catch(err){
        next(err);
    }
});
 
router.put("/", async (req, res, next) => {
    try {
        const { id } = req.user;
        const user = await userModel.findById(id, req.body);
        if (!user) {
            return res.status(404).json({message: "User not Found" });

        }
        res.json(user).status(200);
    }
    catch(err){
        next(err);
    }
});

// /api/user/createdJobs=true&savedJobs=false&appledJobs=true
router.get("/", async( req, res, next) => {
    try {
        const {createdJobs, savedJobs, appliedJobs } = req.query;
        const jobs = await userModel.findById(red.user.id);
        if(!jobs){
            return res.status(404).json({ message: "Usere not found"});
        }
        const query = {};
        if(createdJobs) {
            query.createdJobs = true;
        }
        if(savedJobs) {
            query.savedJobs = true;
        }
        if(appliedJobs) {
            query.appliedJobs = true;
        }
        else{
            const jobs = await userModel.findById(req.user.id).select({...query});
            return res.json(jobs).status(200);
        }

    }
    catch(err){
        next(err);
    }
});

router.get("/status", async(req, res, next) => {
    try{
        const { id } = req.user;
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found"});
        }
        const application = await applicationModel.find({ user: id });
        const acceptedApplication = application.filter(app => app.status === "accepted");
        const pendingApplication =application.filter(app => app.status === "pending");
        return res.json({ acceptedApplication}).status(200);
    }
    catch (err) {
        next(err);
    }

});

// cerate filter for pending rejected
// create apis for counting applications (individually) and cumulatively)

module.exports = router;