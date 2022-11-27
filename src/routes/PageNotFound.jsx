import {Link} from "react-router-dom";

export default function PageNotFound() {
    return (
        <div>
            404 | Page not found. Want to return to the <Link to="/">MAIN?</Link>
        </div>
    )
}