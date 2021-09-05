import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
//
import IconsArrow from '../../_icons_svg/icons_arrow/IconsArrow';
//
import phone_img from '../../../image/contact phone.png';
import './Contact.scss';

//
function Contact(props) {
    //
    const [is_open, setIsOpen] = useState(false);
    const [show_number, setShowNumber] = useState(false);

    //
    function toggleOpen() {
        setIsOpen(!is_open);
        show_number && setShowNumber(false);
    }

    //
    function showNumberPhone() {
        !show_number && setShowNumber(true);
    }

    //
    return (
        <div
            className={
                !location.pathname.includes('phone')
                    ? 'display-none'
                    : 'Contact'
            }
        >
            <div className="Contact_close">
                <div onClick={toggleOpen} title={is_open ? 'Close' : 'Contact'}>
                    {is_open ? <IconsArrow x={400} /> : <IconsArrow x={200} />}
                </div>
            </div>

            <br />
            <br />

            <div className={`Contact_main ${is_open ? '' : 'Contact_hide'}`}>
                <div className="Contact_phone">
                    <div
                        className="Contact_phone-number"
                        onClick={showNumberPhone}
                    >
                        <img
                            className={is_open ? 'Contact_phone-img' : ''}
                            src={phone_img}
                            alt=""
                        />
                    </div>

                    <div
                        className={is_open ? 'Contact_phone-animation' : ''}
                    ></div>
                </div>

                {/* Online */}
                <div className="Contact_web">
                    <div className="Contact_web-online">FB</div>

                    <div className="Contact_web-online">ZL</div>

                    <div className="Contact_web-online">TT</div>
                </div>

                {/* number phone */}
                <div
                    className={`Contact_number ${
                        show_number ? '' : 'display-none'
                    }`}
                >
                    <div className="font-500">0987.654.321</div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Contact);
