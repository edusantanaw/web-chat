import { Router } from "express";
import adapter from "../adpter/express-adapter";
import { makeLoadMessagesController } from "../factory/controller/loadMessages";
import { verifyToken } from "../middlewares/verify-token";

export default (router: Router) => {
    router.get("/messages/:room", verifyToken, adapter(makeLoadMessagesController()) )
};