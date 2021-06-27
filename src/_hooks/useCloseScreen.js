import { useEffect } from 'react';

//
export const useCloseScreen = (closeScreen = () => {}) => {
    //
    useEffect(() => {
        window.addEventListener('popstate', closeScreen);

        return () => {
            window.removeEventListener('popstate', closeScreen);
        };
    }, []);
};
