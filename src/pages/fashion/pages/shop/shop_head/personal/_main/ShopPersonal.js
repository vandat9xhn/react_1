import React from 'react';
import PropTypes from 'prop-types';
//
import ShopPersonalLeft from '../left/ShopPersonalLeft';
import ShopPersonalRight from '../right/ShopPersonalRight';
// 
import './ShopPersonal.scss';
import './ShopPersonalRes.scss';

//
ShopPersonal.propTypes = {
    profile_user: PropTypes.number,
    picture: PropTypes.string,
    name: PropTypes.string,
    banner: PropTypes.string,
    // 
    count_product: PropTypes.number,
    count_sold: PropTypes.number,
    created_time: PropTypes.string,
    count_follow: PropTypes.number,
    count_rate: PropTypes.number,
};

//
function ShopPersonal(props) {
    const {
        profile_user,
        picture,
        name,
        banner,
        // 
        count_product,
        count_sold,
        created_time,
        count_follow,
        count_rate,
        avg_rate,
    } = props;

    //
    return (
        <div className="ShopPersonal">
            <div className="ShopPersonal_row display-flex align-items-center">
                <div className="ShopPersonal_left">
                    <ShopPersonalLeft
                        profile_user={profile_user}
                        picture={picture}
                        name={name}
                        banner={banner}
                    />
                </div>

                <div className="ShopPersonal_right">
                    <ShopPersonalRight
                        count_product={count_product}
                        count_sold={count_sold}
                        created_time={created_time}
                        count_follow={count_follow}
                        count_rate={count_rate}
                        avg_rate={avg_rate}
                    />
                </div>
            </div>
        </div>
    );
}

export default ShopPersonal;
