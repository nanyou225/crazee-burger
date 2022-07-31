import LoginForm from "../login/LoginForm";

export default function LoginPage() {
  //comportement

  //Affichage(render)
  return (
    <div>
      <h1>CRAZEE BURGER</h1>
      <hr />
      <h2>Bienvenu chez nous</h2>
      <h3>Connectez-vous</h3>
      <LoginForm />
    </div>
  );
}
