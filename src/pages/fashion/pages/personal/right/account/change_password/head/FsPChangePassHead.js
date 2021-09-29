import React from 'react';
import PropTypes from 'prop-types';
// 
import './FsPChangePassHead.scss';

//
FsPChangePassHead.propTypes = {};

//
function FsPChangePassHead(props) {
    //
    return (
        <div className="FsPChangePassHead padding-y-18px">
            <h1 className="fs-personal-title text-333 font-18px font-500 text-cap">
                Đổi mật khẩu
            </h1>

            <div className="fs-personal-info text-555">
                Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người
                khác
            </div>
        </div>
    );
}

export default FsPChangePassHead;
