import { Router } from "express";
import adapter from "../adpter/express-adapter";
import { makeAuthControllerFactory } from "../factory/controller/auth";
import { makeCreateUserController } from "../factory/controller/createUser";
import { makeSearchUserController } from "../factory/controller/searchUser";
import { verifyToken } from "../middlewares/verify-token";

export default (router: Router) => {
    router.post("/auth", adapter(makeAuthControllerFactory()))
    router.post("/signup", adapter(makeCreateUserController()))
    router.get("/user/:username", verifyToken, adapter(makeSearchUserController()))
};