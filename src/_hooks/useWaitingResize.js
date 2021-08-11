import { useEffect } from 'react';
//
import { useWaitingLastAction } from './useWaitingLastAction';

//
export function useWaitingResize({ handleResize }) {
    //
    const { handleWaitingLastAction } = useWaitingLastAction({
        callback: handleResize,
    });

    useEffect(() => {
        window.addEventListener('resize', handleWaitingLastAction);

        return () => {
            window.removeEventListener('resize', handleWaitingLastAction);
        };
    }, []);
}
