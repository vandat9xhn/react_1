import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../_some_function/ParseLocationSearch';
//
import { handle_API_ProfileUser_R } from '../__handle_api/ProfileHandleAPI';

import ProfileInfo from '../info/_main/ProfileInfo';
import ProfileMore from '../more/ProfileMore';
import ProfilePost from '../user_pages/posts/ProfilePost';
import ProfilePicture from '../user_pages/picture/ProfilePicture';
import ProfileFriend from '../user_pages/friend/_main/ProfileFriend';
import ProfileIntroduce from '../user_pages/introduce/_main/ProfileIntroduce';
//
import './Profile.scss';

// lazy load
// const ProfilePost = React.lazy(() => import('../user_pages/posts/ProfilePost'));
// const ProfilePicture = React.lazy(() =>
//     import('../user_pages/picture/ProfilePicture')
// );
// const ProfileFriend = React.lazy(() =>
//     import('../user_pages/friend/_main/ProfileFriend')
// );
// const ProfileIntroduce = React.lazy(() =>
//     import('../user_pages/introduce/_main/ProfileIntroduce')
// );

//
function Profile(props) {
    const { id } = props.match.params;

    //
    const [profile, setProfile] = useState({});

    const [sk_obj, setSkObj] = useState({
        sk_loaded_arr: [],
        which_sk: '',
    });

    const { sk_loaded_arr, which_sk } = sk_obj;

    //
    useEffect(() => {
        handleSkLoaded();
        getProfileInfo();
    }, [id]);

    //
    async function getProfileInfo() {
        const data = await handle_API_ProfileUser_R(id);
        setProfile(data);
        document.title = data.first_name + ' ' + data.last_name;
    }

    //
    function handleSkLoaded() {
        let sk = ParseLocationSearch().sk || '';
        if (!['friend', 'pic', 'intro'].includes(sk)) {
            sk = '';
        }
        setSkObj({
            which_sk: sk,
            sk_loaded_arr: [sk],
        });
    }

    //
    function onClickSk(sk) {
        if (sk !== which_sk) {
            setSkObj({
                which_sk: sk,
                sk_loaded_arr: !sk_loaded_arr.includes(sk)
                    ? [...sk_loaded_arr, sk]
                    : sk_loaded_arr,
            });
        }
    }

    //
    function openCoverPicture() {
        console.log(id);
    }

    //
    function openPicture() {
        console.log(id);
    }

    //
    return (
        <div className="Profile">
            <div className="Profile_info">
                <ProfileInfo
                    profile={profile}
                    openCoverPicture={openCoverPicture}
                    openPicture={openPicture}
                />
            </div>
            
            <div className="Profile_more">
                <ProfileMore sk={which_sk} onClickSk={onClickSk} />
            </div>

            {sk_loaded_arr.includes('') && (
                <div className={which_sk == '' ? '' : 'display-none'}>
                    <ProfilePost last_name={profile.last_name} />
                </div>
            )}

            {sk_loaded_arr.includes('friend') && (
                <div className={which_sk == 'friend' ? '' : 'display-none'}>
                    <ProfileFriend />
                </div>
            )}

            {sk_loaded_arr.includes('intro') && (
                <div className={which_sk == 'intro' ? '' : 'display-none'}>
                    <ProfileIntroduce />
                </div>
            )}

            {sk_loaded_arr.includes('pic') && (
                <div className={which_sk == 'pic' ? '' : 'display-none'}>
                    <ProfilePicture />
                </div>
            )}
        </div>
    );
}

export default Profile;
