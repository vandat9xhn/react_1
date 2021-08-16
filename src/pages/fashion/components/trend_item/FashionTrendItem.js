import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
FashionTrendItem.propTypes = {};

//
function FashionTrendItem(link_to, name, total, img) {
    //
    return (
        <Link to={link_to} className="FashionTrendItem normal-text">
            <div className="FashionTrendItem_row display-flex">
                <div className="FashionTrendItem_left">
                    <div className="text-nowrap">
                        <span>{name}</span>
                    </div>

                    <div>
                        <span className="text-secondary">
                            {total}+ sản phẩm
                        </span>
                    </div>
                </div>

                <div className="FashionTrendItem_right">
                    <img src={img} alt="" />
                </div>
            </div>
        </Link>
    );
}

export default FashionTrendItem;
