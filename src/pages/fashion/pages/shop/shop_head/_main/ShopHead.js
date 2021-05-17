import React from 'react';
import PropTypes from 'prop-types';
//
import ShopBanner from '../banner/ShopBanner';
import ShopInfo from '../info/ShopInfo';
import ShopPersonal from '../personal/_main/ShopPersonal';
// 
import './ShopHead.scss';

//
ShopHead.propTypes = {};


//
function ShopHead(props) {
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
        // 
        vid_pics,
        info,
    } = props.shop_head_obj;

    // 
    return (
        <div>
            <div className="ShopHead_personal">
                <ShopPersonal
                    profile_user={profile_user}
                    picture={picture}
                    name={name}
                    banner={banner}
                    // 
                    count_product={count_product}
                    count_sold={count_sold}
                    created_time={created_time}
                    count_follow={count_follow}
                    count_rate={count_rate}
                    avg_rate={avg_rate}
                />
            </div>

            <div>
                <ShopBanner vid_pics={vid_pics}/>
            </div>

            <div>
                <ShopInfo info={info}/>
            </div>
        </div>
    );
}

export default ShopHead;
