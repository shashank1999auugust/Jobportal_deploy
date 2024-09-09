

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js"
import companyRoute from "./routes/company.routes.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
import path from "path";


dotenv.config({})


const app= express();

const _dirname= path.resolve()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const corsOptions={
    origin:"http//localhost:5173",
    credentials:true
}
app.use(cors(corsOptions))

const PORT= process.env.PORT|| 3000

//apis
app.use("/api/v1/user",userRoute)
app.use("/api/v1/company",companyRoute)
app.use("/api/v1/job",jobRoute)
app.use("/api/v1/application",applicationRoute)


app.use(express.static(path.join(_dirname, "/frontend/dist")))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
})



// "http://localhost:8000/api/v1/user/register"
// "http://localhost:8000/api/v1/user/login"
// "http://localhost:8000/api/v1/user/profile/update"




app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server running at port ${PORT}`);
})