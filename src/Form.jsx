import { useState } from "react";

function Form({ props }) {
  const [userName, setUserName] = useState(props.user);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmitHandler(userName);
        setUserName("");
      }}
    >
      <input
        type="text"
        name="user"
        id="user"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onBlur={(e) => setUserName(e.target.value)}
        placeholder="icecoffee"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
