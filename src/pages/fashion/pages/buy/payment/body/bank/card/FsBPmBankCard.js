import React from 'react';
import PropTypes from 'prop-types';
//
import CreditCard from '../../../../../../../../component/credit_card/CreditCard';
// 
import './FsBPmBankCard.scss';

//
FsBPmBankCard.propTypes = {};

//
function FsBPmBankCard({
    ix,
    
    discount,
    description,
    logo,
    bg,

    handleChooseCard,
}) {
    //
    function onChooseCard() {
        handleChooseCard(ix);
    }

    //
    return (
        <div
            className="FsBPmBankCard cursor-pointer"
            onClick={onChooseCard}
        >
            <CreditCard
                discount={discount}
                description={description}
                logo={logo}
                bg={bg}
                height_logo="30px"
                width_side_logo="10px"
            />
        </div>
    );
}

export default FsBPmBankCard;
