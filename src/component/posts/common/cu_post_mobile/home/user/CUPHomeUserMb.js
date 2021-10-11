import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../../picture_name/pic_name_content/PicNameContent';
import BtnPermission from '../../../../../button/permission/BtnPermission';
// 
import './CUPHomeUserMb.scss';

//
CUPHomeUserMb.propTypes = {};

//
function CUPHomeUserMb({ user, permission, openPermission }) {
    //
    return (
        <div className="CUPHomeUserMb padding-10px">
            <PicNameContent
                user={user}
                content={
                    <BtnPermission
                        permission={permission}
                        show_title={true}
                        openPermission={openPermission}
                    />
                }
            />
        </div>
    );
}

export default CUPHomeUserMb;
