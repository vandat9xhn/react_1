import { useState } from "react"


// 
export const useForceUpdate = () => {
    const [force_update, setForceUpdate] = useState(false)
    // 
    function forceUpdate(){
        setForceUpdate(!force_update)
    }

    return forceUpdate
}