import React from 'react';
import PropTypes from 'prop-types';
//
import CUPostFixHead from '../../_components/fix_head/CUPostFixHead';
import CUPostMoreInputItem from '../item/CUPostMoreInputItem';
// 
import './CUPostMoreInput.scss';
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
import IconFaceGray from '../../../../../../_icons_svg/icons_like/_Icon_face_gray/IconFaceGray';
import IconsPost from '../../../../../../_icons_svg/icons_post/IconsPost';

//
CUPostMoreInput.propTypes = {};

//
function CUPostMoreInput({
    vid_pic_checked,
    tag_checked,
    emoji_checked,

    openCUPostPart,
    handleMoreInputVidPic,
}) {
    //
    function handleBack() {
        openCUPostPart({ part: 'home' });
    }

    // ----

    //
    const more_input = [
        {
            name: 'vid_pic',
            title: 'Photo/Video',
            icon: <IconsInput size_icon="24px" />,
            checked: vid_pic_checked,
            handleMoreInput: handleMoreInputVidPic,
        },
        {
            name: 'tag',
            title: 'Tag people',
            icon: <IconsPost />,
            checked: tag_checked,
            handleMoreInput: () => openCUPostPart({ part: 'tag' }),
        },
        {
            name: 'emoji',
            title: 'Feeling/Activity',
            icon: <IconFaceGray stroke="var(--gold)" />,
            checked: emoji_checked,
            handleMoreInput: () => openCUPostPart({ part: 'emoji' }),
        },
        {
            name: 'check_in',
            title: 'Check in',
            icon: null,
            checked: false,
            handleMoreInput: handleBack,
        },

        {
            name: 'q_a',
            title: 'Host a Q&A',
            icon: null,
            checked: false,
            handleMoreInput: handleBack,
        },
        {
            name: 'event',
            title: 'Life event',
            icon: null,
            checked: false,
            handleMoreInput: handleBack,
        },
        {
            name: 'gif',
            title: 'GIF',
            icon: null,
            checked: false,
            handleMoreInput: handleBack,
        },
        {
            name: 'live',
            title: 'Live video',
            icon: null,
            checked: false,
            handleMoreInput: handleBack,
        },
    ];

    //
    return (
        <div className="CUPostMoreInput cu-post-part">
            <div>
                <CUPostFixHead
                    title="Add to your post"
                    handleBack={handleBack}
                />
            </div>

            <div className="padding-5px font-17px font-600">
                <div className="display-flex flex-wrap">
                    {more_input.map((item, ix) => (
                        <div key={ix} className="w-50per padding-5px">
                            <CUPostMoreInputItem
                                title={item.title}
                                icon={item.icon}
                                checked={item.checked}
                                handleMoreInput={item.handleMoreInput}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CUPostMoreInput;
