import { ReactNode, useState } from "react";
import { Context, UserContext } from "./UserContext";
import { User_Data } from "../Data/data";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const calculateAge = (birthDate: number) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const usersWithAges = User_Data.map((user) => ({
    ...user,
    age: calculateAge(user.birthDate), // اضافه کردن فیلد سن
  }));

  const totalAge = usersWithAges.reduce((acc, user) => acc + user.age, 0);
  const averageAge = totalAge / usersWithAges.length;

  const totalDeposit = usersWithAges.reduce(
    (acc, user) => acc + user.deposit,
    0
  );

  const [userContext] = useState<UserContext>({
    list: usersWithAges, 
    avgAge: averageAge, 
    totalBalance: totalDeposit, 
  });

  return <Context.Provider value={userContext}>{children}</Context.Provider>;
};
