export interface UserInterface {
    id?: number,
    email: string,
    username: string,
    password: string,
    name: {
        firstname: string,
        lastname: string
    }
}