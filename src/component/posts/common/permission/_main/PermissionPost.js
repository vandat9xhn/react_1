import React from 'react';
import PropTypes from 'prop-types';
//
import UnitTime from '../../../../../_some_function/UnitTime';
import PermissionDiv from '../../../../some_div/permission_div/PermissionDiv';
//
import './PermissionPost.scss';

//
PermissionPost.propTypes = {
    permission_post: PropTypes.number,
    updated_time: PropTypes.string,
};

PermissionPost.defaultProps = {
    permission_post: 0,
};

//
function PermissionPost(props) {
    const { permission_post, updated_time } = props;
    //
    return (
        <div className="PermissionPost font-italic">
            <div className="inline-flex align-items-center">
                <span
                    className="PermissionPost_time"
                    title={new Date(updated_time).toLocaleString()}
                >
                    {UnitTime(
                        new Date().getTime() - new Date(updated_time).getTime()
                    )}
                </span>

                <span className="PermissionPost_delimiter">*</span>

                <span className="PermissionPost_permission pointer-events-none">
                    <PermissionDiv permission={permission_post} />
                </span>
            </div>
        </div>
    );
}

export default PermissionPost;
