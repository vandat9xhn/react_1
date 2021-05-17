import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../../picture_name/pic_name_content/PicNameContent';
// 
import './ItemMessage.scss';

//
ItemMessage.propTypes = {};

//
function ItemMessage(props) {
    const {
        id,
        ix,
        user,
        message,
        updated_time,
        //
        count_new,
        handleClickItem,
    } = props;
    
    //
    function onClickItem() {
        handleClickItem(id, ix);
    }

    // 
    return (
        <div className="ItemMessage">
            <div className="ItemMessage_contain header_item position-rel">
                <div className="ItemMessage_row">
                    <PicNameContent
                        user={user}
                        content={message}
                        handleClick={onClickItem}
                    />
                </div>

                <div
                    className={
                        count_new
                            ? 'ItemMessage_contain-new pointer-events-none pos-abs-100 bg-film'
                            : 'display-none'
                    }
                >
                    <div className="ItemMessage_num-new text-red">
                        +{count_new}
                    </div>
                </div>

                <div className="ItemMessage_time">
                    {new Date(updated_time).toLocaleString()}
                </div>
            </div>
        </div>
    );
}

export default ItemMessage;
