import {useFetching} from "../redux/hooks/useFetching";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function CustomRenderer({request, selector, children}) {
   const {status, error} = useFetching(request(), selector);
   const navigate = useNavigate();

    useEffect(() => {
        if (children === undefined && status) {
            navigate("/pageNotFound");
        }
    })

   return (
        !status ? <div>Loading...</div> : error !== null ? <div>Errors.</div> :
            <div>
                {children}
            </div>
    )
}