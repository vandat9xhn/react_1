import React from 'react';
import PropTypes from 'prop-types';
//
import Textarea from '../../../../../input/textarea/Textarea';

//
StoryReply.propTypes = {};

//
function StoryReply({ can_like, chooseListTypeLike }) {
    //
    return (
        <div>
            <div>
                <Textarea
                    text={text}
                    placeholder={placeholder}
                    textarea_class={textarea_class}
                    onChange={onChange}
                    handleBlur={handleBlur}
                    handleFocus={handleFocus}
                    handleSend={handleSend}
                />
            </div>
        </div>
    );
}

export default StoryReply;
