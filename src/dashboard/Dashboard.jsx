import { Link } from "react-router-dom";

export default function Dashboard() {
    return <>
        <h3 className='title has-text-centered'>Apps</h3>
        <Link to='/tjsp'>TJSP - Utilidades</Link>
        <Link to='/test'>Test Component</Link>
    </>;
}