export interface studentRegistration {
    email: string,
    rollNumber: number,
    phoneNumber: number,
    firstName: string,
    lastName: string,
    address: string,
    password: string
}

export interface StudentLogin {
    email: string,
    password: string
}