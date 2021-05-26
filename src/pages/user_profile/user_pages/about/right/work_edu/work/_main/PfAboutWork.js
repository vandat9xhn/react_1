import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';

// 
PfAboutWork.propTypes = {
    
};

// 
function PfAboutWork(props) {
    return (
        <div>
            <h3 className="PfAbout_title">Work</h3>

            <div className="PfAbout_add">
                <AddDiv>Add a workplace</AddDiv>
            </div>
        </div>
    );
}

export default PfAboutWork;