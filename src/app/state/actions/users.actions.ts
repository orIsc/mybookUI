import { User } from "src/app/auth/models/user.interface";

export class Register {
    static readonly type = '[User] Register';
    constructor(public payload: User) {}
}