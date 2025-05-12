import { useContext } from "react";

import Nome from "../Nome";
import { UserContext } from "../../contexts/user";
export default function Aluno() {
  const { qtdAlunos } = useContext(UserContext);
  return (
    <div>
      <h3>Quantidade de alunos : {qtdAlunos}</h3>
      <hr />
      <Nome />
    </div>
  );
}
