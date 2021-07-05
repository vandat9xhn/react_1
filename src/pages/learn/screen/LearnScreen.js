import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
import LearnScreenConfirm from './LearnScreenConfirm';
import ScreenConfirm from '../../../component/_screen/type/confirm/ScreenConfirm';

//
LearnScreen.propTypes = {};

//
function LearnScreen(props) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    // 
    const count_floor = useRef(1)

    // 
    function handleConfirm() {
        alert('Successfully!')
        openScreenFloorConfirm()
    }

    // 
    function handleCloseScreenFloor() {
        count_floor.current -= 1
        closeScreenFloor()
    }

    //
    function openScreenFloorConfirm() {
        openScreenFloor({
            // FloorComponent: LearnScreenConfirm,
            FloorComponent: ScreenConfirm,
            title: 'Test Screen Floor',
            notification: 'This is first test of AppScreen, Floor: ' + count_floor.current,
            handleConfirm: handleConfirm,
            closeScreen: handleCloseScreenFloor,
        });

        count_floor.current += 1
    }

    //
    return (
        <div>
            <div
                className="padding-8px label-field cursor-pointer"
                onClick={openScreenFloorConfirm}
            >
                Open Screen Floor, instead of using multiple screen
            </div>
        </div>
    );
}

export default LearnScreen;
