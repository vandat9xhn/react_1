import React from 'react';
import PropTypes from 'prop-types';
//
import FsShopInfoRight from '../right/FsShopInfoRight';
import FsShopInfoLeft from '../left/FsShopInfoLeft';
//
import './FsShopInfo.scss';

//
FsShopInfo.propTypes = {
    ...FsShopInfoLeft.propTypes,
    ...FsShopInfoRight.propTypes,
};

//
function FsShopInfo({ shop_info }) {
    //
    const { name, vid_pics, description } = shop_info;

    //
    return (
        <div className="FsShopInfo bg-primary">
            <h2 className="FsShopInfo_title margin-bottom-15px text-upper font-16px font-500">
                Thông tin shop
            </h2>

            <div className="FsShopInfo_row display-flex">
                <div className="FsShopInfo_left">
                    <FsShopInfoLeft
                        vid_pics={[
                            vid_pics[vid_pics.length - 1],
                            ...vid_pics,
                            vid_pics[0],
                        ]}
                        has_fetched={true}
                    />
                </div>

                <div className="FsShopInfo_right">
                    <FsShopInfoRight name={name} description={description} />
                </div>
            </div>
        </div>
    );
}

export default FsShopInfo;
