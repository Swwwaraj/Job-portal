const express =require("express");
const routes = express.Routes();

app.get("/", async (req, res, next) => {
    try {
        
        res.send("Hello World!");
    }catch(err){
        next(err);
    }
    

});

module.exports = routes;