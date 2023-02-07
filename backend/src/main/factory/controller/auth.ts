import authController from "../../../controllers/auth";
import makeAuthUsecase from "../usecase/auth";

export function makeAuthControllerFactory(){
    const authUsecase = makeAuthUsecase()
    return authController({authUsecase})
}