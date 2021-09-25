import React from 'react';
import PropTypes from 'prop-types';
//
import IconPlusSubtract from '../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
import IconLike from '../../../../../_icons_svg/icons_like/icon_like/IconLike';
//
import StarsRate from '../../../../../component/stars_rate/_main/StarsRate';
//
import './PhoneDetailHead.scss';

//
PhoneDetailHead.propTypes = {};

//
function PhoneDetailHead({
    name,
    type,
    rating_avg,
    rating_count,
    count_like,

    addToCompare,
    goToRating,
    handleLike,
    handleShare,
}) {
    //
    return (
        <div className="PhoneDetailHead padding-y-10px border-bottom-blur font-13px">
            <div className="PhoneDetailHead_row flex-between-center">
                <div className="display-flex align-items-center">
                    <h1 className="font-700 font-18px">
                        <span>{name}</span>

                        {type ? (
                            <span className="margin-left-5px">({type})</span>
                        ) : null}
                    </h1>

                    {rating_avg ? (
                        <React.Fragment>
                            <div className="margin-left-10px">
                                <StarsRate
                                    rate_avg={rating_avg}
                                    size_icon="13px"
                                    color="var(--border-fashion)"
                                />
                            </div>

                            <div
                                className="margin-left-10px text-blue cursor-pointer"
                                onClick={goToRating}
                            >
                                {rating_count} Đánh giá
                            </div>
                        </React.Fragment>
                    ) : null}

                    <div
                        className="margin-left-10px inline-flex align-items-center text-blue cursor-pointer"
                        onClick={addToCompare}
                    >
                        <div className="PhoneDetailHead_compare_icon display-flex-center brs-50 border-blue">
                            <IconPlusSubtract
                                size_icon="13px"
                                stroke="currentColor"
                                stroke_width="10"
                            />
                        </div>

                        <div className="margin-left-5px">So sánh</div>
                    </div>
                </div>

                <div className="display-flex align-items-center">
                    {[
                        {
                            title: `Like ${count_like}`,
                            Icon: (
                                <IconLike
                                    size_icon="11px"
                                    stroke="none"
                                    fill="var(--white)"
                                />
                            ),
                            onClick: handleLike,
                        },
                        {
                            title: 'Share',
                            Icon: null,
                            onClick: handleShare,
                        },
                    ].map((item, ix) => (
                        <button
                            key={ix}
                            className="inline-flex align-items-center btn btn-active margin-left-10px padding-x-5px padding-y-2px brs-3px bg-blue text-white font-11px cursor-pointer"
                            type="button"
                            onClick={item.onClick}
                        >
                            {item.Icon}

                            <span>{item.title}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PhoneDetailHead;
