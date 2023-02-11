import { badRequest, exception, noContent, ok } from "../helpers/http-response"
import { exceptionError } from "../protocols/helpers/exception"
import { IContact } from "../protocols/repository/contacts"


type ILoadContactsUsecase = (userId: string) => Promise<IContact[] | null>

interface Dependeces {
    loadContactsUsecase: ILoadContactsUsecase
}

export function loadContactsController({ loadContactsUsecase }: Dependeces) {
    return async ({ userId }: { userId: string }) => {
        try {
            if (!userId) return badRequest("O id do usuario é necessario!")
            const contacts = await loadContactsUsecase(userId)
            if (!contacts) return noContent("contacts")
            return ok(contacts)
        } catch (error) {
            return exception(error as exceptionError)
        }
    }
}