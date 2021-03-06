import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './FbSearchPagePhotoItem.scss';

//
FbSearchPagePhotoItem.propTypes = {};

//
function FbSearchPagePhotoItem({ item }) {
    //
    return (
        <div className="FbSearchPagePhotoItem pos-rel wh-100">
            <div className="FbSearchPagePhotoItem_bg pos-abs-100 z-index-1 pointer-events-none"></div>

            <Link
                className="display-block padding-top-100per"
                to={item.link_to}
            >
                <img
                    className="pos-abs-100 object-fit-cover"
                    src={item.img}
                    alt=""
                />
            </Link>

            <div className="pos-abs bottom-0 left-0 z-index-1 w-100per pointer-events-none">
                <div className="wk-box-vertical line-clamp-2 overflow-hidden padding-5px text-white font-500">
                    {item.title}
                </div>
            </div>
        </div>
    );
}

export default FbSearchPagePhotoItem;
