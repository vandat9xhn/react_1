import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useInterval } from '../../../_custom_hooks/UseInterval';
//
import NextPrevDiv from '../../some_div/next_prev_div/NextPrevDiv';
//
import './Carousel.scss';
import CarouselItem from '../item/CarouselItem';

//
Carousel.propTypes = {
    vid_pics: PropTypes.array.isRequired,
};

//
function Carousel({ vid_pics }) {
    //
    const [vid_pic_ix, setVidPicIx] = useState(1);

    //
    const mounted = useRef(true);
    const btn_disable = useRef(false);
    const transition_none = useRef(false);
    const ref_count = useRef(vid_pics.length);

    //

    const { doSkipInterval } = useInterval({
        time: 6000,
        callback: handleAutoNext,
    });

    //
    useEffect(() => {
        return () => {
            mounted.current = false;
        };
    }, []);

    useEffect(() => {
        doSkipInterval();
        ref_count.current = vid_pics.length;
    }, [vid_pics]);

    /* --------------------- COMMON --------------------- */

    //
    function disableBtnNextPrev() {
        btn_disable.current = true;
        transition_none.current = false;

        setTimeout(() => {
            if (mounted.current) {
                btn_disable.current = false;
            }
        }, 600);
    }
    //
    function startNextPrev() {
        disableBtnNextPrev();
        doSkipInterval();
    }

    //
    function changeImgIxNext() {
        setVidPicIx((vid_pic_ix) => {
            if (vid_pic_ix == ref_count.current - 2) {
                setVidPicIx(ref_count.current - 1);
                //
                setTimeout(() => {
                    if (mounted.current) {
                        transition_none.current = true;
                        setVidPicIx(1);
                    }
                }, 501);
            } else if (vid_pic_ix < ref_count.current - 2) {
                setVidPicIx(vid_pic_ix + 1);
            }
        });
    }

    //
    function changeImgIxPrev() {
        setVidPicIx((vid_pic_ix) => {
            if (vid_pic_ix == 1) {
                setVidPicIx(0);
                //
                setTimeout(() => {
                    if (mounted.current) {
                        transition_none.current = true;
                        setVidPicIx(ref_count.current - 2);
                    }
                }, 501);
            } else if (vid_pic_ix > 1) {
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

        startNextPrev();
        changeImgIxNext();
    }

    //
    function handlePrev() {
        if (btn_disable.current) {
            return;
        }

        startNextPrev();
        changeImgIxPrev();
    }

    //
    function handleAutoNext() {
        if (btn_disable.current) {
            return;
        }

        disableBtnNextPrev();
        changeImgIxNext();
    }

    //
    return (
        <div className="Carousel position-rel wh-100">
            <div
                className={`Carousel_row position-rel display-flex ${
                    transition_none.current
                        ? 'Carousel_transition-none'
                        : 'Carousel_transition'
                }`}
                style={{
                    width: `${100 * vid_pics.length}%`,
                    transform: `translateX(-${
                        (vid_pic_ix * 100) / vid_pics.length
                    }%)`,
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
