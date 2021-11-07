import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_ChatColour_L } from '../../../../../../_handle_api/chat/colour';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
// 
import ScreenBlurHead from '../../../../../_screen/components/part/head/ScreenBlurHead';
//
import ChatColorScreenItem from '../item/ChatColorScreenItem';
// 
import './ChatColorScreen.scss';

//
ChatColorScreen.propTypes = {};

//
function ChatColorScreen({ handleClose, changeColor }) {
    //
    const [state_obj, setStateObj] = useState({
        list_color_arr: [] || [{ colour_arr: [''] }],
        is_fetching: false,
    });

    const { list_color_arr } = state_obj;

    //
    useMakeBodyHidden({ use_z_index: true, screen_z_index: 41 });

    //
    useEffect(() => {
        getData_Color();
    }, []);

    // ------

    //
    async function getData_Color() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                is_fetching: true,
            };
        });

        const data = await handle_API_ChatColour_L();

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                list_color_arr: data,
                is_fetching: false,
            };
        });
    }

    //
    return (
        <div className="ChatColorScreen screen">
            <div className="screen-contain w-360px">
                <div>
                    <ScreenBlurHead
                        title="Colour"
                        is_center={true}
                        closeScreenBlur={handleClose}
                    />
                </div>

                <div className="padding-y-15px">
                    <div className="display-flex flex-wrap">
                        {list_color_arr.map((item, ix) => (
                            <div key={ix} className="ChatColorScreen_item">
                                <ChatColorScreenItem
                                    colour_arr={item.colour_arr}
                                    changeColor={changeColor}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatColorScreen;
