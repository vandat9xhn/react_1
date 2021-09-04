import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import CheckBoxCustom from '../../../../../../../component/input/checkbox_custom/CheckBoxCustom';
import IconDown from '../../../../../../../_icons_svg/_icon_down/IconDown';

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
            <div className="FsHDItemFoot_check display-flex align-items-center margin-top-10px margin-bottom-10px">
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
                    className="FsHDItemFoot_check_right flex-between-center cursor-pointer"
                    onClick={handleToggleChangeModel}
                >
                    <div className="FsHDItemFoot_model wk-box-vertical line-clamp-1 line-17px text-upper text-third overflow-hidden">
                        <span className="font-14px">{model_name}</span>
                    </div>

                    <div className="margin-left-5px">
                        <IconDown size_icon="0.5rem" color="var(--del)" />
                    </div>
                </div>
            </div>

            <div className="font-14px text-third">
                {old_price ? (
                    <del className="margin-right-5px">
                        ₫{formatNum(old_price)}
                    </del>
                ) : null}

                <span className="color-fashion">₫{formatNum(new_price)}</span>
            </div>
        </div>
    );
}

export default FsHDItemFoot;
