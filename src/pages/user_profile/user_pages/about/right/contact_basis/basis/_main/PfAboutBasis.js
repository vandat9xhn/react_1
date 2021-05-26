import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';

// 
PfAboutBasis.propTypes = {
    
};

// 
function PfAboutBasis(props) {
    return (
        <div>
            <h3 className="PfAbout_title">Basis info</h3>

            <div className="PfAbout_add">
                <AddDiv>Select your gender</AddDiv>
            </div>

            <div className="PfAbout_add">
                <AddDiv>Add your birth</AddDiv>
            </div>

            <div className="PfAbout_add">
                <AddDiv>Add a language</AddDiv>
            </div>
        </div>
    );
}

export default PfAboutBasis;