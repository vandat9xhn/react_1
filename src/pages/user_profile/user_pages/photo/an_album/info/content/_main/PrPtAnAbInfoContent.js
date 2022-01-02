import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
//
import { IconsPermission } from '../../../../../../../../_groups_icon/permission/GroupIconPermission';
import { openScreenPermission } from '../../../../../../../../component/_screen/type/permission/_main/ScreenPermission';
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

    handleChoosePermission,
}) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function onOpenPermission() {
        openScreenPermission({
            openScreenFloor: openScreenFloor,
            permission: permission,
            handleChoosePermission: handleChoosePermission,
        });
    }

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
                <span
                    className="PrPtAnAbInfoContent_permission cursor-pointer"
                    onClick={onOpenPermission}
                >
                    {IconsPermission[permission].Icon}
                </span>
            </div>
        </div>
    );
}

export default PrPtAnAbInfoContent;
