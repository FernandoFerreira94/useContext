import { useContext } from "react";

import { UserContext } from "../../contexts/user";

export default function Footer() {
  const { qtdAlunos, novoAluno } = useContext(UserContext);

  return (
    <footer>
      <hr />
      <h4>Alunos online na plataforma : {qtdAlunos} </h4>
      <button onClick={() => novoAluno()}>Novo ALuno</button>
    </footer>
  );
}
