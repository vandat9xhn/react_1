import React from 'react';
import PropTypes from 'prop-types';
//
import LogoBank from '../logo_bank/LogoBank';
// 
import './CreditCard.scss';

//
CreditCard.propTypes = {
    bg: PropTypes.string,
    discount: PropTypes.string,
    description: PropTypes.string,

    logo: PropTypes.string,
    height_logo: PropTypes.string,
    width_side_logo: PropTypes.string,
};

//
function CreditCard({
    bg,
    discount,
    description,

    logo,
    height_logo,
    width_side_logo,
}) {
    //
    return (
        <div
            className="CreditCard pos-rel wh-100 padding-10px brs-4px text-white"
            style={{ backgroundColor: bg }}
        >
            <div>
                <span className="font-24px">{discount}</span>

                <span className="margin-left-5px font-20px">Giảm</span>
            </div>

            <div className="font-12px">{description}</div>

            <div className="CreditCard_logo pos-abs">
                <LogoBank
                    logo={logo}
                    height={height_logo}
                    width_side={width_side_logo}
                />
            </div>
        </div>
    );
}

export default CreditCard;
