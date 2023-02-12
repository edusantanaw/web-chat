import { Router } from "express";
import adapter from "../adpter/express-adapter";
import { makeAddNewContactController } from "../factory/controller/addNewContact";
import { makeLoadContactsController } from "../factory/controller/loadContacts";
import { verifyToken } from "../middlewares/verify-token";

export default (router: Router) => {
    router.post("/contact", verifyToken, adapter(makeAddNewContactController()))
    router.get("/contacts/:userId",verifyToken, adapter(makeLoadContactsController()))
};