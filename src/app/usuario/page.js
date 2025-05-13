import db from "@/lib/db"
import React from "react";

export default async function App() {
    const alunos = await db.query("SELECT * FROM usuario")
 return (<>
    <h1>Lista de alunos</h1>
    <div>
      {
         alunos.rows.map( 
            a => (
               <div>
                  {a.nome} faz parte do projeto
               </div>
            ) 
         )
      }
   </div>
 </>);
}