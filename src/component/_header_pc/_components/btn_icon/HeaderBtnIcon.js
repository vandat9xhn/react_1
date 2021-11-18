import React from 'react';
import PropTypes from 'prop-types';
//
import BadgeDiv from '../../../some_div/badge_div/BadgeDiv';
//
import './HeaderBtnIcon.scss';

//
HeaderBtnIcon.propTypes = {
    children: PropTypes.element,
};

//
function HeaderBtnIcon({ count_new, title, children, handleClick }) {
    //
    return (
        <div className="HeaderBtnIcon display-flex-center h-100per">
            <div
                className="HeaderBtnIcon_contain pos-rel btn-icon-40px cursor-pointer bg-ccc hv-bg-hv"
                title={title}
                onClick={handleClick}
            >
                {children}

                <div className="HeaderBtnIcon_new pos-abs">
                    <BadgeDiv num={count_new} />
                </div>
            </div>
        </div>
    );
}

export default HeaderBtnIcon;
