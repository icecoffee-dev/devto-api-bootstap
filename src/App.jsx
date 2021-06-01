import CardList from "./CardList";
import { useContext, useEffect, useState } from "react";
import Form from "./Form";

function App() {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const [user, setUser] = useState("icecoffee");
  function onSubmitHandler(user) {
    // excepts name of user to search for
    // to be user in form component
    setUser(user);
  }

  useEffect(() => {
    (async function requestPostList(user) {
      const url = "https://dev.to/api/articles?username=" + user;
      const res = await fetch(url);
      const json = await res.json();
      setPostList(json);
      setLoading(false);
    })(user);
  }, [user]);

  return (
    /* jshint ignore:start */
    <>
      <header id="main-header">
        <Form props={{ onSubmitHandler, user }} />
      </header>
      <main>
        {loading ? (
          <div>Loading! Please Wait</div>
        ) : (
          <CardList props={postList} />
        )}
      </main>
    </>
    /* jshint ignore:end */
  );
}

export default App;
