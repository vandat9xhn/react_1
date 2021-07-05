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

//
LearnHTML.propTypes = {

};

//
function LearnHTML() {
    // 
    const [arr, setArr] = useState([0, 1])

    // iframe
    const refIframe = useRef(null)

     // use effect
     useEffect(() => {
        document.title = 'Learn HTML'
        runHTML();
    }, [])

    // run html
    const runHTML = () => {
        const iframe = refIframe.current.contentWindow.document
        const text = document.getElementsByClassName('LearnHTML__html')[0].innerText
        iframe.open();
        iframe.write(text);
        iframe.close();

        const body = iframe.getElementsByTagName('BODY')[0]
        body.style.setProperty('font-size', '17px')
        body.style.setProperty('color', localStorage.light_mode == 1 ? 'black' : 'rgba(236, 229, 229, 0.8)')
    };

    const testDelArr = (ix) => {
        setArr(arr.filter(item => item != ix))
    }

    // render
    return (
        <div className="LearnHTML">
            <div className="LearnHTML_contain">
                {/* row title */}
                <div className="LearnHTML_row-title">
                    <div className="LearnHTML__run" onClick={runHTML}>
                        {`Run >>`}
                    </div>
                </div>

                {/* row learn */}
                <div className="LearnHTML_row-learn display-flex">
                    {/* col html */}
                    <div className="LearnHTML_col">
                        <div className="LearnHTML__html">
                            <div
                                className="LearnHTML__editable"
                                contentEditable={true} suppressContentEditableWarning={true}
                                spellCheck={false}
                            >
                                <b>{"<!DOCTYPE html>"}</b><br/>
                                {"<html>"} <br/>
                                {"<head>"} <br/>
                                {"<style>"} <br/> <br/>

                                {"</style>"} <br/>
                                {"</head>"} <br/>
                                {"<body>"} <br/> <br/>
                                    Hello <br/> <br/>
                                {"</body>"} <br/>
                                {"</html>"} <br/>
                            </div>
                        </div>
                    </div>

                    {/* col iframe */}
                    <div className="LearnHTML_col">
                        <div className="LearnHTML__iframe scroll-thin">
                            <iframe
                                ref={refIframe}
                                id="LearnHTML__iframe"
                                src=""
                                frameBorder="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <LearnAppearancePosition />

            <br />

            <div>
                <TestHook />
            </div>

            <div>
                <TestSearchAnimate />
            </div>

            <br/>
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

            <br /><br /><br /><br /><br />
            
        </div>
    );
}


export default LearnHTML;
