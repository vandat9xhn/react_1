import { useEffect } from 'react';
//
import { useWaitingLastAction } from './useWaitingLastAction';

//
export function useWaitingResize({
    handleResize = () => {},
    time_waiting = 200,
}) {
    //
    const { handleWaitingLastAction } = useWaitingLastAction({
        callback: handleResize,
        time_waiting: time_waiting,
    });

    useEffect(() => {
        window.addEventListener('resize', handleWaitingLastAction);

        return () => {
            window.removeEventListener('resize', handleWaitingLastAction);
        };
    }, []);
}
