import { IWrite } from "./iwrite";
import { User } from "./user";

export class WriteConsol implements IWrite
{
     
    write(user:User)
    {
        console.log("User Name = ", user.userName);
        console.log("User Email = ", user.userEmail);
        console.log("User Phone = ", user.userPhones);
        console.log("User Color = ", user.userColor);
    }
}