import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import OrderPage from "./components/OrderPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/OrderPage/" element={<OrderPage />} />
            <Route path="/LoginPage/" element={<LoginPage />} />
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
