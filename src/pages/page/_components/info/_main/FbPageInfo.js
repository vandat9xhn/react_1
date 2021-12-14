import React from 'react';
import PropTypes from 'prop-types';
//
import VirtualScroll from '../../../../../component/virtual_scroll/VirtualScroll';
//
import FbPageCover from '../cover/FbPageCover';
import FbPageInfoExtra from '../extra/FbPageInfoExtra';
import FbPageActions from '../actions/FbPageActions';
import FbPagePicture from '../picture/FbPagePicture';
import FbPageName from '../name/FbPageName';
//
import './FbPageInfo.scss';

//
FbPageInfo.propTypes = {};

//
function FbPageInfo({
    page_id,
    // id,
    name,
    picture,
    cover,
    has_new_story,

    info_extra_1,
    info_extra_2,

    action_main_arr,
    action_arr,
    
    has_liked,
    has_followed,

    openCoverPicture,
    openPicture,
    handleAction,
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
                                <FbPageInfoExtra
                                    info_extra_1={info_extra_1}
                                    info_extra_2={info_extra_2}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="FbPageInfo_actions align-self-end">
                        <FbPageActions
                            page_id={page_id}
                            action_main_arr={action_main_arr}
                            action_arr={action_arr}
                            has_liked={has_liked}
                            has_followed={has_followed}
                            handleAction={handleAction}
                        />
                    </div>
                </div>
            </div>
        </VirtualScroll>
    );
}

export default FbPageInfo;
