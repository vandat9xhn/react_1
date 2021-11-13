import React from 'react';
import PropTypes from 'prop-types';
//
import { VideoOrImage } from '../../../../../../../_some_function/VideoOrImage';
//
import { IconsPermission } from '../../../../../../../_groups_icon/permission/GroupIconPermission';
//
import './FbScPagePostItemContent.scss';

//
FbScPagePostItemContent.propTypes = {};

//
function FbScPagePostItemContent({
    content,
    vid_pics,
    vid_pic_count,

    permission,
    updated_time,
}) {
    //
    return (
        <div className="FbScPagePostItemContent text-05">
            <div className="display-flex">
                <div className="flex-grow-1 wk-box-vertical line-clamp-4 padding-5px overflow-hidden">
                    <span>{new Date(updated_time).toDateString()}</span>

                    <span> · </span>

                    <span className="inline-flex">
                        {IconsPermission[permission].Icon}
                    </span>

                    <span> · </span>

                    <span>{content}</span>
                </div>

                {vid_pic_count > 0 ? (
                    <div className="flex-shrink-0 padding-5px">
                        <div className="FbScPagePostItemContent_pics font-20px">
                            <div className="vid-pic-max-3">
                                {vid_pics.map((item, ix) => (
                                    <div
                                        key={ix}
                                        className={`vid-pic-max-3-${
                                            vid_pic_count <= 3
                                                ? vid_pic_count
                                                : 4
                                        }`}
                                        data-length={
                                            vid_pic_count <= 3
                                                ? undefined
                                                : vid_pic_count - 3
                                        }
                                    >
                                        {VideoOrImage(item.vid_pic)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default FbScPagePostItemContent;
