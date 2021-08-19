import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { UnitNumber } from '../../../../_some_function/UnitNumber';
//
import './FashionTrendItem.scss';

//
FashionTrendItem.propTypes = {};

//
function FashionTrendItem({ link_to, keyword, count, image }) {
    //
    return (
        <Link to={link_to} className="FashionTrendItem normal-text">
            <div className="FashionTrendItem_row display-flex">
                <div className="FashionTrendItem_left flex-grow-1 padding-8px">
                    <div className="text-nowrap">
                        <span className="FashionTrendItem_left_keyword font-14px">
                            {keyword}
                        </span>
                    </div>

                    <div className="text-nowrap">
                        <span className="FashionTrendItem_left_count text-secondary font-13px">
                            {UnitNumber(count)}+ sản phẩm
                        </span>
                    </div>
                </div>

                <div className="FashionTrendItem_right flex-shrink-0">
                    <img
                        className="FashionTrendItem_right_img object-fit-cover"
                        src={image}
                        alt=""
                        width="100"
                        height="100"
                    />
                </div>
            </div>
        </Link>
    );
}

export default FashionTrendItem;
