import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPVcITitleSide.scss';

//
FsPVcITitleSide.propTypes = {};

//
function FsPVcITitleSide({ title_side, can_use }) {
    //
    return (
        <div className="FsPVcITitleSide pos-abs left-0 top-0 trans-y-50per text-white font-10px">
            <div
                className={`FsPVcITitleSide_contain padding-x-4px padding-y-2px line-12px ${
                    can_use ? 'bg-warning' : 'FsPVcITitleSide_end'
                }`}
            >
                {title_side}
            </div>
        </div>
    );
}

export default FsPVcITitleSide;
