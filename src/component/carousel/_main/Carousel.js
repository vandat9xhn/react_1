import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useInterval } from '../../../_hooks/UseInterval';
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
    const [vid_pic_ix, setVidPicIx] = useState(1);

    //
    const mounted = useRef(true);
    const btn_disable = useRef(false);
    const transition_none = useRef(true);
    const ref_count = useRef(vid_pics.length);

    //

    const { doSkipInterval, stopInterval } = useInterval({
        time: time_interval,
        callback: handleAutoNext,
    });

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
    function startNextPrev(is_last = false) {
        disableBtnNextPrev(is_last);
        doSkipInterval();
    }

    //
    function changeImgIxNext() {
        setVidPicIx((vid_pic_ix) => {
            if (vid_pic_ix == ref_count.current - 2) {
                disableBtnNextPrev(true);
                setVidPicIx(ref_count.current - 1);

                setTimeout(() => {
                    if (mounted.current) {
                        transition_none.current = true;
                        setVidPicIx(1);
                    }
                }, time_trans);
            } else if (vid_pic_ix < ref_count.current - 2) {
                disableBtnNextPrev();
                setVidPicIx(vid_pic_ix + 1);
            }
        });
    }

    //
    function changeImgIxPrev() {
        setVidPicIx((vid_pic_ix) => {
            if (vid_pic_ix == 1) {
                disableBtnNextPrev(true);
                setVidPicIx(0);

                setTimeout(() => {
                    if (mounted.current) {
                        transition_none.current = true;
                        setVidPicIx(ref_count.current - 2);
                    }
                }, time_trans);
            } else if (vid_pic_ix > 1) {
                disableBtnNextPrev()
                setVidPicIx(vid_pic_ix - 1);
            }
        });
    }

    /* ------------------------- NEXT PREV ----------------------- */

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

    //
    return (
        <div className="Carousel position-rel wh-100">
            <div
                className="Carousel_row position-rel display-flex"
                style={{
                    width: `${100 * vid_pics.length}%`,
                    transform: `translateX(-${
                        (vid_pic_ix * 100) / vid_pics.length
                    }%)`,
                    transition: transition_none.current
                        ? 'none'
                        : `transform ${time_trans}ms`,
                }}
            >
                {vid_pics.map((vid_pic, ix) => (
                    <CarouselItem
                        key={`Carousel_${ix}`}
                        vid_pic={vid_pic}
                        width_vid_pic={`${100 / vid_pics.length}%`}
                    />
                ))}
            </div>

            <NextPrevDiv
                is_btn_circle={true}
                size_icon="0.8rem"
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </div>
    );
}

export default Carousel;
