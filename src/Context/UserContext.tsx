import { createContext } from "react";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: number;
  job: string;
  deposit: number;
  city: string;
  description: string;
  img: string;
};

export type UserContext = {
  list: User[];
  totalBalance: number;
  avgAge: number;
};

export const Context = createContext<UserContext | undefined>(undefined);
