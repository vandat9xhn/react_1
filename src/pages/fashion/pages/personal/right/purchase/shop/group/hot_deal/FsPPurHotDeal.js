import React from 'react';
import PropTypes from 'prop-types';
//
import HasLinkOrNot from '../../../../../../../../../component/link/has_link_or_not/HasLinkOrNot';
// 
import FsPPurItemSingle from '../item_single/FsPPurItemSingle';

//
FsPPurHotDeal.propTypes = {
    item_info_arr: PropTypes.array,
    has_link: PropTypes.bool,
};

FsPPurHotDeal.defaultProps = {
    has_link: false,
};

//
function FsPPurHotDeal({ item_info_arr, has_link }) {
    //
    return (
        <div className="FsPPurHotDeal padding-top-12px">
            {item_info_arr.map((item_info, ix) => (
                <div key={item_info.id} className="margin-bottom-12px">
                    <HasLinkOrNot
                        has_link={has_link}
                        link_to={`/fashion:${item_info.id}`}
                    >
                        <FsPPurItemSingle
                            name={item_info.name}
                            img={item_info.img}
                            model_name={item_info.model_name}
                            quantity={item_info.quantity}
                            old_price={item_info.old_price}
                            new_price={item_info.new_price}
                            label_deal={ix == 0 ? '' : 'Deal sốc'}
                        />
                    </HasLinkOrNot>
                </div>
            ))}
        </div>
    );
}

export default FsPPurHotDeal;
