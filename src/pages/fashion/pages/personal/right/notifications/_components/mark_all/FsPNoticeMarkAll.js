import React from 'react';
import PropTypes from 'prop-types';

//
FsPNoticeMarkAll.propTypes = {};

//
function FsPNoticeMarkAll({ has_new, markAllAsRead }) {
    //
    return (
        <div className="FsPNoticeMarkAll padding-y-10px padding-x-20px">
            <div className="flex-end">
                <button
                    className={`btn ${
                        has_new
                            ? 'hv-cl-fashion cursor-pointer'
                            : 'pointer-events-none opacity-02'
                    }`}
                    type="button"
                    onClick={markAllAsRead}
                >
                    Đánh dấu Đã đọc tất cả
                </button>
            </div>
        </div>
    );
}

export default FsPNoticeMarkAll;
