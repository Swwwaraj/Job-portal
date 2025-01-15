const express = require("express");
const app = express();
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(errorHandler);
app.get("/", async (req, res, next) => {
    try {
        
        res.send("Hello World!");
    }catch(err){
        next(err);
    }
    

});

app.listen(PORT,() => {
    console.log(`Server is running on PORT ${PORT}`);

});
