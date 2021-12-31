import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsPermission } from '../../../../../../../../_groups_icon/permission/GroupIconPermission';
//
import './PrPtAnAbInfoContent.scss';

//
PrPtAnAbInfoContent.propTypes = {};

//
function PrPtAnAbInfoContent({
    description,
    post_count,
    item_count,
    permission,
}) {
    //
    return (
        <div
            className={`PrPtAnAbInfoContent ${
                description ? 'padding-top-10px' : ''
            }`}
        >
            <div>{description}</div>

            <div className="font-13px font-600 text-third">
                <span>
                    {post_count} post{post_count >= 2 ? 's' : ''}
                </span>
                {' · '}
                <span>
                    {item_count} item{item_count >= 2 ? 's' : ''}
                </span>
                {' · '}
                <span className="PrPtAnAbInfoContent_permission">
                    {IconsPermission[permission].Icon}
                </span>
            </div>
        </div>
    );
}

export default PrPtAnAbInfoContent;
