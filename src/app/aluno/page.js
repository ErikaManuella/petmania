import db from "@/lib/db"
import React from "react";

export default async () => {
    const alunos = await db.query("select * from aluno")
 return (<>
    <h1>Lista de alunos</h1>
    <div>
      {
         alunos.rows.map( 
            a => (
               <div>
                  {a.name} faz parte do projeto {a.project}
               </div>
            ) 
         )
      }
   </div>
 </>);
}