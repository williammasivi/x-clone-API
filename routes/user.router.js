import { Router } from "express";
import { getuser } from "../controler/user.controler.js"; 


const useRouter = Router()

useRouter.get("/", getuser)

export default useRouter