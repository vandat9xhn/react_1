import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';

// 
PfAboutUniversity.propTypes = {
    
};

// 
function PfAboutUniversity(props) {
    return (
        <div>
            <h3 className="PfAbout_title">university</h3>

            <div className="PfAbout_add">
                <AddDiv>Add a university</AddDiv>
            </div>
        </div>
    );
}

export default PfAboutUniversity;