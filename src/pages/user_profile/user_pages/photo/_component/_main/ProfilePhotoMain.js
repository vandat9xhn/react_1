import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../../_some_function/GetIdSlug';
//
import ComponentSkeleton from '../../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
import ScreenBlurShowMore from '../../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import './ProfilePhotoMain.scss';

//
ProfilePhotoMain.propTypes = {
    initial_photo_state: PropTypes.array,
    item_props: PropTypes.object,
    title_show_more: PropTypes.string,

    handle_API_Photo_L: PropTypes.func,
    ProfilePhotoItem: PropTypes.func,
    ProfilePhotoMainSkeleton: PropTypes.element,
};

ProfilePhotoMain.defaultProps = {
    item_props: {},
    title_show_more: 'See more photos',
};

//
function ProfilePhotoMain(props) {
    //
    const id = GetIdSlug();

    //
    const {
        initial_photo_state,
        item_props,
        title_show_more,

        handle_API_Photo_L,
        ProfilePhotoItem,
        ProfilePhotoMainSkeleton,
    } = props;

    //
    const [photo_state, setPhotoState] = useState({
        photo_arr: initial_photo_state,
        photo_count: 0,
        has_fetched: false,
        is_fetching: false,
    });

    const { photo_arr, photo_count, has_fetched, is_fetching } = photo_state;

    //
    useLayoutEffect(() => {
        getData_API_Photo();
    }, []);

    //
    async function getData_API_Photo() {
        setPhotoState({
            ...photo_state,
            is_fetching: true,
        });

        const { data, count } = await handle_API_Photo_L(
            id,
            has_fetched ? photo_arr.length : 0
        );

        setPhotoState((photo_state) => {
            const { photo_arr, photo_count, has_fetched } = photo_state;

            return {
                photo_arr: has_fetched ? [...photo_arr, ...data] : data,
                photo_count: has_fetched ? photo_count : count,
                has_fetched: true,
                is_fetching: false,
            };
        });
    }

    //
    function handleShowMorePhotos() {
        getData_API_Photo();
    }

    //
    return (
        <div>
            <div>
                <div className="display-flex flex-wrap">
                    {photo_arr.map((item) => (
                        <div
                            key={`ProfilePhotoMain_${item.id}`}
                            className="ProfilePhotoMain_item"
                        >
                            <ProfilePhotoItem item={item} {...item_props} />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <ScreenBlurShowMore
                    title={title_show_more}
                    is_show_more={photo_count > photo_arr.length}
                    is_fetching={is_fetching && has_fetched}
                    handleShowMore={handleShowMorePhotos}
                />
            </div>

            <ComponentSkeleton
                has_fetched={has_fetched}
                component={ProfilePhotoMainSkeleton}
            />
        </div>
    );
}

export default ProfilePhotoMain;
