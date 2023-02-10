export type IContact = {
    userId: string;
    contactId: string;
    room: string
}

export interface IContactRepository {
    create:(
    userId: string,
    contactId: string,
    room?: string) => Promise<IContact>;
    findContacts: (userId: string) => Promise<IContact[] | null>
    findById: (id: string, contactId: string) => Promise<IContact | null>
}