import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import { useScrollToX } from '../../../../../../../_hooks/useScrollToX';
//
import { openScreenVidPic } from '../../../../../../../component/_screen/type/vid_pics/_main/ZoomVidPics';
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
    const { openScreenFloor } = useContext(context_api);
    const { item_info, shop_info, vid_pic_ix, tier_ix_arr } =
        useContext(context_fashion_item);

    const { vid_pics, tier_variations } = item_info;

    //
    const ref_scroll_elm = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX({
            ref_scroll_elm: ref_scroll_elm,
            getItemElm: () =>
                ref_scroll_elm.current.getElementsByClassName(
                    'FashionIIfLFoot_item'
                )[0],
        });

    //
    useEffect(() => {
        hasNextPrev();
    }, []);

    //
    function handleZoom(ix = 0) {
        openScreenVidPic({
            openScreenFloor: openScreenFloor,
            urls: item_info.vid_pics,
            current: ix,
        });
    }

    //
    function onZoom() {
        handleZoom(vid_pic_ix);
    }

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
                onClick={IS_MOBILE ? onZoom : undefined}
            ></div>

            <div className="FashionItemInfoLeft_foot pos-rel margin-bottom-16px">
                <FashionIIfLFoot
                    ref_scroll_elm={ref_scroll_elm}
                    handleZoom={handleZoom}
                />

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
