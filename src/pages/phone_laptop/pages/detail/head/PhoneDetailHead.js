import React from 'react';
import PropTypes from 'prop-types';
//
import IconLike from '../../../../../_icons_svg/icons_like/icon_like/IconLike';
//
import PLProductCompare from '../../../../../component/pl_product/compare/PLProductCompare';
import StarsRate from '../../../../../component/stars_rate/_main/StarsRate';
//
import './PhoneDetailHead.scss';

//
PhoneDetailHead.propTypes = {};

//
function PhoneDetailHead({
    id,
    name,
    img,
    product_type,
    type,

    rating_avg,
    rating_count,
    count_like,

    goToRating,
    handleLike,
    handleShare,
}) {
    //
    return (
        <div className="PhoneDetailHead padding-y-10px border-bottom-blur font-13px">
            <div className="PhoneDetailHead_row flex-between-center">
                <div className="PhoneDetailHead_left display-flex align-items-center">
                    <h1 className="PhoneDetailHead_name margin-right-10px font-700 font-18px">
                        <span>{name}</span>

                        {type ? (
                            <span className="margin-left-5px">({type})</span>
                        ) : null}
                    </h1>

                    <div className="PhoneDetailHead_rate_compare display-flex align-items-center">
                        {rating_avg ? (
                            <React.Fragment>
                                <div>
                                    <StarsRate
                                        rate_avg={rating_avg}
                                        size_icon="13px"
                                        color="var(--border-fashion)"
                                    />
                                </div>

                                <div
                                    className="margin-left-5px text-blue cursor-pointer"
                                    onClick={goToRating}
                                >
                                    {rating_count} Đánh giá
                                </div>
                            </React.Fragment>
                        ) : null}

                        <div className="PhoneDetailHead_compare margin-left-10px inline-block">
                            <PLProductCompare
                                id={id}
                                name={name}
                                img={img}
                                product_type={product_type}
                            />
                        </div>
                    </div>
                </div>

                <div className="display-flex align-items-center">
                    <button
                        className="PhoneDetailHead_like_share inline-flex align-items-center btn btn-active margin-right-10px padding-x-5px padding-y-2px brs-3px bg-blue text-white font-11px cursor-pointer"
                        type="button"
                        onClick={handleLike}
                    >
                        <IconLike
                            size_icon="14px"
                            stroke="none"
                            fill="var(--white)"
                        />

                        <span className="margin-left-3px">
                            Like {count_like}
                        </span>
                    </button>

                    <button
                        className="PhoneDetailHead_like_share inline-flex align-items-center btn btn-active padding-x-5px padding-y-2px brs-3px bg-blue text-white font-11px cursor-pointer"
                        type="button"
                        onClick={handleShare}
                    >
                        <span>Share</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PhoneDetailHead;
