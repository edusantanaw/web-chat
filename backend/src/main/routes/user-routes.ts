import { Router } from "express";
import adapter from "../adpter/express-adapter";
import { makeAuthControllerFactory } from "../factory/controller/auth";

export default (router: Router) => {
    router.post("/auth", adapter(makeAuthControllerFactory()))
};