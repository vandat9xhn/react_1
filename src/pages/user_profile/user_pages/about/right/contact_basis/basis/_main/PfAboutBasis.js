import React from 'react';
import PropTypes from 'prop-types';
//
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';
// 
import PfAboutGender from '../gender/_main/PfAboutGender';
import PfAboutLang from '../language/_main/PfAboutLang';

//
PfAboutBasis.propTypes = {};

//
function PfAboutBasis(props) {
    //
    const gender_obj = {
        gender: 'male',
        permission: 0,
        title: 'Mail',
    };

    //
    const lang_obj = {
        lang: '',
        permission: 0,
        title: '',
    };

    //
    return (
        <div>
            <h3 className="PfAbout_title">Basis info</h3>

            <div>
                <PfAboutGender gender_obj={gender_obj} />
            </div>

            <div className="PfAbout_add">
                <AddDiv>Add your birth</AddDiv>
            </div>

            <div>

            <PfAboutLang lang_obj={lang_obj} />
            </div>
        </div>
    );
}

export default PfAboutBasis;
