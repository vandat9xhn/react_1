import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';

//
CUPostFixChoice.propTypes = {};

//
function CUPostFixChoice({
    title,
    Icon,

    ix,
    is_active,
    has_sub,

    clickFixChoice,
}) {
    //
    function onClickFixChoice() {
        clickFixChoice(ix);
    }

    //
    return (
        <div
            className={`CUPostFixChoice padding-x-5px padding-y-10px brs-5px cursor-pointer ${
                is_active ? 'bg-fb-active' : 'hv-bg-hv'
            }`}
            onClick={onClickFixChoice}
        >
            <div className="display-flex align-items-center">
                <div className="margin-right-10px">{Icon}</div>

                <div className="flex-grow-1 flex-between-center">
                    <div>{title}</div>

                    {has_sub ? (
                        <div className="padding-right-10px">
                            <div
                                className={`${
                                    is_active ? 'rotate--90' : 'rotate-90'
                                }`}
                            >
                                <IconsArrow x={200} size_icon="15px" />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default CUPostFixChoice;
