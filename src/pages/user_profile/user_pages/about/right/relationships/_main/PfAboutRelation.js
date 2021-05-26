import React from 'react';
import PropTypes from 'prop-types';
// 
import PfAboutRelation from '../relationship/_main/PfAboutRelation';
import PfAboutFamily from '../family/_main/PfAboutFamily';

// 
PfAboutRelations.propTypes = {
    
};

// 
function PfAboutRelations(props) {
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutRelation />
            </div>

            <div className="PfAbout_part">
                <PfAboutFamily />
            </div>
        </div>
    );
}

export default PfAboutRelations;