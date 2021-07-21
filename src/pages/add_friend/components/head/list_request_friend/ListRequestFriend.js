import React from 'react';
import PropTypes from 'prop-types';
//
import './ListRequestFriend.scss';

//
ListRequestFriend.propTypes = {
    title: PropTypes.string,
    request: PropTypes.string,
    is_active: PropTypes.bool,
    changeTypeFriend: PropTypes.func,
};

//
function ListRequestFriend({ title, request, is_active, changeTypeFriend }) {
    //
    function onChangeCurrentList() {
        changeTypeFriend(request);
    }

    //
    return (
        <div className="ListRequestFriend">
            <h4
                className={`margin-0 padding-8px brs-5px hv-bg-blur cursor-pointer ${
                    is_active ? 'text-blue' : ''
                }`}
                onClick={onChangeCurrentList}
                title={title}
            >
                {title}
            </h4>
        </div>
    );
}

export default ListRequestFriend;
