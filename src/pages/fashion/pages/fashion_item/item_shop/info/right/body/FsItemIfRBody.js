import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../../_some_function/FormatNum';
//
import CountDownUpDiv from '../../../../../../../../component/some_div/count_down_up_div/CountDownUpDiv';
// 
import './FsItemIfRBody.scss';

//
FsItemIfRBody.propTypes = {};

//
function FsItemIfRBody({
    new_price,
    old_price,
    count,
    max,
    min,
    disabled,

    countUp,
    countDown,
    beforeCountNum,
    countNum,
    countNumDone,
}) {
    return (
        <div className="FsItemIfRBody">
            <div>
                <div>
                    <span className="label-field">Sale Price:</span>{' '}
                    {formatNum(new_price)} VND <del>{formatNum(old_price)}</del>
                </div>

                <div>
                    <span className="label-field">Total Price:</span>{' '}
                    {formatNum(new_price * count)} VND
                </div>
            </div>

            <div>
                <div className="FashionInfo_amount display-flex align-items-center">
                    {/* <div className="label-field">Amount:</div> */}

                    <div>
                        <CountDownUpDiv
                            disabled={disabled}
                            count={count}
                            max={max}
                            min={min}
                            //
                            countDown={countDown}
                            countUp={countUp}
                            beforeCountNum={beforeCountNum}
                            countNum={countNum}
                            countNumDone={countNumDone}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRBody;
