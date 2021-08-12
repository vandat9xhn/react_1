import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import './ShopPersonalLeft.scss';

//
ShopPersonalLeft.propTypes = {
    profile_model: PropTypes.number,
    picture: PropTypes.string,
    name: PropTypes.string,
    banner: PropTypes.string,
};

//
function ShopPersonalLeft({profile_model, picture, name, banner}) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    function onOpenMessage() {
        openRoomChat(profile_model);
    }

    //
    return (
        <div className="ShopPersonalLeft pos-rel brs-5px">
            <div
                className="ShopPersonalLeft_bg pos-abs-100"
                style={{ backgroundImage: `url(${banner})` }}
            ></div>

            <div className="ShopPersonalLeft_main pos-rel padding-8px bg-film">
                <div className="ShopPersonalLeft_row display-flex space-between">
                    <div className="ShopPersonalLeft_info flex-grow-1">
                        <div className="ShopPersonalLeft_info-row display-flex">
                            <div className="ShopPersonalLeft_info-left brs-50">
                                <img src={picture} alt="" />
                            </div>

                            <div className="ShopPersonalLeft_info-right">
                                <h1 className="margin-0 font-16px">{name}</h1>

                                <div>
                                    <span>Online</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ShopPersonalLeft_actions">
                        <div className="ShopPersonalLeft_actions-row display-block">
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
