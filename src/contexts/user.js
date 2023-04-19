import { useState, createContext } from 'react';

export const UserContext = createContext({}); //criou o UserContext, deu um export sem o default para poder exportar ele separado

function UserProvider({children}){ //criamos um componente UserProvider em função
  const [alunos, setAlunos] = useState('Sujeito Programador');
  const [qtdAlunos, setQtdAlunos] = useState(85); 
  
  return(
        <UserContext.Provider value={{ alunos, setAlunos, qtdAlunos }}> {/** essa tag é quem vai espalhar nosso contexto, repassando o que a gente colocar dentro dele */} 
            {children} {/** aqui repassou pro filho que estiver dentro dele  */}
        </UserContext.Provider>
  )
}

export default UserProvider; // e exportamos ele aqui.