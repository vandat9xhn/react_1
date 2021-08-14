import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import { useInterval } from '../../../_hooks/UseInterval';
import { useMouseMoveX } from '../../../_hooks/useMouseMoveX';
import { useForceUpdate } from '../../../_hooks/UseForceUpdate';
//
import NextPrevDiv from '../../some_div/next_prev_div/NextPrevDiv';
//
import CarouselItem from '../item/CarouselItem';
//
import './Carousel.scss';

//
Carousel.propTypes = {
    vid_pics: PropTypes.array.isRequired,
    has_fetched: PropTypes.bool,
};

Carousel.defaultProps = {
    has_fetched: false,
};

//
function Carousel({
    vid_pics,
    has_fetched,
    time_interval = 6000,
    time_trans = 300,

    disabled_btn_when_trans = true,
    time_disabled_btn = 100,
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

    //
    const { handleStart, handleMove, handleEnd } = useMouseMoveX({
        handleMouseDown: handleTouchStart,
        handleMouseMove: handleTouchMove,
        handleMouseEnd: handleTouchEnd,
    });

    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        return () => {
            mounted.current = false;
        };
    }, []);

    useEffect(() => {
        ref_count.current = vid_pics.length;

        if (has_fetched) {
            transition_none.current = false;
            stopInterval(false);
        }
    }, [vid_pics]);

    /* --------------- COMMON ------------- */

    //
    function disableBtnNextPrev(is_last = false) {
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
        disableBtnNextPrev(true);
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
        disableBtnNextPrev(true);
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

        setExtraTransX(0);
        stopInterval(false);
    }

    //
    return (
        <div ref={ref_carousel_elm} className="Carousel pos-rel wh-100">
            <div
                className="Carousel_row pos-rel display-flex"
                style={{
                    width: `${100 * vid_pics.length}%`,
                    transform: `translateX(-${
                        (ref_vid_pic_ix.current * 100) / vid_pics.length
                    }%) translateX(${extra_trans_x}px)`,
                    transition: transition_none.current
                        ? 'none'
                        : `transform ${time_trans}ms`,
                }}
                onTouchStart={IS_MOBILE ? handleStart : undefined}
                onTouchMove={IS_MOBILE ? handleMove : undefined}
                onTouchEnd={IS_MOBILE ? handleEnd : undefined}
            >
                {vid_pics.map((vid_pic, ix) => (
                    <CarouselItem
                        key={`${ix}`}
                        vid_pic={vid_pic}
                        width_vid_pic={`${100 / vid_pics.length}%`}
                    />
                ))}
            </div>

            {IS_MOBILE ? null : (
                <NextPrevDiv
                    is_btn_circle={true}
                    size_icon="0.8rem"
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            )}
        </div>
    );
}

export default Carousel;
