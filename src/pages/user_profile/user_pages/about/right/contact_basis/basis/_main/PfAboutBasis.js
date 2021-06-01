import React from 'react';
import PropTypes from 'prop-types';
// 
import PfAboutGender from '../gender/_main/PfAboutGender';
import PfAboutLang from '../language/_main/PfAboutLang';
import PfAboutBirth from '../birth/_main/PfAboutBirth';

//
PfAboutBasis.propTypes = {};

//
function PfAboutBasis(props) {
    //
    const gender_obj = {
        gender: 'male',
        permission: 0,
        title: 'Male',
    };

    //
    const lang_obj = {
        lang: '',
        permission: 0,
        title: '',
    };

    //
    const birth_obj = {
        birth: '',
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

            <div>
                <PfAboutBirth birth_obj={birth_obj} />
            </div>

            <div>

            <PfAboutLang lang_obj={lang_obj} />
            </div>
        </div>
    );
}

export default PfAboutBasis;
