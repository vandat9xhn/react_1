import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';
// 
import { formatLocalDateTimeString } from '../../../../../../../../_some_function/FormatDate';
//
import { handle_API_FashionContentRateMore_R } from '../../../../../../../../_handle_api/fashion/FashionItemRateHandleAPI';
//
import { useForceUpdate } from '../../../../../../../../_hooks/UseForceUpdate';
// 
import StarsRate from '../../../../../../../../component/stars_rate/_main/StarsRate';
import ContentMore from '../../../../../../../../component/content_more/Content_more';
//
import FashionRateVidPic from '../vid_pic/_main/FashionRateVidPic';
import FsRateSellerReply from '../seller_reply/FsRateSellerReply';
import FsRateIsGood from '../is_good/FsRateIsGood';
//
import './FashionRateItem.scss';

//
FashionRateItem.propTypes = {
    ix: PropTypes.number,
    item: PropTypes.object,
};

//
function FashionRateItem({ ix, item }) {
    //
    const {
        id,
        user,

        rate,
        content_obj,
        vid_pics,

        model_name,
        count_like,
        user_liked,
        seller_reply,
        // vid_pic_count,
        created_time,
    } = item;

    //
    const forceUpdate = useForceUpdate();

    //
    function on_API_FashionContentComment_R() {
        return handle_API_FashionContentRateMore_R({ rate_model: id });
    }

    //
    function handleLikeRate() {
        if (user_liked) {
            item.user_liked = false;
            item.count_like -= 1;
        } else {
            item.user_liked = true;
            item.count_like += 1;
        }

        forceUpdate();
    }

    //
    return (
        <div className="FashionRateItem">
            <div className="display-flex">
                <div className="FashionRateItem_left flex-shrink-0">
                    <div className="FashionRateItem_left_contain pos-rel">
                        <Link to={`/profile/${user.id}`}>
                            <img
                                className="pos-abs-0 wh-100 brs-50 object-fit-cover"
                                src={user.picture}
                                alt=""
                            />
                        </Link>
                    </div>
                </div>

                <div className="flex-grow-1 font-14px">
                    <div className="font-12px">
                        {user.first_name} {user.last_name}
                    </div>

                    <div>
                        <StarsRate
                            rate_avg={rate}
                            size_icon="14px"
                            color="var(--fashion-head)"
                        />
                    </div>

                    {model_name ? (
                        <div
                            className={`text-third ${
                                IS_MOBILE ? 'font-12px' : ''
                            }`}
                        >
                            Phân loại hàng: {model_name}
                        </div>
                    ) : null}

                    <div className="FashionRateItem_text">
                        <ContentMore
                            content_obj={content_obj}
                            seeMoreContent={on_API_FashionContentComment_R}
                        />
                    </div>

                    <div className="margin-bottom-16px">
                        <FashionRateVidPic vid_pics={vid_pics} />
                    </div>

                    <div
                        className={`margin-bottom-16px text-third ${
                            IS_MOBILE ? 'font-12px' : ''
                        }`}
                    >
                        {formatLocalDateTimeString(new Date(created_time))}
                    </div>

                    <div className="margin-bottom-16px">
                        <FsRateSellerReply seller_reply={seller_reply} />
                    </div>

                    <div>
                        <FsRateIsGood
                            count_like={count_like}
                            user_liked={user_liked}
                            handleLikeRate={handleLikeRate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionRateItem;
