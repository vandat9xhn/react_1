import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './FsIComboItem.scss';

//
FsIComboItem.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    old_price: PropTypes.number,
    new_price: PropTypes.number,
};

//
function FsIComboItem({ id, img, name, old_price, new_price }) {
    //
    return (
        <Link to={`/fashion:${id}`} className="text-secondary">
            <div className="FsIComboItem pos-rel">
                <div className="FsIComboItem_head pos-rel w-100per">
                    <img
                        className="pos-abs-100 wh-100 object-fit-cover"
                        src={img}
                        alt=""
                    />
                </div>

                <div className="FsIComboItem_foot font-14px">
                    <div className="FsIComboItem_name overflow-hidden">
                        {name}
                    </div>

                    <div className="FsIComboItem_price">
                        {old_price ? (
                            <del className="FsIComboItem_price_old">
                                ₫{old_price}
                            </del>
                        ) : null}

                        <span className="color-fashion">₫{new_price}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default FsIComboItem;
