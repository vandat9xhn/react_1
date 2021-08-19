import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    CLASS_PC_OR_MOBILE,
    IS_MOBILE,
} from '../../../../../../_constant/Constant';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import {
    handle_API_FashionHomeMallVidPic_L,
    handle_API_FashionHomeMall_L,
} from '../../../../../../_handle_api/fashion/trend_mall_searching_home';
//
import { useDataShowMore } from '../../../../../../_hooks/useDataShowMore';
import { useScrollToX } from '../../../../../../_hooks/useScrollToX';
//
import NextPrevDiv from '../../../../../../component/some_div/next_prev_div/NextPrevDiv';
import Carousel from '../../../../../../component/carousel/_main/Carousel';
//
import FashionHMallHead from '../head/FashionHMallHead';
import FashionHMallRight from '../right/FashionHMallRight';
//
import './FashionHomeMall.scss';

//
FashionHomeMall.propTypes = {};

//
function FashionHomeMall(props) {
    //
    const [mall_vid_pic_arr, setMallVidPicArr] = useState([]);
    //
    const ref_main_elm = useRef(null);
    const ref_scroll_elm = useRef(null);

    //
    const { data_state, getData_API } = useDataShowMore({
        handle_API_L: handle_API_FashionHomeMall_L,
    });

    const { data_arr } = data_state;

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX(ref_scroll_elm);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () => {
                getData_MallVidPic();
                getData_API({
                    handleWhenFinally: handleWhenFinally,
                });
            },
        });
    }, []);

    //
    function handleWhenFinally() {
        hasNextPrev();
    }

    //
    async function getData_MallVidPic() {
        const { data } = await handle_API_FashionHomeMallVidPic_L();

        setMallVidPicArr([
            data.slice(-1)[0].vid_pic,
            ...data.map((item) => item.vid_pic),
            data[0].vid_pic,
        ]);
    }

    //
    return (
        <div ref={ref_main_elm} className="FashionHomeMall bg-primary">
            <div className="FashionHomeMall_head">
                <FashionHMallHead />
            </div>

            <div
                className={`FashionHomeMall_foot display-flex FashionHomeMall_foot${CLASS_PC_OR_MOBILE}`}
            >
                <div
                    className={`FashionHomeMall_foot_left flex-shrink-0 pos-rel FashionHomeMall_foot_left${CLASS_PC_OR_MOBILE}`}
                >
                    <div className="FashionHomeMall_foot_left_contain pos-abs-100 padding-4px">
                        <Carousel
                            use_next_prev={false}
                            vid_pics={
                                mall_vid_pic_arr.length > 0
                                    ? mall_vid_pic_arr
                                    : Array(3).fill('')
                            }
                            has_fetched={mall_vid_pic_arr.length > 0}
                        />
                    </div>
                </div>

                <div
                    className={`FashionHomeMall_foot_right pos-rel flex-grow-1 FashionHomeMall_foot_right${CLASS_PC_OR_MOBILE}`}
                >
                    <FashionHMallRight
                        ref_scroll_elm={ref_scroll_elm}
                        data_arr={data_arr}
                    />

                    {IS_MOBILE ? null : (
                        <NextPrevDiv
                            is_btn_circle={true}
                            is_has_next={is_has_next}
                            is_has_prev={is_has_prev}
                            size_icon="1.5rem"
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default FashionHomeMall;
