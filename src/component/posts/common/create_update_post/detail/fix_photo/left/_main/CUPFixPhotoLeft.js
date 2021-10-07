import React from 'react';
import PropTypes from 'prop-types';
//
import TextareaCaption from '../../../../../../../input/textarea_caption/TextareaCaption';
//
import CUPostFixChoice from '../../../../_components/fix_choice/CUPostFixChoice';
import CUPFixPhotoLeftAlt from '../alt_img/_main/CUPFixPhotoLeftAlt';
import CUPFPLeftTagUser from '../tag_user/CUPFPLeftTagUser';

//
const CHOICE_ARR = [
    {
        title: 'Crop',
        Icon: null,
        order: 0,
    },
    {
        title: 'Rotate',
        Icon: null,
        order: 1,
    },
    {
        title: 'Tag photo',
        Icon: null,
        order: 2,
    },
    {
        title: 'Alternative text',
        Icon: null,
        order: 3,
    },
];

//
CUPFixPhotoLeft.propTypes = {};

//
function CUPFixPhotoLeft({
    vid_pic_count,
    caption,
    choice_ix,

    user_tag_arr,
    alt,
    alt_ix,

    handleChangeCaption,
    clickFixChoice,
    handleDelTag,
    chooseAlt,
    handleChangeAlt,
}) {
    //
    return (
        <div className="CUPFixPhotoLeft display-flex flex-col">
            {vid_pic_count == 1 ? null : (
                <div className="CUPFixPhotoLeft_part margin-bottom-15px">
                    <TextareaCaption
                        value={caption}
                        textarea_class="CUPFixPhotoLeft_caption_text padding-x-16px padding-y-3px scroll-thin"
                        onChange={handleChangeCaption}
                        textarea_props={{ rows: 2 }}
                    />
                </div>
            )}

            {CHOICE_ARR.map((item, ix) => (
                <div
                    key={ix}
                    className="CUPFixPhotoLeft_part font-17px font-600"
                    style={{ order: item.order }}
                >
                    <CUPostFixChoice
                        title={item.title}
                        Icon={item.Icon}
                        ix={ix}
                        is_active={ix == choice_ix}
                        clickFixChoice={clickFixChoice}
                    />
                </div>
            ))}

            {user_tag_arr.length > 0 ? (
                <div className="padding-15px" style={{ order: 2 }}>
                    <CUPFPLeftTagUser
                        user_tag_arr={user_tag_arr}
                        handleDelTag={handleDelTag}
                    />
                </div>
            ) : null}

            {choice_ix == 3 ? (
                <div className="margin-top-10px" style={{ order: 3 }}>
                    <CUPFixPhotoLeftAlt
                        alt={alt}
                        alt_ix={alt_ix}
                        chooseAlt={chooseAlt}
                        handleChangeAlt={handleChangeAlt}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default CUPFixPhotoLeft;
