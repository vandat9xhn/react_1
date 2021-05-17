import React from 'react';
// 
import './MainFooter.scss';

//
function MainFooter() {
    return (
        <div className="MainFooter">
            <div className="MainFooter_contain">
                {/* row main */}
                <div className="MainFooter_row">
                    <div className="MainFooter_col">
                        <div>Privacy</div>
                        <div>How to buying</div>
                        <div>Delivery and payments</div>
                        <div>Service quality</div>
                    </div>

                    <div className="MainFooter_col">
                        <div>Introduce</div>
                        <div>Application</div>
                    </div>

                    <div className="MainFooter_col">
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

                {/* row title */}
                <div className="App_title bg-loader">
                    <span className="color-react">ReactJs</span>
                    <span className="active-color">{` - `}</span>
                    <span className="color-django">Django</span>
                </div>
            </div>
        </div>
    );
}

export default MainFooter;
