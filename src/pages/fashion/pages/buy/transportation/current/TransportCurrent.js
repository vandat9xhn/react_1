import React from 'react';
import PropTypes from 'prop-types';
// 
import { formatNum } from '../../../../../../_some_function/FormatNum';

//
TransportCurrent.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    handleChooseExtraBuy: PropTypes.func,
};
TransportCurrent.defaultProps = {
    name: '',
    title: '',
    price: '',
    handleChooseExtraBuy: () => {},
}

// 
function TransportCurrent(props) {
    const {name, title, price, handleChooseExtraBuy} = props;
    //
    function onChooseChoiceDiv() {
        handleChooseExtraBuy('transport')
    }

    //
    return (
        <div className="TransportCurrent">
            <div className="FashionChoiceCurrent_contain">
                <div className="FashionChoiceCurrent_row">
                    <div>
                        <div className="FashionChoiceCurrent_title label-field">Transportation</div>
                        <div className="text-blue">{name}</div>
                    </div>

                    <div className="FashionChoiceCurrent_right">
                        <div className="label-field">
                            {title}
                        </div>
                        <div className="text-blue">
                            {formatNum(price)}
                        </div>
                        <div className="FashionChoiceCurrent_change" onClick={onChooseChoiceDiv}>
                            Change
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransportCurrent;