import { useEffect, useState } from "react"

/**
 * Deprecated
*/
export function useMounted(){
    // 
    const [mounted, setMounted] = useState(true)

    //
    useEffect(() => {

        return () => {
            setMounted(false)
        }
    }, [])

    return mounted
}