import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import Carousel from '../../../../../../component/carousel/_main/Carousel';
//
import './FsShopInfoLeft.scss';

//
FsShopInfoLeft.propTypes = {};

//
function FsShopInfoLeft({ vid_pics, has_fetched }) {
    //
    return (
        <div className="FsShopInfoLeft wh-100">
            {IS_MOBILE ? (
                <ul className="display-flex flex-wrap list-none">
                    {vid_pics.map((vid_pic, ix) => (
                        <li key={ix} className="FsShopInfoLeft_item pos-rel">
                            <img
                                className="pos-abs top-0 left-0 wh-100 object-fit-cover padding-5px"
                                src={vid_pic}
                                alt=""
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <Carousel vid_pics={vid_pics} has_fetched={has_fetched} />
            )}
        </div>
    );
}

export default FsShopInfoLeft;
