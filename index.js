import express from "express"
import dotenv from "dotenv"
import homeRouter from "./routes/home.router.js"
import TweetRouter from "./routes/tweet.router.js"
import useRouter from "./routes/user.router.js"
import cors from "cors"


dotenv.config()

const {PORT} =process.env


const app=express()
app.use(cors())
app.use(express.json())


app.use("/tweets", TweetRouter)
app.use("/user", useRouter) 
app.use("/", homeRouter )

app.listen(PORT)

