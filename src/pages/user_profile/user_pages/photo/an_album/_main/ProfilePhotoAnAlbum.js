import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
// 
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import { handle_API_FbProfilePhotoAlbum_R } from '../../../../../../_handle_api/profile/photo_an_album';
//
import PrPtAnAlbumInfo from '../info/_main/PrPtAnAlbumInfo';
import PrPtAnAlbumFeed from '../feed/_main/PrPtAnAlbumFeed';
import PrPtAnAlbumGrid from '../grid/_main/PrPtAnAlbumGrid';
//
import './ProfilePhotoAnAlbum.scss';

//
ProfilePhotoAnAlbum.propTypes = {};

//
function ProfilePhotoAnAlbum({ user_id, name, is_your }) {
    //
    const { sk, album_id } = ParseLocationSearch();

    //
    const [state_obj, setStateObj] = useState({
        album_obj: {},
        mode_view: 'grid',
        has_fetched: false,
    });

    const { album_obj, mode_view, has_fetched } = state_obj;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // -----

    //
    async function getData_API() {
        const data = await handle_API_FbProfilePhotoAlbum_R({
            // user_id: user_id,
            album_id: album_id,
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                album_obj: data,
                has_fetched: true,
            };
        });
    }

    // -----

    //
    function changeModeView() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                mode_view: state_obj.mode_view == 'grid' ? 'feed' : 'grid',
            };
        });
    }

    //
    function handleChoosePermission(new_permission = 0) {
        setStateObj((state_obj) => {
            const new_album_obj = { ...state_obj.album_obj };
            new_album_obj.permission = new_permission;

            return {
                ...state_obj,
                album_obj: new_album_obj,
            };
        });
    }

    //
    function handle_API_Other_L() {
        return [
            [
                { name: 'edit', title: 'Edit album' },
                { name: 'down', title: 'Download album' },
            ],
        ];
    }

    //
    function handleActionOther() {}

    //
    function on_API_Like_L() {}

    //
    function onOpenDetailLike() {}

    //
    function changeTypeLike() {}

    //
    function handleClickBtnCmt() {}

    //
    function shareAlbum() {}

    // -----

    //
    function AddPostToAlbum() {}

    // -----

    //
    if (sk == 'album_photo' && !album_id) {
        return <Redirect to={`/profile/${user_id}`} />;
    }

    //
    if (!has_fetched) {
        return <div className="h-100vh"></div>;
    }

    //
    return (
        <div className="ProfilePhotoAnAlbum">
            <div className="ProfilePhotoAnAlbum_info profile-route-contain">
                <PrPtAnAlbumInfo
                    album_obj={album_obj}
                    mode_view={mode_view}
                    //
                    changeModeView={changeModeView}
                    handleChoosePermission={handleChoosePermission}
                    handle_API_Other_L={handle_API_Other_L}
                    handleActionOther={handleActionOther}
                    //
                    on_API_Like_L={on_API_Like_L}
                    onOpenDetailLike={onOpenDetailLike}
                    changeTypeLike={changeTypeLike}
                    handleClickBtnCmt={handleClickBtnCmt}
                    sharePost={shareAlbum}
                />
            </div>

            {mode_view == 'feed' && !IS_MOBILE ? (
                <div className="ProfilePhotoAnAlbum_feed margin-auto">
                    <PrPtAnAlbumFeed
                        album_name={album_obj.album_name}
                        post_arr={album_obj.post_arr}
                        has_fetched={has_fetched}
                        //
                        AddPostToAlbum={AddPostToAlbum}
                    />
                </div>
            ) : (
                <div className="ProfilePhotoAnAlbum_grid profile-route-contain">
                    <PrPtAnAlbumGrid
                        is_your={is_your}
                        pic_arr={album_obj.pic_arr}
                        pic_count={album_obj.pic_count}
                    />
                </div>
            )}
        </div>
    );
}

export default ProfilePhotoAnAlbum;
