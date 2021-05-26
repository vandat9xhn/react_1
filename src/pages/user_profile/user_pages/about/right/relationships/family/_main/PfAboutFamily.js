import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';

// 
PfAboutFamily.propTypes = {
    
};

// 
function PfAboutFamily(props) {
    return (
        <div>
            <h3 className="PfAbout_title">Family</h3>

            <div className="PfAbout_add">
                <AddDiv>Add a family member</AddDiv>
            </div>
        </div>
    );
}

export default PfAboutFamily;