
export class User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    constructor(fn: string, ln: string, e: string, p: string) {
        this.firstName = fn;
        this.lastName = ln;
        this.email = e;
        this.password = p;
    }
}