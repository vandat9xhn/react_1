import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';

// 
PfAboutYou.propTypes = {
    
};

// 
function PfAboutYou(props) {
    return (
        <div>
            <h3 className="PfAbout_title">About you</h3>

            <div className="PfAbout_add">
                <AddDiv>Add something about you</AddDiv>
            </div>
        </div>
    );
}

export default PfAboutYou;