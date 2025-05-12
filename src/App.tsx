import { useContext, useState } from "react";
import { UserContext } from "./contexts/user";

import "./App.css";
import Aluno from "./componets/Aunos";
import Footer from "./componets/Footer";

function App() {
  const { mudarNome } = useContext(UserContext);
  const [novoNome, setNovoNome] = useState("");

  function handleMudaNome() {
    mudarNome(novoNome);
    setNovoNome("");
  }

  return (
    <>
      <div>
        <h1>Escola Dev</h1>
      </div>
      <hr />
      <Aluno />

      <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleMudaNome}>Mudar Nome</button>

      <Footer />
    </>
  );
}

export default App;
