import data from "../data.js";

export function getAllTwitter(req,res){
    try{
        const tweets= [...data.tweets]
        if (tweets.length!=0) {
            res.status(200).json(tweets)
        }else{
            res.status(404).json({messsage:"not tweet found"}) 
        }
    }
    catch{res.status(500).json({Error:error.messsage})}
};

export const getTwitterByname = (req ,res) => {
    const nickname =req.param.nickname;
    const tweet = data.filter(t=>t.nickname==nickname);
    try{
        res.status(200).json(tweet);
    }catch(error){
        res.status(500).json({messsage:error})
    }
};


export const postTweet =(req ,res) => {
    const id = (Math.random () * 100000).toString("16").split(".").join("");
    try{
        // if(!req.body.text){
        //     throw new error("tweet available")
        // }
        // if(req.body.text.length > 180 ){
        //     throw new error("may characters");
        // }
        const userPost ={
			id: id,
			logo: "/twitter-logo.png",
			content: {
				body: {
					title: {
						author: "Twitter",
						details: "@Twitter",
						details2: ".",
						details3: "Oct 4"
					},
					text: req.body.text,
					image: ""
				},
				actions: {
					action1: 0,
					action2: 0,
					action3: 0,
					action4: ""
				}
			}
		}
        const dataInDB = [userPost, data];
        res.status(200).json(dataInDB);

        console.log(dataInDB)
    } catch(error){
        res.status(500).json({messsage:error});
        console.log({ messsage: error})
    }
};