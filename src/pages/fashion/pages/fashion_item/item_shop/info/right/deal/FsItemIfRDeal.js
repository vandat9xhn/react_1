import React from 'react';
import PropTypes from 'prop-types';

//
FsItemIfRDeal.propTypes = {
    deal_label: PropTypes.string,
};

//
function FsItemIfRDeal({ deal_label }) {
    //
    return (
        <div className="FsItemIfRDeal">
            <div className="display-flex">
                <div className="fashion-item-label">
                    <span>Deal Sốc</span>
                </div>

                <div className="padding-8px bg-heart-through">
                    <span>{deal_label}</span>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRDeal;
