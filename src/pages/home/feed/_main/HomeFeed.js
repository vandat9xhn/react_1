import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import Carousel from '../../../../component/carousel/_main/Carousel';
import FavWithLetter from '../../../../component/fav_with_letter/FavWithLetter';
//
import './HomeFeed.scss';

//
import { getDefaultArr } from '../../../../_default/_common/getDefaultArr';
import { getRandomVidPic } from '../../../../_default/_common/default_image';

const VID_PICS = getDefaultArr(getRandomVidPic, 3, 5);

//
HomeFeed.propTypes = {};

//
function HomeFeed(props) {
    //
    const { user } = useContext(context_api);

    //
    return (
        <div className="HomeFeed">
            <div className="home-title display-flex align-items-center">
                <div>
                    <Link to={`${user.id > 0 ? '/new-feed' : '/login-form'}`}>
                        <FavWithLetter letter="F" class_letter="text-blue" />
                    </Link>
                </div>

                <div className="flex-grow-1 padding-left-15px">
                    Giao lưu, chia sẻ, trò chuyện, học tập và làm việc
                </div>
            </div>

            <div className="HomeFeed_body pos-rel">
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

            {user.id > 0 ? null : (
                <div className="display-flex-center padding-y-15px">
                    <div className="margin-right-10px">
                        <Link className="text-white" to="/login-form">
                            <div className="padding-x-10px padding-y-5px brs-3px bg-blue">
                                Đăng nhập
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link className="text-white" to="/registration-form">
                            <div className="padding-x-10px padding-y-5px brs-3px bg-green">
                                Đăng kí ngay
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomeFeed;
