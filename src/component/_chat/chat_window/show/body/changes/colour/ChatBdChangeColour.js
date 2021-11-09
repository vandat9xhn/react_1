import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';
//
import './ChatBdChangeColour.scss';

//
ChatBdChangeColour.propTypes = {};

//
function ChatBdChangeColour({ user, colour_arr }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdChangeColour">
            <span>
                {getYouOrName({ user: user })}
                {' changed the chat theme to '}
            </span>

            <span
                className="ChatBdChangeColour_bg inline-block brs-50"
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${colour_arr.join(
                        ', '
                    )})`,
                }}
            ></span>

            <span>{'.'}</span>
        </div>
    );
}

export default ChatBdChangeColour;
