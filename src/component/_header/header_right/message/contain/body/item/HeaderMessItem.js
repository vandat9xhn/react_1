import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../../../picture_name/pic_name_content/PicNameContent';
//
import './HeaderMessItem.scss';

//
HeaderMessItem.propTypes = {};

//
function HeaderMessItem({
    id,
    ix,
    user,
    message,
    updated_time,
    //
    count_new,
    handleClickItem,
}) {
    //
    function onClickItem() {
        handleClickItem(id, ix);
    }

    //
    return (
        <div className="HeaderMessItem header_item position-rel">
            <div className="HeaderMessItem_row">
                <PicNameContent
                    user={user}
                    content={message}
                    handleClick={onClickItem}
                />
            </div>

            <div
                className={
                    count_new
                        ? 'pointer-events-none pos-abs-100 bg-film'
                        : 'display-none'
                }
            >
                <div className="HeaderMessItem_num-new text-red">
                    +{count_new}
                </div>
            </div>

            <div className="HeaderMessItem_time">
                {new Date(updated_time).toLocaleString()}
            </div>
        </div>
    );
}

export default HeaderMessItem;
