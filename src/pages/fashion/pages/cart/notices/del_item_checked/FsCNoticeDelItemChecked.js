import React from 'react';
import PropTypes from 'prop-types';

// 
FsCNoticeDelItemChecked.propTypes = {};

// 
function FsCNoticeDelItemChecked(props) {
    return (
        <div>
            <div className="padding-8px text-red">
                Các sản phẩm này sẽ bị xóa khỏi giỏ hàng!
            </div>

            <div className="padding-y-8px label-field text-align-end">
                Bạn có muốn tiếp tục không?
            </div>
        </div>
    );
}

export default FsCNoticeDelItemChecked;
