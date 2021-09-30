import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';
//
import './PLCompareItem.scss';

//
PLCompareItem.propTypes = {};

//
function PLCompareItem({ ix, name, img, removeCompareItem }) {
    //
    function onRemoveCompareItem() {
        removeCompareItem(ix);
    }

    //
    return (
        <div className="PLCompareItem">
            <div className="display-flex-center flex-col">
                <img
                    className="margin-5px object-fit-cover"
                    src={img}
                    alt=""
                    width="60"
                    height="60"
                />

                <h3 className="PLCompareItem_name wk-box-vertical line-clamp-2 font-13px font-400 overflow-hidden">
                    {name}
                </h3>
            </div>

            <div className="pos-abs right-0 top-0">
                <div className="cursor-pointer" onClick={onRemoveCompareItem}>
                    <IconsArrow y={400} size_icon="15px" />
                </div>
            </div>
        </div>
    );
}

export default PLCompareItem;
