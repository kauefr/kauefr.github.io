import { useEffect } from "react";

type ExternalRedirectProps = {
    url?: string;
};

export default function ExternalRedirect({url}: ExternalRedirectProps): JSX.Element {
    useEffect(() => {
        window.location.href = url || "https://kaue.rodrigues.nom.br/#/";
    });
    return <></>;
}