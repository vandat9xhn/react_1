import React from 'react';
import PropTypes from 'prop-types';
//
import './AddFriendBtn.scss';

//
AddFriendBtn.propTypes = {
    requesting: PropTypes.bool,
    title_request: PropTypes.string,
    btn_class_requesting: PropTypes.string,

    removing: PropTypes.bool,
    title_remove: PropTypes.string,
    btn_class_removing: PropTypes.string,

    handleRequesting: PropTypes.func,
    handleRemoving: PropTypes.func,
};

AddFriendBtn.defaultProps = {
    btn_class_requesting: '',
    btn_class_removing: '',
    title_remove: 'Remove',
};

//
function AddFriendBtn({
    requesting,
    title_request,
    btn_class_requesting,

    removing,
    title_remove,
    btn_class_removing,

    handleRequesting,
    handleRemoving,
}) {
    //
    return (
        <div className="AddFriendBtn">
            <div className="AddFriendBtn_row">
                <button
                    className={`AddFriendBtn_btn margin-bottom-8px bg-fb-active text-blue btn btn-hv btn-active ${btn_class_requesting}`}
                    disabled={requesting || removing}
                    onClick={handleRequesting}
                >
                    <div className="AddFriendBtn_btn_contain">
                        {requesting ? '...' : title_request}
                    </div>
                </button>

                <button
                    className={`AddFriendBtn_btn bg-blur btn btn-hv btn-active ${btn_class_removing}`}
                    disabled={removing || requesting}
                    onClick={handleRemoving}
                >
                    <div className="AddFriendBtn_btn_contain">
                        {removing ? '...' : title_remove}
                    </div>
                </button>
            </div>
        </div>
    );
}

export default AddFriendBtn;
