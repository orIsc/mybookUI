import { Role } from "./role.enum";

export interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
    role?: Role;
    email?: string;
    phone?: string;
    token?: string | null;
    birthdate?: string;
    profilePicture?: string | null;
    
}