import data from "../data.js";

export function TweetList(req,res){
    try{
        const tweets= [...data.tweets]
        if (tweets.length!=0) {
            res.status(200).json(tweets)
        }else{
            res.status(404).json({messsage:"not tweet found"}) 
        }
    }
    catch{res.status(500).json({Error:error.messsage})}
}