import React from 'react';
import PropTypes from 'prop-types';
//
import CUPostChoiceLabelMb from '../../../_components/choice_label/CUPostChoiceLabelMb';
import CUPHVidPicItemMb from '../item/CUPHVidPicItemMb';
import IconsInput from '../../../../../../../_icons_svg/Icons_input/IconsInput';

//
CUPostHomeVidPicMb.propTypes = {};

//
function CUPostHomeVidPicMb({
    vid_pics,

    chooseVidPic,
    openEditPhoto,
    handleDel,
}) {
    //
    return (
        <div className="CUPostHomeVidPicMb">
            <div className="CUPostHomeVidPicMb_choice">
                <CUPostChoiceLabelMb
                    Icon={<IconsInput size_icon="16px" />}
                    title="Photos / Videos"
                    handleClick={chooseVidPic}
                />
            </div>

            <div className="CUPostHomeVidPicMb_contain">
                <div className="CUPostHomeVidPicMb_row display-flex overflow-x-auto scroll-height-0">
                    {vid_pics.map((item, ix) => (
                        <div key={ix} className="CUPostHomeVidPicMb_item padding-x-5px">
                            <CUPHVidPicItemMb
                                ix={ix}
                                vid_pic={item.vid_pic}
                                size={item.size}
                                type={item.type}
                                //
                                openEditPhoto={openEditPhoto}
                                handleDel={handleDel}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CUPostHomeVidPicMb;
