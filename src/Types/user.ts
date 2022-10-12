export interface UserInterface {
    id?: number,
    email: string,
    username: string,
    password: string,
    name: {
        firstname: string,
        lastname: string
    },
    phone?: number
    address?: {
        city: string,
        geolocation: { lat: string, long: string }
        number: number
        street: string
        zipcode: string
    }
}