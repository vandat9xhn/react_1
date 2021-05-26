import React from 'react';
import PropTypes from 'prop-types';
// 
import PfAboutContact from '../contact/_main/PfAboutContact';
import PfAboutBasis from '../basis/_main/PfAboutBasis';
// 
import './PfAboutContactBasis.scss';

// 
PfAboutContactBasis.propTypes = {
    
};

// 
function PfAboutContactBasis(props) {
    const email_obj = {
        email: 'mymy@gmail.com',
        permission: 0,
    }

    // 
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutContact email_obj={email_obj}/>
            </div>

            <div className="PfAbout_part">
                <PfAboutBasis />
            </div>
        </div>
    );
}

export default PfAboutContactBasis;