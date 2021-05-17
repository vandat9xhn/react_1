import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../../picture_name/pic_name_content/PicNameContent';
//
import './ItemNotice.scss';

//
ItemNotice.propTypes = {};

//
function ItemNotice(props) {
    const {
        id,
        ix,
        user,
        content,
        updated_time,
        //
        is_new,
        handleClickItem,
    } = props;
    //
    function onClickItem() {
        handleClickItem(id, ix);
    }

    //
    return (
        <div className="ItemNotice">
            <div
                className={`ItemNotice_contain header_item position-rel ${
                    is_new ? 'bg-film' : ''
                }`}
            >
                <div className="ItemNotice_row">
                    <PicNameContent
                        user={user}
                        handleClick={onClickItem}
                        content={content}
                        is_inline_block={true}
                        
                    />
                </div>

                <div className="ItemNotice_time">
                    {new Date(updated_time).toLocaleString()}
                </div>
            </div>
        </div>
    );
}

export default ItemNotice;
