import React from 'react';
import PropTypes from 'prop-types';
// 
import './FooterBody.scss';

// 
FooterBody.propTypes = {};

// 
function FooterBody(props) {
    return (
        <div className="FooterBody padding-8px bg-primary">
            <div className="FooterBody_row display-flex space-between">
                <div className="Footer_col">
                    <div>Privacy</div>
                    <div>How to buying</div>
                    <div>Delivery and payments</div>
                    <div>Service quality</div>
                </div>

                <div className="Footer_col">
                    <div>Introduce</div>
                    <div>Application</div>
                </div>

                <div className="Footer_col">
                    <div>
                        Working time: <b>8:00 - 22:00</b>
                    </div>
                    <div>
                        Phone: <b>1800.0001</b>
                    </div>
                    <div>
                        Address: <b>Ha Dong - Ha Noi</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBody;
