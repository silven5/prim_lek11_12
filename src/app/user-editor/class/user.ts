export class User
{
    userName: string;
    userEmail: string;
    userPhones: string;
    userColor: string;
    constructor(name,email, phone, color1)
    {
        this.userName = name;
        this.userEmail = email;
        this.userPhones = phone;
        this.userColor = color1;
    }
}