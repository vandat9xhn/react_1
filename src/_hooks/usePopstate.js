import { useEffect } from 'react';

//
export function usePopstate(handlePopstate = () => {}) {
    //
    useEffect(() => {
        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);
}
