import { Router } from "express";
import { getuser } from "../controler/user.controler.js"; 


const useRouter = Router()

useRouter.get("/use",getuser)

export default useRouter