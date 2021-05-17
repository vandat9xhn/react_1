import React, { useEffect, useState } from 'react';
// import { withRouter } from 'react-router';
// 
import IconsArrow from '../../_icons_svg/icons_arrow/IconsArrow';
// 
import './BackTop.scss';

// 
function BackTop() {
    const [open_btn, setOpenBtn] = useState(window.pageYOffset > 100);
    //
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    // handleScroll
    function handleScroll() {
        setOpenBtn(window.pageYOffset > 100);
    }

    // onClick
    function handleClick() {
        document.getElementsByTagName('HTML')[0].style.scrollBehavior =
            'smooth';
        setTimeout(() => {
            window.scroll(0, 0);
            document.getElementsByTagName('HTML')[0].style.scrollBehavior =
                'auto';
        }, 0);
    }

    //
    return (
        <div
            className={`BackTop ${
                open_btn && location.pathname.search('/phone') >= 0
                    ? 'hv-opacity'
                    : 'BackTop_hide'
            }`}
            onClick={handleClick}
            title="back to top"
        >
            <IconsArrow y={200} />
        </div>
    );
}

export default BackTop;
