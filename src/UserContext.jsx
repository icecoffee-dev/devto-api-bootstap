import react from "react";
import { createContext } from "react";

const UserContext = createContext("icecoffee");

export const UserProvider = UserContext.Provider;

export const UserConsumer = UserContext.Consumer;

export default UserContext;
