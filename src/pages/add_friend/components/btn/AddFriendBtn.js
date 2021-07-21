import React from 'react';
import PropTypes from 'prop-types';
//
import BtnAction from '../../../../component/button/btn_action/BtnAction';
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
    btn_class_requesting: 'btn btn-active btn-hv cursor-pointer',

    title_remove: 'Remove',
    btn_class_removing: 'btn btn-active btn-hv cursor-pointer',
}

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
        <div>
            <div className="AddFriendBtn_row">
                <div className="AddFriendBtn_col AddFriendBtn_left">
                    <BtnAction
                        btn_class={btn_class_requesting}
                        disabled={requesting || removing}
                        handleBtnAction={handleRequesting}
                    >
                        {requesting ? '...' : title_request}
                    </BtnAction>
                </div>

                <div className="AddFriendBtn_col AddFriendBtn_right">
                    <BtnAction
                        btn_class={btn_class_removing}
                        disabled={removing || requesting}
                        handleBtnAction={handleRemoving}
                    >
                        {removing ? '...' : title_remove}
                    </BtnAction>
                </div>
            </div>
        </div>
    );
}

export default AddFriendBtn;
