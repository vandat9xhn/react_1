import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_FashionPayment_L } from '../../../../../../../api/api_django/fashion/APIFashionToken';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import CircleLoading from '../../../../../../../component/waiting/circle_loading/CircleLoading';
//
import './PaymentChoices.scss';
//
import PaymentChoice from '../choice/PaymentChoice';

//
PaymentChoices.propTypes = {
    handlePayment: PropTypes.func,
    closePayment: PropTypes.func,
};

PaymentChoices.defaultProps = {};

//
function PaymentChoices({ handlePayment, closePayment }) {
    //
    const [payment_state, setPaymentState] = useState({
        payment_arr: [],
        payment_ix: 0,
        has_fetched: false,
    });

    const { payment_arr, payment_ix, has_fetched } = payment_state;

    //
    const ref_payment = useRef(null);

    //
    useEffect(() => {
        observeToDo(ref_payment.current, getData_Payment, 0);
    }, []);

    /* ---------------- GET API -------------- */

    async function getData_Payment() {
        const res = await API_FashionPayment_L({
            page: 1,
            size: 6,
        });

        setPaymentState({
            ...payment_state,
            payment_arr: res.data,
            has_fetched: true,
        });
    }

    //
    function onPayment(new_payment_ix) {
        setPaymentState({
            ...payment_state,
            payment_ix: new_payment_ix,
        });
        handlePayment(payment_arr[new_payment_ix], new_payment_ix);
    }

    //
    return (
        <div ref={ref_payment} className="PaymentChoices">
            <h2 className="FashionChoices_title margin-0 text-secondary">
                Payment
            </h2>

            <div className="PaymentChoices_close" onClick={closePayment}>
                <div className="PaymentChoices_close-icon brs-50 hv-opacity">
                    <IconsArrow y={400} size_icon="1rem" />
                </div>
            </div>

            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <div className="PaymentChoices_body">
                    {payment_arr.map((pm, pm_ix) => (
                        <PaymentChoice
                            key={`PaymentChoices_${pm.id || pm_ix}`}
                            payment_item={pm}
                            payment_ix={pm_ix}
                            is_active={payment_ix == pm_ix}
                            handlePayment={onPayment}
                        />
                    ))}
                </div>
            </div>

            <div className="width-fit-content margin-auto">
                <CircleLoading is_fetching={!has_fetched} />
            </div>
        </div>
    );
}

export default PaymentChoices;
