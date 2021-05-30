import CardList from "./CardList";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    (async function requestPostList() {
      const url = "https://dev.to/api/articles?username=icecoffee";
      const res = await fetch(url);
      const json = await res.json();
      setPostList(json);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div>Loading! Please Wait</div>;
  } else {
    return (
      /* jshint ignore:start */
      <CardList props={postList} />
      /* jshint ignore:end */
    );
  }
}

export default App;
