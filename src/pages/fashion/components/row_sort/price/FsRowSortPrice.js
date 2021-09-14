import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../_hooks/useBool';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import CloseDiv from '../../../../../component/some_div/close_div/CloseDiv';
//
import './FsRowSortPrice.scss';

//
FsRowSortPrice.propTypes = {
    sort_price_ix: PropTypes.number,
};

//
function FsRowSortPrice({ sort_price_arr, sort_price_ix, handleSortPrice }) {
    //
    const { is_true, toggleBool } = useBool();

    //
    function makeDivHidden() {
        is_true && toggleBool();
    }

    //
    return (
        <CloseDiv makeDivHidden={makeDivHidden}>
            <div className="FsRowSortPrice pos-rel" onClick={toggleBool}>
                <div
                    className={`FsRowSortPrice_title padding-x-10px padding-y-5px brs-4px bg-primary cursor-pointer ${
                        sort_price_ix >= 0 ? 'color-fashion' : ''
                    }`}
                >
                    <div className="flex-between-center">
                        <div>
                            {sort_price_ix <= -1
                                ? 'Giá'
                                : sort_price_arr[sort_price_ix]}
                        </div>

                        <div className="rotate-90">
                            <IconsArrow x={200} size_icon="10px" />
                        </div>
                    </div>
                </div>

                <div
                    className={`pos-abs top-100per left-0 z-index-lv1 w-100per padding-top-1px ${
                        is_true ? '' : 'display-none'
                    }`}
                >
                    <div className="bg-primary box-shadow-1">
                        {sort_price_arr.map((item, ix) => (
                            <div
                                key={ix}
                                className={`padding-x-10px padding-y-8px cursor-pointer ${
                                    sort_price_ix == ix
                                        ? 'color-fashion'
                                        : 'hv-bg-hv'
                                }`}
                                onClick={() => handleSortPrice(ix)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default FsRowSortPrice;
