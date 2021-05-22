import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMounted } from '../../../../../../../_custom_hooks/useMounted';
//
import { handle_API_VidPic_L } from '../../../../../__handle_api/ProfileHandleAPI';

import ProfilePrCommon from '../../_common/preview_common/ProfilePrCommon';
import ProfilePrPicSkeleton from '../skeleton/ProfilePrPicSkeleton';

import ProfilePrPicItem from '../item/ProfilePrPicItem';
//
import './ProfilePrPic.scss';

//
function ProfilePrPic({ id, onClickSk }) {
    //
    const [vid_pics, setVidPics] = useState([]);
    const [is_fetching, setIsFetching] = useState(false);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        getData_API_PicPreview();
    }, [id]);

    //
    async function getData_API_PicPreview() {
        setIsFetching(true);
        const { data } = await handle_API_VidPic_L(id, vid_pics.length);

        if (mounted) {
            setVidPics(data);
            setIsFetching(false);
        }
    }

    //
    return (
        <ProfilePrCommon
            title="Photos"
            sk="pic_all"
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
                            <ProfilePrPicItem
                                id={item.id}
                                vid_pic={item.vid_pic}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </ProfilePrCommon>
    );
}

export default ProfilePrPic;
