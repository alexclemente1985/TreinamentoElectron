import { Link } from "react-router-dom"

export function Home(){
    async function handleAdd(){
       const response = await window.api.fetchUsers();
       console.log(response)
    }
    return (
        <div>
            <h1>Página Home</h1>
            <Link to="/create">Ir para página CREATE</Link>
            <br /><br />
            <button onClick={handleAdd}>Buscar Usuários</button>
        </div>
    )
}