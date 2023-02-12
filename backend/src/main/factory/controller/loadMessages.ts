import { loadMessagesController } from "../../../controllers/loadMessages";
import { makeLoadMessagesUsecase } from "../usecase/loadMessages";

export function makeLoadMessagesController(){
    const loadMessagesUsecase = makeLoadMessagesUsecase()
    return loadMessagesController(loadMessagesUsecase)
}