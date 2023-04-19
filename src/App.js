import { useState } from 'react';
import Alunos from './component/Alunos';

import  UserProvider  from './contexts/user';

function App(){
  
  return(
    <UserProvider> {/** essa tag toda em volta do componente, passando em volta de todo mundo. */}
      <div>
        <h1> ESCOLA </h1>
        <hr/>

        <Alunos/>
      </div>
    </UserProvider> /** ele é um provedor, ele vai espalhar para todo mundo alguma coisa */
  )
}

export default App;



