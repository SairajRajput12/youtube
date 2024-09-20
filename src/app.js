import express from "express"; 
import cors from "cors"; 
import cookieParser from "cookie-parser"; 


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN, 
    credentials:true
}));  // configuring cors 

app.use(express.json({limit:"16kb"})); // for handling the json file request. 
app.use(express.urlencoded({extended:true,limit:"16kb"})); // for url 
app.use(express.static("public"));  // images la store karnyasathi 
app.use(cookieParser()) // for storing the cookie in user browser and using them. 






export {app}; 