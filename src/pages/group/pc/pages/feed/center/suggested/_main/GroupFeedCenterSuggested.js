import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconGroup from '../../../../../../../../_icons_svg/icon_group/IconGroup';
//
// import VirtualScroll from '../../../../../../../../component/virtual_scroll/VirtualScroll';
//
import GroupFeedCardsCenter from '../../../../../../_components/row_cards/center/_main/GroupFeedCardsCenter';

//
GroupFeedCenterSuggested.propTypes = {};

//
function GroupFeedCenterSuggested(props) {
    //
    return (
        // <VirtualScroll>
        <div className="GroupFeedCenterSuggested padding-y-16px brs-8px bg-primary box-shadow-1">
            <h2 className="margin-bottom-10px padding-x-12px font-17px font-500 text-secondary">
                More group
            </h2>

            <div className="margin-bottom-16px padding-x-12px">
                <GroupFeedCardsCenter
                    params_api={{}}
                    BtnElm={
                        <div className="display-flex-center wh-100 bg-fb-active text-blue">
                            <IconGroup size_icon="18px" fill="currentColor" />

                            <span className="margin-left-5px">Join Group</span>
                        </div>
                    }
                />
            </div>

            <div className="display-flex-center">
                <Link to={`/group/category?q=`}>See more group</Link>
            </div>
        </div>
        // </VirtualScroll>
    );
}

export default GroupFeedCenterSuggested;
