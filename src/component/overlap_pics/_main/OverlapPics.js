import React from 'react';
import PropTypes from 'prop-types';
//
import IconThreeDot from '../../../_icons_svg/icon_three_dot/IconThreeDot';
// 
import OverlapPicsItem from '../item/OverlapPicsItem';
// 
import './OverlapPics.scss';

//
OverlapPics.propTypes = {
    pic_arr: PropTypes.array,
    has_more: PropTypes.bool,
    ItemComponent: PropTypes.func,
    clickMore: PropTypes.func,
};

OverlapPics.defaultProps = {
    ItemComponent: OverlapPicsItem,
};

//
function OverlapPics({ pic_arr, has_more, ItemComponent, clickMore }) {
    //
    return (
        <div className="flex-end row-reverse">
            {has_more && (
                <div className="OverlapPics_item pos-rel">
                    <div className="OverlapPics_item_img">
                        <ItemComponent picture={pic_arr[0].picture} />
                    </div>

                    <div
                        className="pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2"
                        onClick={clickMore}
                    >
                        <IconThreeDot
                            size_icon="15px"
                            color="var(--md-bg-blur)"
                        />
                    </div>
                </div>
            )}

            {pic_arr.slice(has_more ? 1 : 0).map((item, ix) => (
                <div key={ix} className="OverlapPics_item">
                    <div className="OverlapPics_item_img">
                        <ItemComponent picture={item.picture} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OverlapPics;
