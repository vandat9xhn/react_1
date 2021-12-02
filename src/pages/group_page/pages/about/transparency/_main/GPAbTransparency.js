import React from 'react';
import PropTypes from 'prop-types';
//
import GroupPageAboutPart from '../../../../_components/about_part/GroupPageAboutPart';

//
GPAbTransparency.propTypes = {};

//
function GPAbTransparency({ created_time, openGroupHistory }) {
    //
    return (
        <div className="GPAboutGroup gr-page-about-part">
            <h2 className="gr-page-about-title">Transparency</h2>

            <hr className="gr-page-about-hr" />

            <div>
                <GroupPageAboutPart
                    Icon={null}
                    title="History"
                    info={`Group created on ${created_time}`}
                />
            </div>

            <div className="margin-top-10px">
                <button
                    className="display-flex-center w-100per h-36px btn btn-active brs-6px bg-ccc font-600 cursor-pointer hv-bg-hv"
                    type="button"
                    onClick={openGroupHistory}
                >
                    See All
                </button>
            </div>
        </div>
    );
}

export default GPAbTransparency;
