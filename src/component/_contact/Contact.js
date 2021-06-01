import React, { useEffect, useState } from 'react';
//
import phone_img from '../../../image/contact phone.png';
import IconsArrow from '../../_icons_svg/icons_arrow/IconsArrow';
//
import './Contact.scss';

//
function Contact(props) {
    //
    const [is_open, setIsOpen] = useState(false);
    const [display_none, setDisplayNone] = useState(
        location.pathname.search(/(profile|add-friend|new-feed)/) > 0
    );
    const [show_number, setShowNumber] = useState(false);

    //
    useEffect(() => {
        setDisplayNone(
            location.pathname.search(/(profile|add-friend|new-feed)/) > 0
        );

    }, [location]);

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
        <div className={display_none ? 'display-none' : 'Contact'}>
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
