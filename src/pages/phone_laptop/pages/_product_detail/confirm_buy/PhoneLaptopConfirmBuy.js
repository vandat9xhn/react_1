import React from 'react';
import PropTypes from 'prop-types';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';

import './PhoneLaptopConfirmBuy.scss';
//
PhoneLaptopConfirmBuy.propTypes = {
    
};

function PhoneLaptopConfirmBuy(props) {
    const {onSubmit, is_buying, closeConfirmBuy} = props;

    return (
        <div>
            <div className="PhoneLaptopConfirmBuy_contain scroll-thin brs-5px box-shadow-1">
                <form onSubmit={onSubmit} autoComplete="off">
                    <div>
                        <div className="label-field">Full name</div>
                        <div className="PhoneLaptopConfirmBuy__input">
                            <input type="text" name="full_name" required/>
                        </div>
                    </div>

                    <div>
                        <div className="label-field">Address</div>
                        <div className="PhoneLaptopConfirmBuy__input">
                            <input type="text" name="address" required/>
                        </div>
                    </div>

                    <div>
                        <div className="label-field">Phone</div>
                        <div className="PhoneLaptopConfirmBuy__input">
                            <input
                                type="tel"
                                name="phone"
                                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                placeholder="0123456789"
                                required
                            />
                        </div>
                    </div>

                    <div className="PhoneLaptopConfirmBuy_submit">
                        <button type="submit" disabled={is_buying}>
                            Send information
                        </button>
                    </div>
                </form>

                <div className="PhoneLaptopConfirmBuy_close">
                    <div className="PhoneLaptopConfirmBuy_close-icon brs-50 hv-opacity" onClick={closeConfirmBuy}>
                        <IconsArrow y={400} size_icon="1rem"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneLaptopConfirmBuy;