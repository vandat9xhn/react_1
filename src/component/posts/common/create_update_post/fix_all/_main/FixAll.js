import React from 'react';
import PropTypes from 'prop-types';
//
import FixItem from '../fix_item/FixItem';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FixAll.scss';

//
FixAll.propTypes = {};

//
function FixAll({
    vid_pics,

    closeFixAll,
    deleteAnItem,
    handleChangeContentVidPic,
}) {
    //
    return (
        <div>
            <div className="FixAll_close">
                <div
                    className="FixAll_arrowLeft hv-opacity brs-5px"
                    title="Back"
                    onClick={closeFixAll}
                >
                    <IconsArrow x={200} y={200} />
                </div>
            </div>

            <div className="FixAll_content scroll-thin">
                {vid_pics.map(
                    (item, index) =>
                        item.vid_pic && (
                            <FixItem
                                key={`UpdateCreatePostCmt_fix_${index}`}
                                ix={index}
                                vid_pic={item.vid_pic}
                                content={item.content}
                                deleteAnItem={deleteAnItem}
                                handleChangeContentVidPic={
                                    handleChangeContentVidPic
                                }
                            />
                        )
                )}
            </div>
        </div>
    );
}

export default FixAll;
