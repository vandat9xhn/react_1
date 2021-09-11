import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import FsSProductsSortItemMb from '../item/FsSProductsSortItemMb';
//
import './FsSProductsSortMb.scss';

//
FsSProductsSortMb.propTypes = {};

//
function FsSProductsSortMb({
    sort_arr,
    sort_ix,
    sort_price_ix,

    handleSort,
    handleSortPrice,
}) {
    //
    return (
        <div className="FsSProductsSortMb bg-primary font-14px">
            <div className="display-flex">
                {sort_arr.map((name, ix) => (
                    <div
                        key={ix}
                        className={`FsSProductsSortMb_item flex-grow-1 display-flex-center padding-y-10px ${
                            sort_ix == ix
                                ? 'FsSProductsSortMb_item-active color-fashion'
                                : ''
                        }`}
                    >
                        <FsSProductsSortItemMb
                            name={name}
                            is_active={sort_ix == ix}
                            ix={ix}
                            handleSort={handleSort}
                        />
                    </div>
                ))}

                <div
                    className={`FsSProductsSortMb_item flex-grow-1 display-flex-center padding-y-10px line-14px ${
                        sort_price_ix >= 0
                            ? 'FsSProductsSortMb_item-active color-fashion'
                            : ''
                    }`}
                    onClick={handleSortPrice}
                >
                    <div className="margin-right-5px">Giá</div>

                    <div
                        className={`${
                            sort_price_ix == 0
                                ? 'rotate--90'
                                : sort_price_ix == 1
                                ? 'rotate-90'
                                : ''
                        }`}
                    >
                        <IconsArrow x={200} size_icon="0.5rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsSProductsSortMb;
