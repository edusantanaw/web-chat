export interface IEncrypter {
    genHah: (password: string) => Promise<string>
    compare: (password: string, hashedPassword: string) => Promise<boolean>
}
