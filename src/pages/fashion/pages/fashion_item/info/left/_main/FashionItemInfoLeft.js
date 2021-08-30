import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
//
import { useScrollToX } from '../../../../../../../_hooks/useScrollToX';
//
import NextPrevDiv from '../../../../../../../component/some_div/next_prev_div/NextPrevDiv';
//
import FashionIIfLFoot from '../foot/_main/FashionIIfLFoot';
import FsIIfLShareLike from '../share_like/FsIIfLShareLike';
//
import './FashionItemInfoLeft.scss';

//
FashionItemInfoLeft.propTypes = {};

//
function FashionItemInfoLeft({}) {
    //
    const { item_info, shop_info, vid_pic_ix, tier_ix_arr } =
        useContext(context_fashion_item);

    const { vid_pics, tier_variations } = item_info;

    //
    const ref_scroll_elm = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX(ref_scroll_elm);

    //
    useEffect(() => {
        hasNextPrev();
    }, []);

    //
    return (
        <div className="FashionItemInfoLeft">
            <div
                className="FashionItemInfoLeft_head pos-rel"
                style={{
                    backgroundImage: `url(${
                        tier_ix_arr[0] >= 0
                            ? tier_variations[0].vid_pics[tier_ix_arr[0]]
                            : vid_pics[vid_pic_ix]
                    })`,
                }}
            ></div>

            <div className="FashionItemInfoLeft_foot pos-rel margin-bottom-16px">
                <div
                    ref={ref_scroll_elm}
                    className="FashionItemInfoLeft_foot_contain overflow-x-auto scroll-height-0"
                >
                    <FashionIIfLFoot />
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

            <div className="padding-y-8px font-16px">
                <FsIIfLShareLike count_like={shop_info.count_like} />
            </div>
        </div>
    );
}

export default FashionItemInfoLeft;
