import {Role} from "../../auth/models/role.enum";

export interface AuthStateModel {
  token: string | null;
  email: string | null;
  role: Role | null;
}

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: { email: string; password: string }) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
