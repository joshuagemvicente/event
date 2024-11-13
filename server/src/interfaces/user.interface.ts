export enum UserRole {
  USER = "user",
  ADMIN = "admin",
  ORGANIZER = "organizer",
}

export interface IUser {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  canHostEvents: boolean;
  createdAt: Date;
  updatedAt: Date;
  role: UserRole;
}
