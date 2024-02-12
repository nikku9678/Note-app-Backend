import express, { Router } from "express";
import userRouter from './routes/userRoute.js';
import taskRoute from './routes/taskRoute.js'
import { connectDB } from "./db/connectDB.js";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from 'cors';


const app = express();
dotenv.config();


// database connection
connectDB();




//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );


    // router
    app.use("/api/v1/users",userRouter)
    app.use("/api/v1/task",taskRoute)
    app.use(errorMiddleware);


app.get("/", (req, res) => {
  res.send("Hello World");
});
const  PORT = process.env.PORT || 5000;


app.listen(PORT, (req, res) => {
  console.log("Server is running on port 5000");
});
