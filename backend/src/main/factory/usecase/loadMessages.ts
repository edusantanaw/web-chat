import { MessageRepository } from "../../../infra/repository/message";
import { loadMessagesUsecase } from "../../../usecases/loadMessages";

export function makeLoadMessagesUsecase(){
    const messageRepository = new MessageRepository()
    return loadMessagesUsecase(messageRepository)
}