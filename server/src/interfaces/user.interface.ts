export interface IUser {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  role: string[];
}
