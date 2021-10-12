import React from 'react';
import PropTypes from 'prop-types';
//
import PortalAtBody from '../../../../../../../../portal/at_body/PortalAtBody';
import PostTagUserAdd from '../../../../../../tag_user_add/_main/PostTagUserAdd';
//
import './CuPFRightTagAdd.scss';

//
CuPFRightTagAdd.propTypes = {};

//
function CuPFRightTagAdd({
    border_x,
    border_y,
    contain_x,
    contain_y,
    is_show,

    handleTagUser,
}) {
    //
    return (
        <React.Fragment>
            <div
                className={`CuPFRightTagAdd pos-abs ${
                    is_show ? '' : 'display-none'
                }`}
                style={{
                    top: border_y,
                    left: border_x,
                    transform: `translate(-50%, -50%)`,
                }}
            >
                <div className="CuPFRightTagAdd_border brs-4px"></div>
            </div>

            <PortalAtBody>
                <div
                    className={`CuPFRightTagAdd_contain pos-abs trans-x--50per ${
                        is_show ? '' : 'display-none'
                    }`}
                    style={{
                        left: `${contain_x}px`,
                        top: `${contain_y}px`,
                    }}
                >
                    <PostTagUserAdd handleTagUser={handleTagUser} />
                </div>
            </PortalAtBody>
        </React.Fragment>
    );
}

export default CuPFRightTagAdd;
