import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import IconDiv from '../../../../../component/some_div/icon_div/IconDiv';
// 
import './NewFeedGroupConversation.scss';

//
NewFeedGroupConversation.propTypes = {};

//
function NewFeedGroupConversation(props) {
    return (
        <div className="NewFeedGroupConversation">
            <div>
                <h3 className="text-secondary">Group conversation</h3>
            </div>

            <div>
                <div className="NewFeed_side_item">
                    <IconDiv Icon={IconsArrow} y={400} size_icon="1rem">
                        Create New Group
                    </IconDiv>
                </div>
            </div>
        </div>
    );
}

export default NewFeedGroupConversation;
