import React from 'react';
import PropTypes from 'prop-types';
// 
import { useBool } from '../../../../_hooks/useBool';
// 
import './AddFriendMiniLayout.scss';

//
AddFriendMiniLayout.propTypes = {};

//
function AddFriendMiniLayout({ picture, children, showProfile }) {
    //
    const { is_true, setIsTrue } = useBool();

    // ----

    //
    function handleMouseEnter() {
        setIsTrue(true);
    }

    //
    function handleMouseLeave() {
        setIsTrue(false);
    }

    //
    return (
        <div
            className={`AddFriendMiniLayout pos-rel padding-x-8px brs-6px ${
                is_true ? 'bg-fb' : ''
            }`}
        >
            <div
                className="AddFriendMiniLayout_bg pos-abs-100 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={showProfile}
            ></div>

            <div className="display-flex">
                <img
                    className="AddFriendMiniLayout_pic flex-shrink-0 margin-right-12px margin-y-8px brs-50 object-fit-cover"
                    src={picture}
                    alt=""
                    width="60"
                    height="60"
                />

                <div className="flex-grow-1">{children}</div>
            </div>
        </div>
    );
}

export default AddFriendMiniLayout;
