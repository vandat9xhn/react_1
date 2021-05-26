import React from 'react';
import PropTypes from 'prop-types';
//
import './ProfileInfoStory.scss';

//
ProfileInfoStory.propTypes = {};

//
function ProfileInfoStory(props) {
    const { is_user, name, nick_name, story, handleChangeStory } = props;

    //
    return (
        <div className="ProfileInfoStory">
            <div className="ProfileInfoStory_head display-flex justify-content-center align-items-center">
                <div className="display-flex">
                    <h1 className="margin-0">
                        <span>{name}</span>

                        <span className={nick_name ? 'ProfileInfoStory__nick' : 'display-none'}>
                            ({nick_name})
                        </span>
                    </h1>
                </div>
            </div>

            <div className="ProfileInfoStory_story text-align-center">
                <div onClick={is_user ? handleChangeStory : undefined}>
                    <div className={story ? '' : 'display-none'}>{story}</div>

                    <div className={story ? 'display-none' : ''}>
                        {is_user ? 'Add your story' : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfoStory;
