import React from 'react';
import PropTypes from 'prop-types';
//
import PLHeadList from '../list/PLHeadList';
// 
import './PLHeadPcPrinter.scss';

//
const PRINTER_LINK_ARR = [
    {
        name: 'Máy in',
        link_to: '',
    },
    {
        name: 'Mực in',
        link_to: '',
    },
    {
        name: 'Màn hình máy tính',
        link_to: '',
    },
    {
        name: 'Máy tính để bàn',
        link_to: '',
    },
];
//
PLHeadPcPrinter.propTypes = {};

//
function PLHeadPcPrinter(props) {
    //
    return (
        <div className="PLHeadPcPrinter padding-x-10px padding-bottom-10px brs-4px bg-primary box-shadow-fb">
            <PLHeadList link_arr={PRINTER_LINK_ARR} />
        </div>
    );
}

export default PLHeadPcPrinter;
