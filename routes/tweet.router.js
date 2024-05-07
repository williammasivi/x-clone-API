import { Router } from "express";
import { TweetList } from "../controler/tweet.controler.js";

const TweetRouter =Router()
// Router.method(le chemin un string, notre controller)
TweetRouter.get("/tweets",TweetList)

export default TweetRouter
