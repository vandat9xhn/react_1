import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { handle_API_VidPic_L } from '../../../../../__handle_api/ProfileHandleAPI';
//
import ProfilePrCommon from '../../_common/preview_common/ProfilePrCommon';
import ProfilePrPicSkeleton from '../skeleton/ProfilePrPicSkeleton';
//
import './ProfilePrPic.scss';

//
function ProfilePrPic(props) {
    //
    const { id, onClickSk } = props;

    //
    const [vid_pics, setVidPics] = useState([]);
    const [is_fetching, setIsFetching] = useState(false);

    //
    useEffect(() => {
        getData_API_PicPreview();
    }, [id]);

    //
    async function getData_API_PicPreview() {
        setIsFetching(true);
        const { data } = await handle_API_VidPic_L(id, vid_pics.length);

        setVidPics(data);
        setIsFetching(false);
    }

    //
    return (
        <ProfilePrCommon
            title="Picture"
            sk="pic"
            onClickSk={onClickSk}
            is_fetching={is_fetching}
            ProfileSkeleton={ProfilePrPicSkeleton}
        >
            <div className="ProfilePrPic">
                <div className="ProfilePrPic_row display-flex flex-wrap space-between">
                    {vid_pics.map((item, ix) => (
                        <div
                            className="ProfilePrPic_item"
                            key={`ProfilePrPic_${ix}`}
                        >
                            <Link to={`/post/photos/${item.id}`}>
                                <img src={item.vid_pic} alt="" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </ProfilePrCommon>
    );
}

export default ProfilePrPic;
