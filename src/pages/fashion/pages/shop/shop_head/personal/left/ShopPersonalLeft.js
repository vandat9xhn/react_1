import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import './ShopPersonalLeft.scss';

//
ShopPersonalLeft.propTypes = {
    profile_user: PropTypes.number,
    picture: PropTypes.string,
    name: PropTypes.string,
    banner: PropTypes.string,
};

//
function ShopPersonalLeft(props) {
    const { profile_user, picture, name, banner } = props;
    //
    const { openMessage } = useContext(context_api);
    //
    function onOpenMessage() {
        openMessage(profile_user);
    }

    //
    return (
        <div className="ShopPersonalLeft position-rel brs-5px">
            <div
                className="ShopPersonalLeft_bg pos-abs-100"
                style={{ backgroundImage: `url(${banner})` }}
            ></div>

            <div className="ShopPersonalLeft_main position-rel bg-film">
                <div className="ShopPersonalLeft_row">
                    <div className="ShopPersonalLeft_info">
                        <div className="ShopPersonalLeft_info-row">
                            <div className="ShopPersonalLeft_info-left brs-50">
                                <img src={picture} alt="" />
                            </div>

                            <div className="ShopPersonalLeft_info-right">
                                <div className="label-field">{name}</div>

                                <div>
                                    <span>Online</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ShopPersonalLeft_actions">
                        <div className="ShopPersonalLeft_actions-row">
                            <div className="ShopPersonalLeft_actions-elm">
                                Follow
                            </div>

                            <div
                                className="ShopPersonalLeft_actions-elm"
                                onClick={onOpenMessage}
                            >
                                Chat
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopPersonalLeft;
