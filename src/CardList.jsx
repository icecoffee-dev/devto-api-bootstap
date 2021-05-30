import Card from "./Card";

function CardList({ props }) {
  return props.map((user) => <Card user={user} key={user.id} />);
}

export default CardList;
