import { Link, useSearchParams } from "react-router-dom";

export default function OrderPage() {
  const [searchParams] = useSearchParams();
  const newName = searchParams.get("newName");
  return (
    <div className="App-OrderPage">
      <h2>Page de Commande</h2>
      <h2>"Bonjour {newName}"</h2>
      <Link to="/">
        <button>Déconnection</button>
      </Link>
    </div>
  );
}
