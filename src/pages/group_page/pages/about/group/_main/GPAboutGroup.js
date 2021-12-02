import React from 'react';
import PropTypes from 'prop-types';
//
import GPAbGroupContain from '../contain/GPAbGroupContain';

//
GPAboutGroup.propTypes = {};

//
function GPAboutGroup({
    description,
    privacy,
    visibility,
    type_obj,

    has_fetched,
}) {
    //
    return (
        <div className="GPAboutGroup gr-page-about-part">
            <h2 className="gr-page-about-title">About this group</h2>

            <hr className="gr-page-about-hr" />

            <div>
                <GPAbGroupContain
                    description={description}
                    privacy={privacy}
                    visibility={visibility}
                    type_obj={type_obj}
                    has_fetched={has_fetched}
                    //
                    // handleReady={handleReady}
                />
            </div>
        </div>
    );
}

export default GPAboutGroup;
