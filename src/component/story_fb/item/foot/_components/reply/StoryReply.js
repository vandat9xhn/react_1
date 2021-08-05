import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import IconsAction from '../../../../../../_icons_svg/icons_action/IconsAction';
//
import Textarea from '../../../../../input/textarea/Textarea';
//
import './StoryReply.scss';

//
StoryReply.propTypes = {};

//
function StoryReply({
    text,
    handleFocus,
    handleBlur,
    handleChange,
    onSend,
    handleClickIconSend,
}) {
    //
    return (
        <div className="StoryReply bg-loader">
            <div className="display-flex align-items-center">
                <div className="flex-grow-1">
                    <Textarea
                        text={text}
                        placeholder="Reply..."
                        textarea_class="StoryReply_textarea overflow-y-scroll scroll-thin text-white"
                        handleFocus={IS_MOBILE ? undefined : handleFocus}
                        handleBlur={IS_MOBILE ? undefined : handleBlur}
                        onChange={handleChange}
                        handleSend={onSend}
                    />
                </div>

                <div
                    className={`StoryReply_send ${
                        IS_MOBILE ? '' : 'display-none'
                    } ${text.trim() ? 'nav-active' : ''}`}
                >
                    <div
                        className="StoryReply_send_contain display-flex-center brs-50 hv-bg-icon cursor-pointer"
                        onClick={handleClickIconSend}
                    >
                        <IconsAction x={200} y={200} size_icon="1.25rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryReply;
