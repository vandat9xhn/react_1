import React from 'react';
import PropTypes from 'prop-types';
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
FsSearchTitleFor.propTypes = {};

//
function FsSearchTitleFor({ value_search }) {
    //
    return (
        <div className="FsSearchTitleFor">
            <h1 className="font-16px font-500 text-555">
                <div className="inline-flex align-items-center">
                    <span>
                        {IS_MOBILE ? '' : 'Kết quả tìm kiếm cho từ khoá '}'
                    </span>
                    <span className="color-fashion">{value_search}</span>'
                </div>
            </h1>
        </div>
    );
}

export default FsSearchTitleFor;
