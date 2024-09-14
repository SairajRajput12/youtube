// require('dotenv').config({path: './env'});
import dotenv from "dotenv"
import express from 'express';  
dotenv.config({
    path: './.env'
});
import connectDB from "./db/index.js";
const app = express(); 
// agar database connect karte samay error aye to try catch through resolve karna padta hai...
// ya phir async await bhi use kar skte hai 

// it is called ifis which is the better approach
// approach 1: 
/*
;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("errorr",(error) => {
            console.log("ERROR: ",error); 
            throw error
        });

        app.listen(process.env.PORT,() => {
            console.log(`APP is Listening on PORT ${process.env.PORT}`)
        })
    }catch(error){
        console.error("ERROR: ",error); 
        throw error; 
    }
})()
*/ 

// approach 2: 
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})