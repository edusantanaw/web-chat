import { Router } from "express";
import adapter from "../adpter/express-adapter";
import { makeAddNewContactController } from "../factory/controller/addNewContact";
import { makeLoadContactsController } from "../factory/controller/loadContacts";

export default (router: Router) => {
    router.post("/contact", adapter(makeAddNewContactController()))
    router.get("/contacts/:userId", adapter(makeLoadContactsController()))
};