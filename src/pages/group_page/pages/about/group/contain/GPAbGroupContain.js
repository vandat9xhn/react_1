import React from 'react';
import PropTypes from 'prop-types';
//
import GPAboutDescription from '../../../../_components/about_description/GPAboutDescription';
import GPAboutPrivacy from '../../../../_components/about_privacy/GPAboutPrivacy';
import GPAboutVisibility from '../../../../_components/about_visibility/GPAboutVisibility';
import GroupPageAboutPart from '../../../../_components/about_part/GroupPageAboutPart';

//
GPAbGroupContain.propTypes = {};

//
function GPAbGroupContain({
    description,
    privacy,
    visibility,
    type_obj,

    has_fetched,

    handleReady,
}) {
    //
    return (
        <div className={`${has_fetched ? '' : 'h-360px'}`}>
            {description ? (
                <div className="GPAbGroupContain_part">
                    <GPAboutDescription
                        description={description}
                        handleReady={handleReady}
                    />
                </div>
            ) : null}

            <div className="GPAbGroupContain_part">
                <GPAboutPrivacy privacy={privacy} />
            </div>

            <div className="GPAbGroupContain_part">
                <GPAboutVisibility visibility={visibility} />
            </div>

            <div className="GPAbGroupContain_part">
                <GroupPageAboutPart
                    Icon={type_obj.Icon}
                    title={type_obj.title}
                />
            </div>
        </div>
    );
}

export default GPAbGroupContain;
