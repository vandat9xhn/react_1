import React from 'react';
import PropTypes from 'prop-types';
//
import AboutNoItem from '../../../_component/no_item/AboutNoItem';

import PfAboutGender from '../gender/_main/PfAboutGender';
import PfAboutLang from '../language/_main/PfAboutLang';
import PfAboutBirth from '../birth/_main/PfAboutBirth';

//
PfAboutBasis.propTypes = {};

//
function PfAboutBasis({ gender_obj, birth_obj, lang_obj, has_fetched }) {
    //
    const no_item = !(gender_obj.title || lang_obj.title || birth_obj.title);

    //
    return (
        <div>
            <h3 className="PfAbout_title">Basis info</h3>

            <div>
                <AboutNoItem
                    has_fetched={has_fetched}
                    no_item={no_item}
                    title="No basis info to show"
                >
                    <div>
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
                </AboutNoItem>
            </div>
        </div>
    );
}

export default PfAboutBasis;
