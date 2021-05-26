import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';
// 
import PfAboutEmail from '../email/_main/PfAboutEmail';

// 
PfAboutContact.propTypes = {};

// 
function PfAboutContact({email_obj}) {


    // 
    return (
        <div className="PfAboutContact">
            <h3 className="PfAbout_title">Contact info</h3>

            <div className="PfAbout_add">
                <AddDiv>Add a mobile phone</AddDiv>
            </div>

            <div className="PfAbout_add">
                <AddDiv>Add your address</AddDiv>
            </div>

            <div>
                <PfAboutEmail email_obj={email_obj} />
            </div>
        </div>
    );
}

export default PfAboutContact;
