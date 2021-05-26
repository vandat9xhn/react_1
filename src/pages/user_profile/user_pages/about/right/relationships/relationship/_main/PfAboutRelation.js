import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';

// 
PfAboutRelation.propTypes = {
    
};

// 
function PfAboutRelation(props) {
    return (
        <div>
            <h3 className="PfAbout_title">Relationship</h3>

            <div className="PfAbout_add">
                <AddDiv>Add a relationships status</AddDiv>
            </div>
        </div>
    );
}

export default PfAboutRelation;