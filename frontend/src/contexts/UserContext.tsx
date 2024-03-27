import React, { createContext, useEffect, useState } from "react";
import { signupInput } from "@ayush-vashisht/common";
import axios from "axios";

export const UserContext = createContext<signupInput | null>({
  name: "Ayush",
  username: "test@gmail.com",
  password: "test1234",
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState<signupInput | null>({
    name: "Ayush",
    username: "test@gmail.com",
    password: "test1234",
  });
  const [ready, setReady] = useState<Boolean>(false);
  useEffect(() => {
    if (!user) {
      const checkUser = async () => {
        const { data } = await axios.get("/api/v1/user/profile");
        setUser(data);
        setReady(true);
      };
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, ready, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
