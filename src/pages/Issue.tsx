import { useParams } from "react-router-dom";

export default function Issue() {
  const { id } = useParams();
  return <h2>🐞 Issue {id}</h2>;
}
