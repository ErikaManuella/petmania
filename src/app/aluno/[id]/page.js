import db from "@/lib/db";

export default async ({params}) => {
    const {id} = await params;
    const aluno = await db.query(
        "select * from professor where id = "+id
    );
    return (
        <>
            <h1>Página do professor: 
                {aluno.rows[0].nome}
            </h1>
            <p>O professor é formado em  
                {aluno.rows[0].formacao}
            </p>
        </>
    )
}