import { Role } from "./role.enum";

export interface User {
  id: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
  birthdate?: string;
  profilePicture?: string;
  role?: Role;
  token?: string | null;
}