import { Link } from "react-router-dom"

export function Home(){
    return (
        <div>
            <h1>Página Home</h1>
            <h2>Eita!!!!</h2>
            <Link to="/create">Ir para página CREATE</Link>
        </div>
    )
}