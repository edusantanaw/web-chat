import { Router } from "express";
import adapter from "../adpter/express-adapter";
import { makeLoadMessagesController } from "../factory/controller/loadMessages";

export default (router: Router) => {
    router.get("/messages/:room", adapter(makeLoadMessagesController()) )
};