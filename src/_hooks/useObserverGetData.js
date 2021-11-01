import { useEffect, useRef } from 'react';

//
export function useObserverGetData({
    getData_API = () => new Promise(),
    getIsMax = () => false,
    getIsFetching = () => false,

    unobserve_when_max = true,
}) {
    //
    const ref_fake_elm_end = useRef(null);
    const ref_margin = useRef(0);
    const ref_handle_scroll = useRef(null);

    //
    useEffect(() => {
        return () => {
            ref_handle_scroll.current &&
                window.removeEventListener('scroll', ref_handle_scroll.current);
        };
    }, []);

    //
    const observerShowMore = IntersectionObserver
        ? intersectShowMore
        : scrollShowMore;

    //
    function intersectShowMore({
        fake_elm_end,
        root = document,
        rootMargin = '0px 0px',
    }) {
        const observe = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    if (getIsMax()) {
                        unobserve_when_max && observe.unobserve(entry.target);
                        return;
                    }

                    if (!getIsFetching()) {
                        getData_API();
                    }
                });
            },
            {
                root: root,
                rootMargin: rootMargin,
            }
        );

        observe.observe(fake_elm_end);
    }

    //
    function scrollShowMore({
        fake_elm_end,
        root = window,
        way_scroll = 'to_bottom' || 'to_right' || 'to_top' || 'to_left',
        margin = 0,
    }) {
        if (root == window) {
            ref_fake_elm_end.current = fake_elm_end;
            ref_margin.current = margin;
            ref_handle_scroll.current = [
                handleWindowScrollDown,
                handleWindowScrollRight,
                handleWindowScrollUp,
                handleWindowScrollLeft,
            ][
                ['to_bottom', 'to_right', 'to_top', 'to_left'].indexOf(
                    way_scroll
                )
            ];

            window.addEventListener('scroll', ref_handle_scroll.current);
        } else {
            root.onscroll = () =>
                [
                    handleScrollDown,
                    handleScrollRight,
                    handleScrollUp,
                    handleScrollLeft,
                ][
                    ['to_bottom', 'to_right', 'to_top', 'to_left'].indexOf(
                        way_scroll
                    )
                ](root, fake_elm_end, margin);
        }
    }

    //
    function handleScrollGetAPI(root = window) {
        if (getIsMax()) {
            root == window
                ? window.removeEventListener(
                      'scroll',
                      ref_handle_scroll.current
                  )
                : (root.onscroll = null);

            return;
        }

        getData_API();
    }

    /* --------- ELM ---------- */

    //
    function handleScrollDown(root, fake_elm_end, margin) {
        if (
            root.getBoundingClientRect().bottom + margin >=
            fake_elm_end.getBoundingClientRect().top
        ) {
            handleScrollGetAPI(root);
        }
    }

    //
    function handleScrollRight(root, fake_elm_end, margin) {
        if (
            root.getBoundingClientRect().right + margin >=
            fake_elm_end.getBoundingClientRect().left
        ) {
            handleScrollGetAPI(root);
        }
    }

    //
    function handleScrollUp(root, fake_elm_end, margin) {
        if (
            fake_elm_end.getBoundingClientRect().bottom + margin >=
            root.getBoundingClientRect().top
        ) {
            handleScrollGetAPI(root);
        }
    }

    //
    function handleScrollLeft(root, fake_elm_end, margin) {
        if (
            fake_elm_end.getBoundingClientRect().right + margin >=
            root.getBoundingClientRect().left
        ) {
            handleScrollGetAPI(root);
        }
    }

    /* ------ WINDOW ------- */

    //
    function handleWindowScrollDown() {
        if (
            ref_fake_elm_end.current.getBoundingClientRect().top &&
            innerHeight + ref_margin.current >=
                ref_fake_elm_end.current.getBoundingClientRect().top
        ) {
            handleScrollGetAPI();
        }
    }

    //
    function handleWindowScrollRight() {
        if (
            ref_fake_elm_end.current.getBoundingClientRect().top &&
            innerWidth + ref_margin.current >=
                ref_fake_elm_end.current.getBoundingClientRect().left
        ) {
            handleScrollGetAPI();
        }
    }

    //
    function handleWindowScrollUp() {
        if (
            ref_fake_elm_end.current.getBoundingClientRect().top &&
            ref_fake_elm_end.current.getBoundingClientRect().bottom +
                ref_margin.current >=
                0
        ) {
            handleScrollGetAPI();
        }
    }

    //
    function handleWindowScrollLeft() {
        if (
            ref_fake_elm_end.current.getBoundingClientRect().top &&
            ref_fake_elm_end.current.getBoundingClientRect().right +
                ref_margin.current >=
                0
        ) {
            handleScrollGetAPI();
        }
    }

    //
    return {
        observerShowMore,
    };
}
