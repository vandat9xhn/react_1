import React from 'react';
import PropTypes from 'prop-types';
// 
import NoticeDiv from '../../../some_div/notice_div/NoticeDiv';

//
export function openScreenNotice({
    openScreenFloor,
    ComponentNotice,
}) {
    openScreenFloor({
        FloorComponent: ScreenNotice,
        ComponentNotice: ComponentNotice,
    });
}

//
ScreenNotice.propTypes = {};

//
function ScreenNotice({ ComponentNotice }) {
    //
    return <NoticeDiv>{ComponentNotice}</NoticeDiv>;
}

export default ScreenNotice;
