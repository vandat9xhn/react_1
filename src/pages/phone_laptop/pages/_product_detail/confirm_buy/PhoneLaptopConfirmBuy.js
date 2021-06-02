import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './PhoneLaptopConfirmBuy.scss';

//
PhoneLaptopConfirmBuy.propTypes = {
    handleSubmit: PropTypes.func,
    closeConfirmBuy: PropTypes.func,
};

//
function PhoneLaptopConfirmBuy({ handleSubmit, closeConfirmBuy }) {
    //
    const ref_name = useRef(null);
    const ref_address = useRef(null);
    const ref_phone = useRef(null);

    //
    function onSubmit(e) {
        e.preventDefault();

        handleSubmit(
            ref_name.current.value,
            ref_address.current.value,
            ref_phone.current.value
        );
    }

    //
    return (
        <div>
            <div className="PhoneLaptopConfirmBuy_contain scroll-thin brs-5px box-shadow-1">
                <form onSubmit={onSubmit} autoComplete="off">
                    <div>
                        <label className="label-field">Full name</label>

                        <div className="PhoneLaptopConfirmBuy__input">
                            <input
                                ref={ref_name}

                                type="text"
                                name="full_name"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="label-field">Address</label>

                        <div className="PhoneLaptopConfirmBuy__input">
                            <input
                                ref={ref_address}
                                type="text"
                                name="address"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="label-field">Phone</label>

                        <div className="PhoneLaptopConfirmBuy__input">
                            <input
                                ref={ref_phone}
                                type="tel"
                                name="phone"
                                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                placeholder="0123456789"
                                required
                            />
                        </div>
                    </div>

                    <div className="PhoneLaptopConfirmBuy_submit">
                        <button type="submit">Send information</button>
                    </div>
                </form>

                <div className="PhoneLaptopConfirmBuy_close">
                    <div
                        className="PhoneLaptopConfirmBuy_close-icon brs-50 hv-opacity"
                        onClick={closeConfirmBuy}
                    >
                        <IconsArrow y={400} size_icon="1rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneLaptopConfirmBuy;
