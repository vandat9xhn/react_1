import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconGroup from '../../../../../../../../_icons_svg/icon_group/IconGroup';
//
import GroupRowCardsCenter from '../../../../../../_components/row_cards/center/_main/GroupRowCardsCenter';

//
GroupFeedCenterSuggested.propTypes = {};

//
function GroupFeedCenterSuggested(props) {
    //
    return (
        <div className="GroupFeedCenterSuggested padding-y-16px brs-8px-pc bg-primary box-shadow-1">
            <h2 className="margin-bottom-10px padding-x-12px font-17px font-600 text-secondary">
                More group
            </h2>

            <div className="margin-bottom-16px padding-x-12px">
                <GroupRowCardsCenter
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
    );
}

export default GroupFeedCenterSuggested;
