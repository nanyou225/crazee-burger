import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderPage from "./components/OrderPage";
import LoginPage from "./components/pages/login/LoginPage";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<LoginPage />} exact />
            <Route path="/OrderPage/" element={<OrderPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

// *Gestion de formulaire*

// 1-Création du formulaire
// 2-Soumission du formailre (onSubmit / handleSubmit)
// 3-collect des données
// (sync descendante/ascendeante (onChange / handleChange))
