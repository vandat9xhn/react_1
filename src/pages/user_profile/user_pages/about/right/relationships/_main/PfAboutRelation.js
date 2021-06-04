import React from 'react';
import PropTypes from 'prop-types';
//
import PfAboutRelationship from '../relationship/_main/PfAboutRelationship';
import PfAboutFamily from '../family/_main/PfAboutFamily';

//
PfAboutRelations.propTypes = {};

//
function PfAboutRelations(props) {
    //
    const relationship_obj = {
        relationship: '',
        permission: 0,
    };

    //
    const family_arr = [];

    const has_fetched = true;

    //
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutRelationship
                    relationship_obj={relationship_obj}
                    has_fetched={has_fetched}
                />
            </div>

            <div className="PfAbout_part">
                <PfAboutFamily
                    family_arr={family_arr}
                    has_fetched={has_fetched}
                />
            </div>
        </div>
    );
}

export default PfAboutRelations;
