import React from 'react';
import PropTypes from 'prop-types';
//
import IconSeen from '../../../../../_icons_svg/icons_status_message/icon_seen/IconSeen';
//
import IconDiv from '../../../../../component/some_div/icon_div/IconDiv';
//
import './FashionCartSuccess.scss';

//
FashionCartSuccess.propTypes = {};

//
function FashionCartSuccess(props) {
    // 
    return (
        <div className="FashionCartSuccess bg-shadow-9 brs-5px">
            <div className="display-flex-center wh-100">
                <IconDiv
                    Icon={IconSeen}
                    icon_props={{ stroke: 'var(--success)' }}
                    size_icon="2.5rem"
                >
                    Add Cart Success
                </IconDiv>
            </div>
        </div>
    );
}

export default FashionCartSuccess;
