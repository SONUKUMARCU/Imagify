import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDb from "./config/mongodb.js"
import userRouter from "./routes/userRoutes..js"


const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json())
app.use(cors()) 
await connectDb();


app.use("/api/user",userRouter);
app.get("/",(req,res) => res.send("API is working"))


app.listen(PORT,()=> console.log("server is running on port : " + PORT));