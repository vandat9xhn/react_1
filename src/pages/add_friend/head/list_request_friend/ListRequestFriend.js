import React from "react";
import PropTypes from "prop-types";
//
import "./ListRequestFriend.scss";

//
ListRequestFriend.propTypes = {
    title: PropTypes.string,
    request: PropTypes.string,
    is_active: PropTypes.bool,
    changeCurrentList: PropTypes.func,
};

//
function ListRequestFriend(props) {
    const { title, request, is_active, changeCurrentList } = props;

    //
    function onChangeCurrentList() {
        changeCurrentList(request);
    }

    //
    return (
        <div className="ListRequestFriend">
            <div
                className={`ListRequestFriend_item label-field brs-5px hv-cl-blue ${
                    is_active ? "text-blue" : ""
                }`}
                onClick={onChangeCurrentList}
                title={title}
            >
                {title}
            </div>
        </div>
    );
}

export default ListRequestFriend;
