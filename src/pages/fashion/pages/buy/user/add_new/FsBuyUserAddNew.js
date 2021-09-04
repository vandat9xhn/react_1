import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import FsAddAddress from '../../../../components/add_address/_main/FsAddAddress';
// 
import './FsBuyUserAddNew.scss';

// 
FsBuyUserAddNew.propTypes = {};

// 
function FsBuyUserAddNew({ handleBack, handleComplete }) {
    //
    useMakeBodyHidden({});

    //
    return (
        <div className="FsBuyUserAddNew">
            <FsAddAddress
                title="Địa Chỉ Mới"
                handleBack={handleBack}
                handleComplete={handleComplete}
            />
        </div>
    );
}

export default FsBuyUserAddNew;
