import React from 'react';
import PropTypes from 'prop-types';
//
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';

//
PfAboutName.propTypes = {};

//
function PfAboutName(props) {
    return (
        <div>
            <h3 className="PfAbout_title">Other names</h3>

            <div className="PfAbout_add">
                <AddDiv>Add a nickname, a birth name etc.</AddDiv>
            </div>
        </div>
    );
}

export default PfAboutName;
