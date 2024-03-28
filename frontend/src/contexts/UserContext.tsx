import React, { createContext, useEffect, useState } from "react";
import { signinInput } from "@ayush-vashisht/common";
import axios from "axios";

export const UserContext = createContext<signinInput | null>({
  name: "Ayush",
  username: "test@gmail.com"
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState<signinInput | null>({
    name: "Ayush",
    username: "test@gmail.com"
  });
  const [ready, setReady] = useState<Boolean>(false);
  useEffect(() => {
    if (!user) {
      const checkUser = async () => {
        const { data } = await axios.get("/api/v1/user/profile");
        console.log(data);
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
