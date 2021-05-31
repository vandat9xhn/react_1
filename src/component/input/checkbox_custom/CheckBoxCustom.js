import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../_icons_svg/icons_status_message/icon_sent/IconSent';
//
import './CheckBoxCustom.scss';

//
CheckBoxCustom.propTypes = {
    checked: PropTypes.bool,
    title: PropTypes.string,
    handleChangeChecked: PropTypes.func,
};

//
function CheckBoxCustom(props) {
    const { checked, title, handleChangeChecked } = props;
    
    //
    return (
        <div className="CheckBoxCustom">
            <div className="CheckBoxCustom_row display-flex align-items-center">
                <div
                    className={`CheckBoxCustom_input brs-5px position-rel ${
                        checked
                            ? 'CheckBoxCustom_input-active'
                            : 'CheckBoxCustom_input-inactive'
                    }`}
                    onClick={handleChangeChecked}
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
                        checked ? 'label-field' : ''
                    }`}
                >
                    {title}
                </div>
            </div>
        </div>
    );
}

export default CheckBoxCustom;
