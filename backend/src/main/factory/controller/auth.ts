import authController from "../../../controllers/auth";

export function makeAuthControllerFactory(){

    return authController({})
}