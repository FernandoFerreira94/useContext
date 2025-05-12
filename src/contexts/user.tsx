import { createContext, useState } from "react";
import type { ReactNode } from "react";

type UserContextData = {
  aluno: string;
  qtdAlunos: number;
  mudarNome: (nome: string) => void;
  novoAluno: () => void;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

function UserProvider({ children }: UserProviderProps) {
  const [aluno, setAluno] = useState("Fernando Ferreira");
  const [qtdAlunos, setQtdAluno] = useState(40);

  function novoAluno() {
    setQtdAluno((alunos) => alunos + 1);
  }

  function mudarNome(nome: string) {
    setAluno(nome);
  }

  return (
    <UserContext.Provider value={{ aluno, qtdAlunos, mudarNome, novoAluno }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
