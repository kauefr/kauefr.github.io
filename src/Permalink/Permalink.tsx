import { Navigate, useParams } from "react-router-dom";
import ExternalRedirect from "./ExternalRedirect";

export default function Permalink(): JSX.Element {
    let { permalinkId } = useParams();
    if (permalinkId == "XcQ") {
        return <ExternalRedirect url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
    }
    return <Navigate to="/" />;
}