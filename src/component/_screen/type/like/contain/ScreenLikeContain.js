import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useMultiDataKey } from '../../../../../_hooks/useMultiDataKey';
//
import ScreenBlurShowMore from '../../../components/part/foot/ScreenBlurShowMore';
import ScreenLikeHead from '../head/ScreenLikeHead';
import ScreenLikeItem from '../item/ScreenLikeItem';
//
import './ScreenLikeContain.scss';

//
ScreenLikeContain.propTypes = {
    ItemComponent: PropTypes.func,
};

ScreenLikeContain.defaultProps = {
    ItemComponent: ScreenLikeItem,
};

//
function ScreenLikeContain({
    reacted_count_arr,
    use_close = true,
    
    c_key,
    data_arr,
    count,
    has_fetched,
    is_fetching,

    ItemComponent,
    item_props,

    handleChangeKey,
    handleShowMore,
    closeScreen,
}) {
    

    //
    return (
        <div className="ScreenLikeContain">
            <div className="ScreenLikeContain_head border-bottom-blur">
                <ScreenLikeHead
                    type_like={c_key}
                    reacted_count_arr={reacted_count_arr}
                    use_close={use_close}
                    changeListTypeLike={handleChangeKey}
                    closeScreen={closeScreen}
                />
            </div>

            <div
                className={`ScreenBlur_body ${
                    has_fetched ? '' : 'display-none'
                }`}
            >
                <div className="ScreenBlur_body_contain scroll-thin">
                    {data_arr.map((item, ix) => (
                        <div key={ix} className="ScreenLikeContain_item">
                            <ItemComponent {...item} {...item_props} />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <ScreenBlurShowMore
                    is_show_more={count > data_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    );
}

export default ScreenLikeContain;
