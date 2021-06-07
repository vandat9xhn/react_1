import React from 'react';
import PropTypes from 'prop-types';
//
import './ShopPersonal.scss';
import './ShopPersonalRes.scss';
//
import ShopPersonalLeft from '../left/ShopPersonalLeft';
import ShopPersonalRight from '../right/ShopPersonalRight';

//
ShopPersonal.propTypes = {};

//
function ShopPersonal({
    profile_user,
    picture,
    name,
    banner,

    owner_info,
}) {
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
                    <ShopPersonalRight owner_info={owner_info} />
                </div>
            </div>
        </div>
    );
}

export default ShopPersonal;
