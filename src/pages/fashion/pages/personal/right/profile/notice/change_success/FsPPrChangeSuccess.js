import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';
//
import './FsPPrChangeSuccess.scss';

//
FsPPrChangeSuccess.propTypes = {};

//
function FsPPrChangeSuccess(props) {
    //
    return (
        <div className="FsPPrChangeSuccess bg-primary brs-3px box-shadow-fb display-flex-center flex-col">
            <div className="margin-bottom-15px">
                <div className="FsPPrChangeSuccess_icon display-flex-center brs-50 text-green">
                    <IconSent size_icon="2rem" stroke="currentColor" />
                </div>
            </div>

            <div className="font-16px text-primary-08">Cập nhật hồ sơ</div>
        </div>
    );
}

export default FsPPrChangeSuccess;
