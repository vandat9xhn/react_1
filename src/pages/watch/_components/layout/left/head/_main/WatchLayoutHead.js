import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchInput from '../../../../../../../component/fb_search/input/_main/FbSearchInput';
import LeftBarTitleSettings from '../../../../../../../component/side_bar/left/title_settings/LeftBarTitleSettings';
//
import WatchLayoutHeadSettings from '../settings/_main/WatchLayoutHeadSettings';
//
import './WatchLayoutHead.scss';

//
WatchLayoutHead.propTypes = {};

//
function WatchLayoutHead(props) {
    //
    return (
        <div className="WatchLayoutHead padding-bottom-16px">
            <div className="WatchLayoutHead_settings">
                <LeftBarTitleSettings
                    title={'Watch'}
                    setting_elm={<WatchLayoutHeadSettings />}
                />
            </div>

            <div className="WatchLayoutHead_search left-bar-search">
                <FbSearchInput
                    placeholder="Search videos"
                    always_open={true}
                    class_input="PostInputSearch_input-36px"
                    use_back={false}
                    params_api={{ search_in: 'videos' }}
                />
            </div>
        </div>
    );
}

export default WatchLayoutHead;
