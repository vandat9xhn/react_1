import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../_some_function/FormatNum';

//
TransportCurrent.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    handleExtraBuy: PropTypes.func,
};
TransportCurrent.defaultProps = {
    name: '',
    title: '',
    price: '',
    handleExtraBuy: () => {},
};

//
function TransportCurrent({ name, title, price, has_choose, handleExtraBuy }) {
    //
    function openExtraBuyTransport() {
        handleExtraBuy('transport');
    }

    //
    return (
        <div className="TransportCurrent">
            <div className="FashionChoiceCurrent_row flex-between-center">
                <div>
                    <h3 className="FashionChoiceCurrent_title margin-0">
                        Transportation
                    </h3>

                    <div className="text-blue">{name}</div>
                </div>

                <div className="FashionChoiceCurrent_right">
                    <div className={`${has_choose ? '' : 'display-none'}`}>
                        <div className="label-field">{title}</div>

                        <div className="text-blue">{formatNum(price)}</div>
                    </div>

                    <div
                        className="FashionChoiceCurrent_change"
                        onClick={openExtraBuyTransport}
                    >
                        {has_choose ? 'Change' : 'Choose'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransportCurrent;
