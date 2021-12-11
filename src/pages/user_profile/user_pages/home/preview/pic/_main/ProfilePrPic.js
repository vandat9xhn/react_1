import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_VidPic_L } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { useMounted } from '../../../../../../../_hooks/useMounted';
//
import ProfilePrPicSkeleton from '../skeleton/ProfilePrPicSkeleton';
import PrLayoutHomePreviewPics from '../../../../../../../component/profile_layout/home_preview_pics/PrLayoutHomePreviewPics';
//
import './ProfilePrPic.scss';

//
function ProfilePrPic({ id, handleReady }) {
    //
    const [state_obj, setStateObj] = useState({
        vid_pics: [
            {
                id: 0,
                vid_pic: '',
            },
        ],
        is_fetching: true,
    });

    const { vid_pics, is_fetching } = state_obj;

    //
    const ref_component = useRef(null);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        observeToDo({
            elm: ref_component.current,
            callback: getData_API_PicPreview,
            when_over: true,
        });
    }, []);

    // ------

    //
    async function getData_API_PicPreview() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching: true,
        }));

        const { data } = await handle_API_VidPic_L(id, vid_pics.length);

        if (mounted) {
            setStateObj({
                vid_pics: data,
                is_fetching: false,
            });

            handleReady();
        }
    }

    // -------

    //
    function getLinkItem(item) {
        return `/post/photos/${item.id}`;
    }

    //
    return (
        <div ref={ref_component}>
            <PrLayoutHomePreviewPics
                title="Photos"
                link_to={location.pathname + '?sk=photos_all'}
                is_fetching={is_fetching}
                ProfilePrSkeleton={ProfilePrPicSkeleton}

                pic_arr={vid_pics}
                getLinkItem={getLinkItem}
            />
        </div>
    );
}

export default ProfilePrPic;
