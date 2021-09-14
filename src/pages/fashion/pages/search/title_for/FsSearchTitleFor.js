import React from 'react';
import PropTypes from 'prop-types';

//
FsSearchTitleFor.propTypes = {};

//
function FsSearchTitleFor({ value_search }) {
    //
    return (
        <div className="FsSearchTitleFor">
            <h1 className="font-16px font-400 text-555">
                <div className="inline-flex align-items-center">
                    <span>Kết quả tìm kiếm cho từ khoá '</span>
                    <span className="font-600">{value_search}</span>'
                </div>
            </h1>
        </div>
    );
}

export default FsSearchTitleFor;
