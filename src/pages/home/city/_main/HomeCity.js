import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { handle_API_City_L } from '../../../../_handle_api/city/CityHandleAPI';
//
import FavWithLetter from '../../../../component/fav_with_letter/FavWithLetter';
import Carousel from '../../../../component/carousel/_main/Carousel';
// 
import './HomeCity.scss';

//
import { getDefaultArr } from '../../../../_default/_common/getDefaultArr';
import { getRandomVidPic } from '../../../../_default/_common/default_image';

//
const VID_PICS = getDefaultArr(getRandomVidPic, 3, 5);

//
HomeCity.propTypes = {};

//
function HomeCity(props) {
    //
    return (
        <div className="HomeCity">
            <div className="home-title display-flex align-items-center">
                <div>
                    <Link to="/fashion">
                        <FavWithLetter letter="C" class_letter="text-green" />
                    </Link>
                </div>

                <div className="flex-grow-1 padding-left-15px">
                    Chia sẻ tới tất cả mọi người về thành phố của bạn
                </div>
            </div>

            <div className="HomeCity_body pos-rel">
                <div className="pos-abs-100 padding-10px">
                    <Carousel
                        vid_pics={[
                            VID_PICS.slice(-1)[0],
                            ...VID_PICS,
                            VID_PICS[0],
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeCity;
