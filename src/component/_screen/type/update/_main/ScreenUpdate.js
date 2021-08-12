import React, { useEffect, useRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import ScreenBlur from '../../../components/frame/blur/ScreenBlur';
import ScreenBlurHead from '../../../components/part/head/ScreenBlurHead';
//
import { openScreenConfirm } from '../../confirm/ScreenConfirm';
import ScreenBlurFetching from '../../../../_screen_once/fetching/ScreenBlurFetching';

//
export function openScreenUpdate({
    openScreenFloor,

    title,
    UpdateComponent,
    is_fetching,
    ...other_props
}) {
    openScreenFloor({
        FloorComponent: ScreenUpdate,

        title: title,
        UpdateComponent: UpdateComponent,
        is_fetching: is_fetching,
        ...other_props,
    });
}

//
ScreenUpdate.propTypes = {};

//
function ScreenUpdate({
    closeScreen,

    title,
    UpdateComponent,
    is_fetching,
    ...update_props
}) {
    //
    const { openScreenFloor, detectScreenHasChange } = useContext(context_api);

    //
    const [closing, setClosing] = useState(false);

    //
    const has_change = useRef(false);
    const use_scale = useRef(true);

    //
    useEffect(() => {
        use_scale.current = false;
    }, []);

    /* ---------------- */

    //
    function detectHasChange(new_has_change) {
        if (has_change.current != new_has_change) {
            has_change.current = new_has_change;
            detectScreenHasChange(new_has_change);
        }
    }

    //
    function handleConfirmToClose() {
        setClosing(true);

        setTimeout(() => {
            closeScreen();
            detectScreenHasChange(false);
        }, 250);
    }

    /* ---------------- */

    //
    function closeScreenUpdate(force_close = false) {
        if (force_close || !has_change.current) {
            closeScreen();

            return;
        }

        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Unsaved changes',
            notification: "Changes you've made will not be saved.",
            handleConfirm: handleConfirmToClose,
        });
    }

    //
    return (
        <ScreenBlur
            closeScreen={closeScreenUpdate}
            use_scale={use_scale.current}
        >
            <div>
                <ScreenBlurHead
                    title={title}
                    closeScreenBlur={closeScreenUpdate}
                />

                <div>
                    {
                        <UpdateComponent
                            detectHasChange={detectHasChange}
                            {...update_props}
                        />
                    }
                </div>

                <div
                    className={`${
                        closing ? 'pos-fixed-100v z-index-lv5' : 'display-none'
                    }`}
                >
                    <ScreenBlurFetching />
                </div>
            </div>
        </ScreenBlur>
    );
}

export default ScreenUpdate;
