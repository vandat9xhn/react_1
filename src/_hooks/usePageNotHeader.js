import { useLayoutEffect } from 'react';
//
import { body_elm } from '../_initial/htm_elm/html_elm';

//
export function usePageNotHeader() {
    //
    useLayoutEffect(() => {
        //
        const body = body_elm;

        const not_header_count = +(body.dataset.pageNotHeader || 0) + 1;
        body.dataset.pageNotHeader = not_header_count;

        return () => {
            body.dataset.pageNotHeader -= 1;

            if (body.dataset.pageNotHeader == 0) {
                body.removeAttribute('data-page-not-header');
            }
        };
    }, []);
}
