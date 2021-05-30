function colorifyTag(name) {
  name = name.toLowerCase();
  tagStyle = {
    color: "#000",
    background: "#fff",
  };
  switch (name) {
    case "javascript":
      tagStyle.color = "#f0dc4e";
      break;
    case "webdev":
      tagStyle.color = "#451f51";
      break;
    case "100daysofcode":
      tagStyle.backgroundColor = "#00692a";
      tagStyle.color = "#fff";
      break;
    case "watercooler":
      tagStyle.backgroundColor = "#333";
      tagStyle.color = "#ffd8a0";
      break;
    case "beginners":
      tagStyle.color = "red";
      break;
    case "codenewbie":
      tagStyle.backgroundColor = "#006";
      tagStyle.color = "#fff";
      break;
    case "react":
      tagStyle.backgroundColor = "#f0d";
      tagStyle.color = "#fff";
      break;
    case "computerscience":
      tagStyle.background = "voilet";
      tagStyle.color = "orchid";
      break;
    case "html":
      tagStyle.color = "fff";
      tagStyle.background = "bluevoilet";
      break;
    case "weeklyretro":
      tagStyle.color = "#fff";
      tagStyle.background = "purple";
      break;
  }
  return tagStyle;
}
function Card({ user }) {
  const dummyImage =
    "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";

  return (
    <div className="post-card">
      <header>
        <img
          className="img-container"
          src={user.cover_image || dummyImage}
          alt={user.title}
        />
      </header>
      <main>
        <div className="details">
          <div className="profile">
            <img
              src={user.user.profile_image}
              alt={user.user.username}
              className="profile-img"
            />
          </div>
          <h2 className="title">{user.title}</h2>
        </div>
        <a href={user.url}>
          <div className="content">{user.description}</div>
        </a>
        <footer id="card-footer">
          <div id="tags">
            {user.tag_list.map((tagName) => (
              <span
                key={tagName}
                style={colorifyTag(tagName)}
              >{`#${tagName}`}</span>
            ))}
          </div>
          <div className="timestamp">
            {window.Intl.DateTimeFormat("en-GB").format(
              new Date(user.published_timestamp)
            )}
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Card;
