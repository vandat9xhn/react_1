import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
FsGItemHasMore.propTypes = {
    img: PropTypes.string,
    count: PropTypes.number,
};

//
function FsGItemHasMore({ img, count }) {
    //
    return (
        <div className="pos-rel padding-top-100per">
            <img
                className="pos-abs-100 wh-100 object-fit-cover"
                src={img}
                alt=""
            />

            <div className="pos-abs-100 bg-shadow-5"></div>

            <div className="pos-abs-center w-100per">
                <div className="padding-8px text-align-center text-white font-500 font-18px">
                    + {count - 1} {IS_MOBILE ? '' : 'sản phẩm'}
                </div>
            </div>
        </div>
    );
}

export default FsGItemHasMore;
