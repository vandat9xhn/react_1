import React from 'react';
import PropTypes from 'prop-types';
//
import VirtualScroll from '../../../../../component/virtual_scroll/VirtualScroll';
//
import FbPageCover from '../cover/FbPageCover';
import FbPageExtra from '../extra/FbPageExtra';
import FbPageActions from '../actions/FbPageActions';
import FbPagePicture from '../picture/FbPagePicture';
import FbPageName from '../name/FbPageName';
// 
import './FbPageInfo.scss';

//
FbPageInfo.propTypes = {};

//
function FbPageInfo({
    id,
    name,
    picture,
    cover,

    has_new_story,

    openCoverPicture,
    openPicture,
}) {
    //
    return (
        <VirtualScroll>
            <div className="FbPageInfo bg-primary">
                <div className="FbPageInfo_cover">
                    <FbPageCover
                        cover={cover}
                        openCoverPicture={openCoverPicture}
                    />
                </div>

                <div className="FbPageInfo_user_action display-flex space-between fb-profile-width-contain">
                    <div className="FbPageInfo_user display-flex">
                        <div className="flex-shrink-0">
                            <FbPagePicture
                                picture={picture}
                                has_new_story={has_new_story}
                                openPicture={openPicture}
                            />
                        </div>

                        <div className="FbPageInfo_name_extra margin-left-16px">
                            <div>
                                <FbPageName name={name} />
                            </div>

                            <div>
                                <FbPageExtra />
                            </div>
                        </div>
                    </div>

                    <div className="FbPageInfo_actions align-self-end">
                        <FbPageActions />
                    </div>
                </div>
            </div>
        </VirtualScroll>
    );
}

export default FbPageInfo;
