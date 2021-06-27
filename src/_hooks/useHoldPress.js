import { useRef } from "react";

//
export function useHoldPress(time, callback=function(){}) {
    const stop_hold = useRef(true)
    //
    function StartHoldPress(){
        stop_hold.current = false
        let x = 0
        const interval = setInterval(() => {
            x++
            if(x == time){
                callback()
                clearInterval(interval)
            } else if(stop_hold.current){
                clearInterval(interval)
            }
        }, 100);
    }

    function StopHoldPress() {
        stop_hold.current = true
    }

    return [StartHoldPress, StopHoldPress]
}