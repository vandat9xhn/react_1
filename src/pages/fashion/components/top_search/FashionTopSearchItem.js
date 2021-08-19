import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import TopSymbol from '../../../../component/symbol/top/TopSymbol';
//
import './FashionTopSearchItem.scss';

//
FashionTopSearchItem.propTypes = {
    link_to: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    sold_month: PropTypes.number,
    use_sold: PropTypes.bool,
};

FashionTopSearchItem.defaultProps = {
    use_sold: true,
};

//
function FashionTopSearchItem({ link_to, type, image, sold_month, use_sold }) {
    //
    return (
        <Link to={link_to}>
            <div className="FashionTopSearchItem pos-rel">
                <div className="FashionTopSearchItem_head pos-rel">
                    <div className="pos-abs-100">
                        <img
                            className="wh-100 object-fit-cover"
                            src={image}
                            alt=""
                        />
                    </div>

                    {use_sold ? (
                        <div className="pos-abs bottom-0 left-0 w-100per">
                            <div className="FashionTopSearchItem_sold_contain padding-4px text-align-center">
                                <span className="text-white label-field font-14px">
                                    Bán {sold_month}+ / tháng
                                </span>
                            </div>
                        </div>
                    ) : null}
                </div>

                <div>
                    <div className="FashionTopSearchItem_foot_contain overflow-hidden">
                        <span className="font-18px label-field text-secondary">
                            {type}
                        </span>
                    </div>
                </div>

                <div className="pos-abs left-0 top-0">
                    <TopSymbol />
                </div>
            </div>
        </Link>
    );
}

export default FashionTopSearchItem;
