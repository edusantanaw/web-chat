import { badRequest, exception, success } from "../helpers/http-response"

interface Dependeces {
    addNewContactUsecase: (userId: string, contactId: string) => Promise<void>
}

type data = {
    userId: string
    contactId: string
}
export function addNewContact({ addNewContactUsecase }: Dependeces) {
    return async ({ userId, contactId }: data) => {
        try {
            if (!userId)
                return badRequest("O id do usuario é necessario!")
            if (!contactId)
                return badRequest("O id do contato é necessario!")
            await addNewContactUsecase(userId, contactId)
            return success(true)
        } catch (error) {
            return exception(error)
        }
    }
}