import React from 'react';
import PropTypes from 'prop-types';
// 
import './ProfileLayoutAboutPreviewItem.scss';

// 
ProfileLayoutAboutPreviewItem.propTypes = {
    
};

// 
function ProfileLayoutAboutPreviewItem({Icon, children}) {
    // 
    return (
        <div className="ProfileLayoutAboutPreviewItem">
            <div className="display-flex align-items-start">
                <div className="ProfileLayoutAboutPreviewItem_icon padding-6px">{Icon}</div>

                <div className="padding-6px">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ProfileLayoutAboutPreviewItem;