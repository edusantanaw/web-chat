import { IContactRepository } from "../protocols/repository/contacts";


type data = {
    userId: string;
    contactId: string;
}

interface Dependeces {
    contactsReposository: IContactRepository
}
export function loadRoomUsecase({ contactsReposository }: Dependeces) {
    return async ({ userId, contactId }: data) => {
        const contact =
            await contactsReposository.findById(userId, contactId)
        if (contact) return contact.room
        return null
    }
}