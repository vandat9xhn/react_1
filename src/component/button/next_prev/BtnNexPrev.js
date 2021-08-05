import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';

//
BtnNexPrev.propTypes = {
    is_next: PropTypes.bool,
    btn_class: PropTypes.string,
    size_icon: PropTypes.string,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func,
    btn_props: PropTypes.object,
};

BtnNexPrev.defaultProps = {
    is_next: true,
    disabled: false,
    btn_class: '',
    btn_props: {},
};

//
function BtnNexPrev({
    is_next,
    btn_class,
    size_icon,
    disabled,
    handleClick,
    btn_props,
}) {
    //
    return (
        <button
            className={`BtnNexPrev wh-100 btn cursor-pointer ${btn_class}`}
            disabled={disabled}
            onClick={handleClick}
            {...btn_props}
        >
            <div className="BtnNexPrev_icon wh-100 display-flex-center">
                <IconsArrow x={is_next ? 200 : 400} size_icon={size_icon} />
            </div>
        </button>
    );
}

export default BtnNexPrev;
