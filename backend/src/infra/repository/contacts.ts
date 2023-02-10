import { Contacts } from "../schemas/contacts";
import { randomUUID } from 'node:crypto'

export class ContactsRepository {

    async create(userId: string, contactId: string) {
        const newContact = new Contacts({
            contactId: contactId,
            userId: userId,
            room: randomUUID()
        })
        await newContact.save()
        return newContact
    }

    async findContacts(userId: string) {
        const contacts = await Contacts.find({ userId: userId })
        if (contacts.length === 0) return null
        return contacts
    }

    async findById(id: string) {
        const contact = await Contacts.find({
            $or: [{ userId: id }, { contactId: id }]
        })
        if (contact.length === 0) return null
        return contact[0]
    }
}