import { useEffect } from "react";
import { useParams } from "react-router-dom";

//
export function useHeaderNotFixed() {
    //
    useParams();

    //
    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];

        if (/^\/(phone|fashion|short-video\/).*$/.test(location.pathname)) {
            body.dataset.headerNotFixedCount = 1;
        } else {
            body.removeAttribute("data-header-not-fixed-count");
        }
    }, [location.pathname]);
}
