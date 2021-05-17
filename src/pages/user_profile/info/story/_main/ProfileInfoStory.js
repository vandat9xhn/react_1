import React from 'react';
import PropTypes from 'prop-types';

//
ProfileInfoStory.propTypes = {};

//
function ProfileInfoStory(props) {
    const { is_user, name, nick_name, story, handleChangeStory } = props;

    //
    return (
        <div className="ProfileInfo_name-story">
            <div className="ProfileInfo_name display-flex justify-content-center align-items-center">
                <div className="display-flex">
                    <div>{name}</div>

                    {nick_name && <div> ({nick_name})</div>}
                </div>
            </div>

            <div className="ProfileInfo_story text-align-center">
                <div onClick={is_user ? handleChangeStory : undefined}>
                    {story ? (
                        <div>{story}</div>
                    ) : (
                        <div>{is_user ? 'Add your story' : ''}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfoStory;
