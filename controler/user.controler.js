import data from "../data.js";

export function getuser(req,res){
   res.json(data.currentUser)
}