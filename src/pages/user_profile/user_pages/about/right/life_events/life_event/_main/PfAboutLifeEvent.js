import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';

// 
PfAboutLifeEvent.propTypes = {
    
};

// 
function PfAboutLifeEvent(props) {
    return (
        <div>
            <h3 className="PfAbout_title">Life events</h3>

            <div className="PfAbout_add">
                <AddDiv>Add a life event</AddDiv>
            </div>
        </div>
    );
}

export default PfAboutLifeEvent;