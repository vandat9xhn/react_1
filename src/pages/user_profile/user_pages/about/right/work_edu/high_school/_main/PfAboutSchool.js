import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';

// 
PfAboutSchool.propTypes = {
    
};

// 
function PfAboutSchool(props) {
    return (
        <div>
            <h3 className="PfAbout_title">High school</h3>

            <div className="PfAbout_add">
                <AddDiv>Add a high school</AddDiv>
            </div>
        </div>
    );
}

export default PfAboutSchool;