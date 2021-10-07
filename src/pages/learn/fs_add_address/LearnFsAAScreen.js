import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../_hooks/useMakeBodyHidden';
// 
import FsAddAddress from '../../fashion/components/add_address/_main/FsAddAddress';
// 
import './LearnFsAAScreen.scss';

//
LearnFsAAScreen.propTypes = {
    ...FsAddAddress.propTypes,
};

//
function LearnFsAAScreen({
    title,
    old_user_name,
    old_phone,
    old_current_address,
    old_specific,
    old_type,

    is_default,
    
    handleBack,
    handleComplete,
}) {
    //
    useMakeBodyHidden({
        hidden_header: false,
        // blur_header: true,
    });

    //
    return (
        <div className="LearnFsAAScreen">
            <FsAddAddress
                title={title}
                old_user_name={old_user_name}
                old_phone={old_phone}
                old_current_address={old_current_address}
                old_specific={old_specific}
                old_type={old_type}
                is_default={is_default}
                handleBack={handleBack}
                handleComplete={handleComplete}
            />
        </div>
    );
}

export default LearnFsAAScreen;
