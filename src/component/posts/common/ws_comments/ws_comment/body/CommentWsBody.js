import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// 
import { context_api } from '../../../../../../_context/ContextAPI';
import { VideoOrImage } from '../../../../../../_some_function/VideoOrImage';

//
CommentWsBody.propTypes = {
    vid_pic: PropTypes.string,
};
CommentWsBody.defaultProps = {
    vid_pic: '',
}

//
function CommentWsBody(props) {
    const {
        vid_pic,
        type,
    } = props;

    //
    const { openZoomVidPics } = useContext(context_api);
    //
    function handleZoomVidPicCmt() {
        openZoomVidPics([{vid_pic: vid_pic}]);
    }

    //
    return (
        <div>
            <div className={vid_pic ? '' : 'display-none'}>
                <div
                    className="CmtSub__vid-pic bg-vid-pic brs-5px"
                    onClick={handleZoomVidPicCmt}
                >
                    {VideoOrImage(vid_pic)}
                </div>
            </div>
        </div>
    );
}

export default CommentWsBody;
