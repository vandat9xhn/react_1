import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../_icons_svg/icons_status_message/icon_sent/IconSent';
//
import './CheckBoxCustom.scss';

//
CheckBoxCustom.propTypes = {
    checked: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    handleChangeChecked: PropTypes.func,
};

CheckBoxCustom.defaultProps = {
    title: ''
}

//
function CheckBoxCustom({ checked, title, handleChangeChecked }) {
    //
    return (
        <div
            className="CheckBoxCustom cursor-pointer"
            onClick={handleChangeChecked}
        >
            <div className="CheckBoxCustom_row display-flex align-items-center">
                <div
                    className={`CheckBoxCustom_input flex-shrink-0 brs-5px pos-rel ${
                        checked
                            ? 'CheckBoxCustom_input-active'
                            : 'CheckBoxCustom_input-inactive'
                    }`}
                >
                    <div className="CheckBoxCustom_input-icon pos-abs-100 display-flex align-items-center justify-content-center">
                        <IconSent
                            stroke="var(--md-bg-primary)"
                            size_icon="1rem"
                        />
                    </div>
                </div>

                <div
                    className={`CheckBoxCustom_title ${
                        checked ? 'font-500' : ''
                    }`}
                >
                    {title}
                </div>
            </div>
        </div>
    );
}

export default CheckBoxCustom;
