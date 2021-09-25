import React from 'react';
import PropTypes from 'prop-types';
//
import IconsProfile from '../../../../../../../_icons_svg/icons_profile/IconsProfile';

//
PLDetailMarket.propTypes = {
    in_stock: PropTypes.bool,
    is_coming: PropTypes.bool,
    use_see_market: PropTypes.bool,
    openDetailMarket: PropTypes.func,
};

PLDetailMarket.defaultProps = {
    use_see_market: true,
};

//
function PLDetailMarket({
    in_stock,
    is_coming,
    use_see_market,
    openDetailMarket,
}) {
    //
    return (
        <div className="PLDetailMarket font-14px">
            <div className=" text-upper font-700">
                {is_coming ? (
                    <span className="text-gold text-upper">Hàng sắp về</span>
                ) : in_stock ? (
                    <span className="text-green">Còn hàng</span>
                ) : (
                    <span className="text-red">Ngừng kinh doanh</span>
                )}
            </div>

            {in_stock && use_see_market ? (
                <div
                    className="margin-top-5px text-blue cursor-pointer"
                    onClick={openDetailMarket}
                >
                    <IconsProfile size_icon="16px" />

                    <span className="margin-left-10px">
                        Xem siêu thị có hàng
                    </span>
                </div>
            ) : null}
        </div>
    );
}

export default PLDetailMarket;
