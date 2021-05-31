import CardList from "./CardList";
import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { UserProvider } from "./UserContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const user = useContext(UserProvider);

  useEffect(() => {
    (async function requestPostList() {
      const url = "https://dev.to/api/articles?username=icecoffee";
      const res = await fetch(url);
      const json = await res.json();
      setPostList(json);
      setLoading(false);
    })();
  }, []);
  {
    console.log(user);
  }
  return (
    /* jshint ignore:start */
    <>
      <Header />
      {loading ? (
        <div>Loading! Please Wait</div>
      ) : (
        <UserProvider>
          <CardList props={postList} />
        </UserProvider>
      )}
    </>
    /* jshint ignore:end */
  );
}

export default App;
