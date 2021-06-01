import { createPortal } from "react-dom";
import { useState } from "react";
import { UserProvider } from "./UserContext";

const header = document.querySelector("#header");

function MyHeader() {
  const [user, setUser] = useState("icecoffee");
  return (
    <>
      <UserProvider value={user}>
        <div className="input-field">
          <label htmlFor="input-user">
            <input
              type="text"
              name="user"
              id="input-user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              onBlur={(e) => setUser(e.target.value)}
            />
          </label>
        </div>
      </UserProvider>
    </>
  );
}

function Header() {
  return createPortal(<MyHeader />, header);
}

export default Header;
