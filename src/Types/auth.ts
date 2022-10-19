export interface SignupFormValues {
    firstname: string
    lastname: string
    username: string
    email: string
    password: string
    cpassword: string,
    [key: string]: string
}


export interface ForgotFormValues {
    email: string
}