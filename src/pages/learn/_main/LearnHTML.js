import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import TestHook from '../test_hook/TestHook';
import TestWs from '../test_ws/TestWs';
import TestPagination from '../test_pagination/TestPagination';
//
import './LearnHTML.scss';
import TestSearchAnimate from '../test_search_animate/TestSearchAnimate';
import FbLogin from '../fb/test_login/FbLogin';
import LearnSelectColorBg from '../color_bg/LearnSelectColorBg';
import LearnAppearancePosition from '../appearance_position/LearnAppearancePosition';
import LearnScreen from '../screen/LearnScreen';
import LearnWaitingToken from '../waiting_token/LearnWaitingToken';
import LearnDnD from '../dnd/LearnDnD';
import LearnObserverScroll from '../observer_scroll/LearnObserverScroll';
import LearnChild from '../child_state/_main/LearnChild';
import LearnPortalModel from '../portal/LearnPortalModel';
import LearnAPIHeroku from '../api_heroku/LearnAPIHeroku';
import LearnStoryItem from '../story_item/LearnStoryItem';
import LearnWriteHtml from '../write_html/LearnWriteHtml';
import LearnResizeRotate from '../resize_rotate/LearnResizeRotate';
import LearnColorThief from '../color_thief/LearnColorThief';
import LearnTouches from '../touches/LearnTouches';
import LearnSaveScroll from '../save_scroll/LearnSaveScroll';
import LearnFashion from '../fashion/LearnFashion';

//
LearnHTML.propTypes = {};

//
function LearnHTML() {
    // 
    return (
        <div className="LearnHTML">
            <div>
                <LearnWriteHtml />
            </div>
            <br />
            {/* <LearnAppearancePosition /> */}

            <br />

            <div>
                <TestHook />
            </div>

            <div>
                <TestSearchAnimate />
            </div>

            <br />
            <div>
                <TestPagination />
            </div>

            {/* <FbLogin /> */}

            <LearnSelectColorBg />

            <div>
                <LearnScreen />
            </div>

            <div>
                <LearnWaitingToken />
            </div>

            <div>
                <LearnDnD />
            </div>

            <div>
                <LearnObserverScroll />
            </div>

            <div>
                {/* <LearnChild /> */}
                <LearnStoryItem />
            </div>

            {/* <div>
                <LearnPortalModel >
                    asdas asd asd asd
                </LearnPortalModel>
            </div>

            <div>
                <LearnPortalModel >
                    123 123 123
                </LearnPortalModel>
            </div> */}

            <div>
                {/* <LearnAPIHeroku /> */}
            </div>

            <br />
            <div>
                {/* <LearnResizeRotate />  */}
            </div>

            <br />
            {/* <div>
                <LearnColorThief />
            </div> */}

            {/* <LearnTouches /> */}

            <br />
            <LearnFashion />
            {/* <LearnSaveScroll /> */}
            
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default LearnHTML;
