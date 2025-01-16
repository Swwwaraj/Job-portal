const express =require("express");
const router = express.Router();
router.get("/", async (req, res, next) => {
    try {

        res.send("Hello World!");
    }catch(err){
        next(err);
    }
    

});

module.exports = router;