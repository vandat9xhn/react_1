import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './FsComboItem.scss';

//
FsComboItem.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    old_price: PropTypes.number,
    new_price: PropTypes.number,
};

//
function FsComboItem({ id, img, name, old_price, new_price }) {
    //
    return (
        <Link to={`/fashion:${id}`} className="text-secondary">
            <div className="FsComboItem pos-rel">
                <div className="FsComboItem_head pos-rel margin-bottom-10px w-100per padding-top-100per">
                    <img
                        className="pos-abs-100 wh-100 object-fit-cover"
                        src={img}
                        alt=""
                    />
                </div>

                <div className="FsComboItem_foot font-14px">
                    <div className="FsComboItem_name wk-box-vertical line-clamp-2 overflow-hidden">
                        {name}
                    </div>

                    <div className="FsComboItem_price padding-top-8px">
                        {old_price ? (
                            <del className="FsComboItem_price_old margin-right-5px">
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

export default FsComboItem;
