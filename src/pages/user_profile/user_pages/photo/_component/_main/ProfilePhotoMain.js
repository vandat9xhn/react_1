import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../../_some_function/GetIdSlug';
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import ComponentSkeleton from '../../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
import ScreenBlurShowMore from '../../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
import NoItem from '../../../../../../component/some_div/no_item/NoItem';
//
import './ProfilePhotoMain.scss';

//
ProfilePhotoMain.propTypes = {
    initial_photo_arr: PropTypes.array,
    initial_photo_count: PropTypes.number,
    item_props: PropTypes.object,
    has_create: PropTypes.bool,
    CreateElm: PropTypes.element,

    title_show_more: PropTypes.string,
    title_no_item: PropTypes.string,

    handle_API_Photo_L: PropTypes.func,
    ProfilePhotoItem: PropTypes.func,
    ProfilePhotoMainSkeleton: PropTypes.element,
};

ProfilePhotoMain.defaultProps = {
    initial_photo_arr: [],
    initial_photo_count: 0,
    item_props: {},
    has_create: false,
    CreateElm: <div></div>,

    title_show_more: 'See more photos',
    title_no_item: 'No items to show',
};

//
function ProfilePhotoMain({
    initial_photo_arr,
    initial_photo_count,

    item_props,
    has_create,
    CreateElm,

    title_show_more,
    title_no_item,

    handle_API_Photo_L,
    ProfilePhotoItem,
    ProfilePhotoMainSkeleton,
}) {
    //
    const id = GetIdSlug();

    //
    const [photo_state, setPhotoState] = useState({
        photo_arr: initial_photo_arr,
        photo_count: initial_photo_count,
        has_fetched: initial_photo_arr.length > 0,
        is_fetching: false,
    });

    const { photo_arr, photo_count, has_fetched, is_fetching } = photo_state;

    //
    const ref_main = useRef(null);

    //
    useEffect(() => {
        initial_photo_arr.length == 0 &&
            observeToDo({
                elm: ref_main.current,
                callback: () => {
                    getData_API_Photo();
                },
            });
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
        <div ref={ref_main} className="ProfilePhotoMain">
            <div>
                <div className="display-flex flex-wrap">
                    {has_create ? (
                        <div className="ProfilePhotoMain_item">{CreateElm}</div>
                    ) : null}

                    {photo_arr.map((item) => (
                        <div key={item.id} className="ProfilePhotoMain_item">
                            <ProfilePhotoItem item={item} {...item_props} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="padding-top-10px">
                <ScreenBlurShowMore
                    title={title_show_more}
                    is_show_more={photo_count > photo_arr.length}
                    is_fetching={is_fetching && has_fetched}
                    handleShowMore={handleShowMorePhotos}
                />
            </div>

            <div className="text-align-center font-700 font-18px text-third">
                <NoItem
                    no_item={has_fetched && photo_arr.length == 0}
                    title={title_no_item}
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
