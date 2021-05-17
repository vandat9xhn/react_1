import React from 'react';
import PropTypes from 'prop-types';
//
import BtnAction from '../../../../../../component/button/btn_action/BtnAction';
// 
import './AddFriendBtn.scss';

//
AddFriendBtn.propTypes = {};

//
function AddFriendBtn(props) {
    const {
        requesting,
        title_request,
        btn_class_requesting,
        
        removing,
        btn_class_removing,

        handleRequesting,
        handleRemoving,
    } = props;

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
                        {requesting ? '. . .' : title_request}
                    </BtnAction>
                </div>

                <div className="AddFriendBtn_col AddFriendBtn_right">
                    <BtnAction
                        btn_class={btn_class_removing}
                        disabled={removing || requesting}
                        handleBtnAction={handleRemoving}
                    >
                        {removing ? '. . .' : 'Remove'}
                    </BtnAction>
                </div>
            </div>
        </div>
    );
}

export default AddFriendBtn;
