import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';

// 
PfAboutPlace.propTypes = {
    
};

// 
function PfAboutPlace(props) {
    return (
        <div>
            <h3 className="PfAbout_title">Places lived</h3>

            <div className="PfAbout_add">
                <AddDiv>Add hometown</AddDiv>
            </div>

            <div className="PfAbout_add">
                <AddDiv>Add city</AddDiv>
            </div>
        </div>
    );
}

export default PfAboutPlace;