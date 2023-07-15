import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard(): JSX.Element {
    useEffect(() => { document.title = "kauefr's page" }, []);
    return <>
        <h1>kaue.rodrigues.nom.br</h1>
        <Link to="ssi">Seven Seas Idle</Link>
        <p>2023-07-14</p>
    </>
}