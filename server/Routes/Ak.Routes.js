import { AkRead } from "../Controller/AK.Controller";
import express from 'express'
const akRouter = express.Router();

akRouter.get("/get",AkRead);

export default akRouter;  //export the router