import React from 'react';
import PropTypes from 'prop-types';
//
import FsPPurProductBase from '../../product/base/FsPPurProductBase';
import FsPPurItemSingle from '../item_single/FsPPurItemSingle';
import HasLinkOrNot from '../../../../../../../../../component/link/has_link_or_not/HasLinkOrNot';

//
FsPPurGift.propTypes = {
    main_items: PropTypes.array,
    gift_items: PropTypes.array,
    has_link: PropTypes.bool,
};

FsPPurGift.defaultProps = {
    has_link: false,
};

//
function FsPPurGift({ main_items, gift_items, has_link }) {
    //
    return (
        <div className="FsPPurGift padding-top-12px">
            <div>
                {main_items.map((item_info, ix) => (
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
                            />
                        </HasLinkOrNot>
                    </div>
                ))}
            </div>

            <div>
                {gift_items.map((item_info, ix) => (
                    <div key={item_info.id} className="margin-bottom-12px">
                        <FsPPurProductBase
                            name={item_info.name}
                            img={item_info.img}
                            model_name={item_info.model_name}
                            quantity={item_info.quantity}
                            label_deal="Quà tặng"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FsPPurGift;
