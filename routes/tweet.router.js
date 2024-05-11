import { Router } from "express";
import { getAllTwitter, postTweet } from "../controler/tweet.controler.js";


const TweetRouter =Router()
// Router.method(le chemin un string, notre controller)
TweetRouter.post("/", postTweet)
TweetRouter.get("/", getAllTwitter)


export default TweetRouter
