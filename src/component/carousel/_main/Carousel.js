import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import { observerDisplay } from '../../../_some_function/observerDisplay';
//
import { useInterval } from '../../../_hooks/UseInterval';
import { useMouseMoveX } from '../../../_hooks/useMouseMoveX';
import { useForceUpdate } from '../../../_hooks/UseForceUpdate';
//
import NextPrevDiv from '../../some_div/next_prev_div/NextPrevDiv';
//
import CarouselItem from '../item/_main/CarouselItem';
import CarouselDot from '../dot/CarouselDot';
//
import './Carousel.scss';

//
Carousel.propTypes = {
    vid_pics: PropTypes.array,
    link_to_arr: PropTypes.array,
    has_fetched: PropTypes.bool,
    time_interval: PropTypes.number,
    time_trans: PropTypes.number,

    disabled_btn_when_trans: PropTypes.bool,
    time_disabled_btn: PropTypes.number,
    is_btn_circle: PropTypes.bool,

    use_next_prev: PropTypes.bool,
};

Carousel.defaultProps = {
    link_to_arr: [],
    has_fetched: false,
    time_interval: 6000,
    time_trans: 300,

    disabled_btn_when_trans: true,
    time_disabled_btn: 100,

    use_next_prev: true,
};

//
function Carousel({
    vid_pics,
    link_to_arr,
    has_fetched,
    time_interval,
    time_trans,

    disabled_btn_when_trans,
    time_disabled_btn,
    is_btn_circle,

    use_next_prev,
}) {
    //
    const [extra_trans_x, setExtraTransX] = useState(0);

    //
    const ref_carousel_elm = useRef(null);

    const mounted = useRef(true);
    const btn_disable = useRef(false);
    const transition_none = useRef(true);

    const ref_vid_pic_ix = useRef(1);
    const ref_count = useRef(vid_pics.length);

    //
    const { doSkipInterval, stopInterval } = useInterval({
        time: time_interval,
        callback: handleAutoNext,
    });

    const { handleStart, handleMove, handleEnd } = useMouseMoveX({
        handleMouseDown: handleTouchStart,
        handleMouseMove: handleTouchMove,
        handleMouseEnd: handleTouchEnd,
    });

    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        observerDisplay({
            elm: ref_carousel_elm.current,
            callbackDisplay: () => stopInterval(false),
            callbackNoDisplay: () => stopInterval(true),
        });

        return () => {
            mounted.current = false;
        };
    }, []);

    useEffect(() => {
        if (has_fetched) {
            ref_count.current = vid_pics.length;
            transition_none.current = false;
            stopInterval(false);

            setTimeout(() => {
                forceUpdate();
            }, 0);
        } else {
            stopInterval(true);
        }
    }, [has_fetched]);

    /* --------------- COMMON ------------- */

    //
    function handleWhenNextPrev(is_last = false) {
        btn_disable.current = true;
        transition_none.current = false;

        setTimeout(
            () => {
                if (mounted.current) {
                    btn_disable.current = false;
                }
            },
            disabled_btn_when_trans || is_last ? time_trans : time_disabled_btn
        );
    }

    //
    function changeImgIxNext() {
        handleWhenNextPrev(true);
        ref_vid_pic_ix.current += 1;
        forceUpdate();

        if (ref_vid_pic_ix.current == ref_count.current - 1) {
            setTimeout(() => {
                if (mounted.current) {
                    ref_vid_pic_ix.current = 1;
                    transition_none.current = true;
                    forceUpdate();
                }
            }, time_trans);
        }
    }

    //
    function changeImgIxPrev() {
        handleWhenNextPrev(true);
        ref_vid_pic_ix.current -= 1;
        forceUpdate();

        if (ref_vid_pic_ix.current == 0) {
            setTimeout(() => {
                if (mounted.current) {
                    ref_vid_pic_ix.current = ref_count.current - 2;
                    transition_none.current = true;
                    forceUpdate();
                }
            }, time_trans);
        }
    }

    /* -------- NEXT PREV -------- */

    //
    function handleNext() {
        if (btn_disable.current) {
            return;
        }

        doSkipInterval();
        changeImgIxNext();
    }

    //
    function handlePrev() {
        if (btn_disable.current) {
            return;
        }

        doSkipInterval();
        changeImgIxPrev();
    }

    //
    function handleAutoNext() {
        if (btn_disable.current) {
            return;
        }

        changeImgIxNext();
    }

    /* --- TOUCH --- */

    //
    function handleTouchStart() {
        stopInterval(true);
        transition_none.current = true;
        doSkipInterval();
    }

    //
    function handleTouchMove(client_change) {
        setExtraTransX((extra_trans_x) => {
            return extra_trans_x + client_change;
        });
    }

    //
    function handleTouchEnd() {
        const ratio_trans_x =
            -extra_trans_x / ref_carousel_elm.current.clientWidth;

        if (ratio_trans_x >= 0.3) {
            handleNext();
        } else if (ratio_trans_x <= -0.3) {
            handlePrev();
        }

        transition_none.current = false;
        setExtraTransX(0);
        stopInterval(false);
    }

    //
    return (
        <div
            ref={ref_carousel_elm}
            className="Carousel pos-rel wh-100 overflow-hidden"
        >
            <div
                className="Carousel_row pos-rel display-flex h-100per"
                style={{
                    width: `${100 * vid_pics.length}%`,
                    transform: `translateX(-${
                        (ref_vid_pic_ix.current * 100) / vid_pics.length
                    }%) translateX(${extra_trans_x}px)`,
                    transition: transition_none.current
                        ? undefined
                        : `all ${time_trans}ms`,
                }}
                onTouchStart={IS_MOBILE ? handleStart : undefined}
                onTouchMove={IS_MOBILE ? handleMove : undefined}
                onTouchEnd={IS_MOBILE ? handleEnd : undefined}
            >
                {vid_pics.map((vid_pic, ix) => (
                    <CarouselItem
                        key={`${ix}`}
                        vid_pic_ix={ref_vid_pic_ix.current}
                        vid_pic={vid_pic}
                        width_vid_pic={`${100 / vid_pics.length}%`}
                        link_to={(link_to_arr.length && link_to_arr[ix]) || ''}
                        stopInterval={stopInterval}
                    />
                ))}
            </div>

            <div
                className={`pos-abs bottom-0 x-center padding-8px pointer-events-none ${
                    has_fetched ? '' : 'display-none'
                }`}
            >
                <CarouselDot
                    count={ref_count.current - 2}
                    active_ix={
                        ref_vid_pic_ix.current - 1 == ref_count.current - 1
                            ? 0
                            : ref_vid_pic_ix.current - 1
                    }
                />
            </div>

            {!use_next_prev || IS_MOBILE || !has_fetched ? null : (
                <NextPrevDiv
                    is_btn_circle={is_btn_circle}
                    size_icon="0.8rem"
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            )}
        </div>
    );
}

export default Carousel;
