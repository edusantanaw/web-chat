import { Contacts } from "../schemas/contacts";
import { randomUUID } from 'node:crypto'
import { IContact, IContactRepository } from "../../protocols/repository/contacts";

export class ContactsRepository implements IContactRepository {
    async create(userId: string, contactId: string, room?: string) {
        const newContact = new Contacts({
            contactId: contactId,
            userId: userId,
            room: room ? room : randomUUID()
        })
        await newContact.save()
        return newContact as any as IContact
    }

    async findContacts(userId: string) {
        const contacts = await Contacts.find({ userId: userId })
        if (contacts.length === 0) return null
        return contacts as any as IContact[]
    }

    async findById(id: string, contactId: string) {
        const contact = await Contacts.find({
            $or: [{
                userId: id,
                contactId: contactId
            }, {
                contactId: id,
                userId: contactId
            }
            ]
        })
        if (contact.length === 0) return null
        return contact[0] as any as IContact
    }

    async loadContacts(userId: string){
        const contacts = await Contacts.find({userId})
        if(!contacts) return null
        return contacts as any as IContact[]
    }
}