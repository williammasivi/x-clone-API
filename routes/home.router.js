import { homeControler } from "../controler/home.controler.js"
import { Router } from "express"


const homeRouter = Router () ;

homeRouter.get("/", homeControler)

export default homeRouter;