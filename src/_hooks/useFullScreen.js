import { useEffect } from 'react';
// 
import { exitFullscreen, requestFullscreen } from '../_some_function/handelFullScreen';

//
export const useFullScreen = () => {
    //
    useEffect(() => {
        requestFullscreen()

        return () => {
            exitFullscreen()
        };
    }, []);
};
