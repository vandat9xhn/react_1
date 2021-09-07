import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import observeToDo from '../../../../../../../../_some_function/observerToDo';
//
import IconPlusSubtract from '../../../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import FsBPmBankCard from '../card/FsBPmBankCard';
//
import './FsBPmBank.scss';

//
FsBPmBank.propTypes = {};

//
function FsBPmBank({
    bank_card_arr,

    getData_Bank_L,
    openOtherBank,
    handleChooseCard,
}) {
    //
    const ref_main_elm = useRef(null);

    //
    useEffect(() => {
        bank_card_arr.length == 0 &&
            observeToDo({
                elm: ref_main_elm.current,
                callback: getData_Bank_L,
            });
    }, []);

    //
    return (
        <div ref={ref_main_elm} className="FsBPmBank">
            <div className="FsBOmBank_head display-flex align-items-center">
                <div className="FsBPmBank_left color-222 font-18px text-align-center">
                    Chọn thẻ
                </div>

                <div className="FsBPmBank_right">
                    <button
                        className="inline-flex align-items-center border-blur padding-x-10px padding-y-8px cursor-pointer hv-bg-blur font-14px text-third"
                        onClick={openOtherBank}
                    >
                        <IconPlusSubtract
                            size_icon="1rem"
                            stroke="currentColor"
                        />

                        <span className="margin-left-5px">Thẻ khác</span>
                    </button>
                </div>
            </div>

            <div className="FsBPmBank_cards">
                <div className="FsBPmBank_cards_row display-flex flex-wrap">
                    {bank_card_arr.map((item, ix) => (
                        <div
                            key={ix}
                            className="FsBPmBank_cards_item margin-right-10px margin-top-10px"
                        >
                            <FsBPmBankCard
                                ix={ix}
                                discount={item.discount}
                                description={item.description}
                                logo={item.logo}
                                bg={item.bg}
                                handleChooseCard={handleChooseCard}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FsBPmBank;
