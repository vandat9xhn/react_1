import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
//
import './FsItemIfRDeal.scss';

//
FsItemIfRDeal.propTypes = {
    deal_label: PropTypes.string,
};

//
function FsItemIfRDeal({}) {
    //
    const { item_info } = useContext(context_fashion_item);

    const { label } = item_info.deal_info;

    //
    return (
        <div className="FsItemIfRDeal">
            <div className="fashion-item-row">
                <div className="fashion-item-label">
                    <span className="text-third">Deal Sốc</span>
                </div>

                <div className="display-flex">
                    <div className="fashion-value-padding bg-fashion-heart">
                        <span className="font-14px color-fashion">{label}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRDeal;
