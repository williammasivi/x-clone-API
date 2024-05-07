import data from "./data.js"
import express from "express"
import dotenv from "dotenv"
import TweetRouter from "./routes/tweet.router.js"
import useRouter from "./routes/user.router.js"

dotenv.config()

const {PORT} =process.env

const app=express()
app.use(express.json())

app.use("/",useRouter)

app.listen(PORT)
