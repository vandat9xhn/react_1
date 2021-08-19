import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
//
import { openScreenVidPic } from '../../../../../../../../component/_screen/type/vid_pics/_main/ZoomVidPics';
//
import { useScrollToX } from '../../../../../../../../_hooks/useScrollToX';
//
import NextPrevDiv from '../../../../../../../../component/some_div/next_prev_div/NextPrevDiv';
//
import FashionIIfLFoot from '../foot/_main/FashionIIfLFoot';
//
import image_loading from '../../../../../../../..../../../../image/image_loading.svg';
import './FashionItemInfoLeft.scss';

//
FashionItemInfoLeft.propTypes = {
    vid_pic_arr: PropTypes.arrayOf(PropTypes.string),
    has_fetched: PropTypes.bool,
};

//
function FashionItemInfoLeft({ vid_pic_arr, has_fetched }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const [active_ix, setActiveIx] = useState(0);

    //
    const ref_scroll_elm = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX(ref_scroll_elm);

    //
    useEffect(() => {
        has_fetched && hasNextPrev();
    }, [has_fetched]);

    //
    function handleChangeImage(new_active_ix) {
        new_active_ix != active_ix && setActiveIx(new_active_ix);
    }

    //
    function handleClickVidPic(ix) {
        openScreenVidPic({
            openScreenFloor: openScreenFloor,
            urls: vid_pic_arr,
            current: ix,
        });
    }

    //
    return (
        <div className="FashionItemInfoLeft">
            <div className="FashionItemInfoLeft_head pos-rel">
                <div className="pos-abs-100 brs-5px">
                    <img
                        className="wh-100"
                        src={
                            has_fetched ? vid_pic_arr[active_ix] : image_loading
                        }
                        alt=""
                    />
                </div>
            </div>

            <div className="FashionItemInfoLeft_foot pos-rel">
                <div
                    ref={ref_scroll_elm}
                    className="FashionItemInfoLeft_foot_contain overflow-x-auto scroll-height-0"
                >
                    <FashionIIfLFoot
                        vid_pic_arr={vid_pic_arr}
                        has_fetched={has_fetched}
                        active_ix={active_ix}
                        handleChangeImage={handleChangeImage}
                        handleClickVidPic={handleClickVidPic}
                    />
                </div>

                {IS_MOBILE ? null : (
                    <NextPrevDiv
                        is_has_next={is_has_next}
                        is_has_prev={is_has_prev}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                )}
            </div>
        </div>
    );
}

export default FashionItemInfoLeft;
