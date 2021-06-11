import React from 'react';
import PropTypes from 'prop-types';
//
import './ProfileInfoStory.scss';

//
ProfileInfoStory.propTypes = {};

//
function ProfileInfoStory({
    is_user,
    name,
    nick_name,
    story,
    handleChangeStory,
}) {
    //
    return (
        <div className="ProfileInfoStory">
            <div className="ProfileInfoStory_head display-flex-center">
                <div className="display-flex">
                    <h2 className="ProfileInfoStory_name margin-0 display-flex">
                        <div>{name}</div>

                        <div
                            className={
                                nick_name
                                    ? 'ProfileInfoStory__nick'
                                    : 'display-none'
                            }
                        >
                            ({nick_name})
                        </div>
                    </h2>
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
