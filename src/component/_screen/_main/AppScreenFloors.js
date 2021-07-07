import React, { useEffect } from 'react';
import { Prompt, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { openScreenConfirm } from '../type/confirm/ScreenConfirm';
//
import ScreenFloor from '../floor/ScreenFloor';

//
AppScreenFloors.propTypes = {};

//
function AppScreenFloors({
    floor_arr,

    openScreenFloor,
    closeScreenFloor,
    closeAllScreen,

    has_change,
    c_location,
}) {
    //
    const use_history = useHistory();

    //
    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeunload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeunload);
        };
    }, []);

    //
    function showModalConfirm(last_location) {
        if (!has_change.current) {
            closeAllScreen();

            return true;
        }

        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Leave page?',
            notification:
                "You haven't shared your post yet. Are you sure that you want to leave without posting?",
            handleConfirm: () => handleConfirm(last_location),
            closeScreen: handleNotConfirm,
        });

        return false;
    }

    //
    function handleConfirm(last_location) {
        closeAllScreen();

        setTimeout(() => {
            use_history.push(last_location.pathname + last_location.search);
        }, 0);
    }

    //
    function handleNotConfirm() {
        history.pushState('', '', c_location);
        closeScreenFloor();
    }

    //
    function handleBeforeunload(event) {
        if (has_change.current) {
            event.preventDefault();
            return (event.returnValue = 'Are you sure you want to exit?');
        }
    }

    //
    return (
        <div>
            <div>
                {floor_arr.map((floor_obj, ix) => (
                    <div
                        key={`${ix}`}
                        className={`AppScreen_floor ${
                            ix != floor_arr.length - 1
                                ? 'AppScreen_inactive'
                                : 'bg-screen'
                        }`}
                    >
                        <ScreenFloor
                            closeScreen={closeScreenFloor}
                            {...floor_obj}
                        />
                    </div>
                ))}
            </div>

            <Prompt when message={showModalConfirm} />
        </div>
    );
}

export default AppScreenFloors;
