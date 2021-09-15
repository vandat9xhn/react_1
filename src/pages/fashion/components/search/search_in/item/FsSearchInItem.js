import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';

//
FsSearchInItem.propTypes = {};

//
function FsSearchInItem({ ix, is_active, where_search, changeWhereSearch }) {
    //
    function onChangeWhereSearch() {
        changeWhereSearch(ix);
    }

    //
    return (
        <div
            className="FsSearchInItem padding-10px cursor-pointer"
            onClick={onChangeWhereSearch}
        >
            <div className="flex-between-center">
                <div>{where_search}</div>

                {is_active ? (
                    <IconSent size_icon="1rem" stroke="var(--fashion-head)" />
                ) : null}
            </div>
        </div>
    );
}

export default FsSearchInItem;
