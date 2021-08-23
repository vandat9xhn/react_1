import React from 'react';
import PropTypes from 'prop-types';
//
import FsIRateBriefing from '../briefing/FsIRateBriefing';
import FsIRateFilters from '../filters/_main/FsIRateFilters';
//
import './FsIRateOverview.scss';

//
FsIRateOverview.propTypes = {
    ...FsIRateFilters.propTypes,
};

//
function FsIRateOverview({ filter_ix, handleFilterRate }) {
    //
    return (
        <div className="FsIRateOverview">
            <div className="display-flex">
                <div className="FsIRateOverview_left">
                    <FsIRateBriefing />
                </div>

                <div>
                    <FsIRateFilters
                        filter_ix={filter_ix}
                        handleFilterRate={handleFilterRate}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsIRateOverview;
