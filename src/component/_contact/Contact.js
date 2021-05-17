import React, { useState } from 'react';
// import { withRouter } from 'react-router';
//
import phone_img from '../../../image/contact phone.png';
import IconsArrow from '../../_icons_svg/icons_arrow/IconsArrow';
//
import './Contact.scss';

//
function Contact() {
    const [is_open, setIsOpen] = useState(false);
    const [show_number, setShowNumber] = useState(false);

    // toggle open
    function toggleOpen() {
        setIsOpen(!is_open);
        show_number && setShowNumber(false);
    }

    // number phone
    function showNumberPhone() {
        !show_number && setShowNumber(true);
    }

    return (
        <div
            className={
                location.pathname.search(/(profile|add-friend|new-feed)/) > 0
                    ? 'display-none'
                    : 'Contact'
            }
        >
            <div className="Contact_close">
                <div
                    onClick={toggleOpen}
                    title={is_open ? 'Close' : 'Contact'}
                >
                    {is_open ? <IconsArrow x={400} /> : <IconsArrow x={200} />}
                </div>
            </div>

            <br />
            <br />

            <div className={`Contact_main ${is_open ? '' : 'Contact_hide'}`}>
                {/* Phone */}
                <div className="Contact_phone">
                    <div
                        className="Contact_phone-number"
                        onClick={showNumberPhone}
                        title="Phone number"
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
                    <div className="Contact_web-online" title="Facebook">
                        FB
                    </div>

                    <div className="Contact_web-online" title="Zalo">
                        ZL
                    </div>

                    <div className="Contact_web-online" title="Twitter">
                        TT
                    </div>
                </div>

                {/* number phone */}
                <div
                    className={`Contact_number ${
                        show_number ? '' : 'display-none'
                    }`}
                >
                    <div className="label-field">0987.654.321</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
