import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import CheckBoxCustom from '../../../../../../../component/input/checkbox_custom/CheckBoxCustom';

//
FsHDItemFoot.propTypes = {};

//
function FsHDItemFoot({
    model_name,
    old_price,
    new_price,

    use_checked,
    checked,

    handleChangeChecked,
    handleToggleChangeModel,
}) {
    //
    return (
        <div className="FsHDItemFoot">
            <div className="FsHotDealItem_foot_check display-flex align-items-center">
                <div
                    className={`${
                        use_checked ? '' : 'pointer-events-none opacity-05'
                    }`}
                >
                    <CheckBoxCustom
                        checked={checked}
                        title=""
                        handleChangeChecked={handleChangeChecked}
                    />
                </div>

                <div
                    className="FsHotDealItem_foot_check_right flex-between-center cursor-pointer"
                    onClick={handleToggleChangeModel}
                >
                    <div className="FsHotDealItem_model_name FsHotDealItem_name overflow-hidden">
                        <span className="font-14px text-third">
                            {model_name}
                        </span>
                    </div>

                    <div className="FsHotDealItem_model_arrow margin-left-5px">
                        <IconsArrow y={200} size_icon="0.5rem" />
                    </div>
                </div>
            </div>

            <div className="font-14px">
                {old_price ? (
                    <del className="margin-right-5px text-third">
                        ₫{formatNum(old_price)}
                    </del>
                ) : null}

                <span className="color-fashion">₫{formatNum(new_price)}</span>
            </div>
        </div>
    );
}

export default FsHDItemFoot;
