import { badRequest, exception, noContent, ok } from "../helpers/http-response";
import { exceptionError } from "../protocols/helpers/exception";

type IMessages = {
    message: string;
    sender: string;
    toRoom: string
}

type ILoadMessagesUsecase = (room: string) => Promise<IMessages[] | null>


export function loadMessagesController(loadMessagesUsecase: ILoadMessagesUsecase) {
    return async ({ room }: { room: string }) => {
        try {
            if (!room) return badRequest("A sala é necessaria!")
            const messages = await loadMessagesUsecase(room)
            if (!messages) return noContent("messages")
            return ok(messages)
        } catch (error) {
            return exception(error as exceptionError)
        }
    }
}