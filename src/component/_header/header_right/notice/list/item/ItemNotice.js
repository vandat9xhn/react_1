import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../../picture_name/pic_name_content/PicNameContent';
//
import './ItemNotice.scss';

//
ItemNotice.propTypes = {};

//
function ItemNotice({
    id,
    ix,
    user,
    content,
    updated_time,

    is_new,
    handleClickItem,
}) {
    //
    function onClickItem() {
        handleClickItem(id, ix);
    }

    //
    return (
        <div className={`ItemNotice ${
            is_new ? 'bg-shadow-5' : ''
        }`}>
            <Link to={'/posts/' + id} onClick={onClickItem}>
                <div
                    className={`ItemNotice_contain header_item pos-rel `}
                >
                    <div className="ItemNotice_row">
                        <PicNameContent
                            user={user}
                            content={content}
                            is_inline_block={true}
                        />
                    </div>

                    <div className="ItemNotice_time">
                        {new Date(updated_time).toLocaleString()}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ItemNotice;
