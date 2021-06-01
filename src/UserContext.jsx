import react, { createContext } from "react";

const UserContext = createContext("icecoffee");

export const UserProvider = UserContext.Provider;

export const UserConsumer = UserContext.Consumer;

export default UserContext;
