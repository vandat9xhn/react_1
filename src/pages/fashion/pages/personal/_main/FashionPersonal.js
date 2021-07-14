import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useRouteLoaded } from '../../../../../_hooks/useRouteLoaded';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import RouteLoaded from '../../../../../component/_route/route_loaded/RouteLoaded';
//
import {
    FashionRoutes,
    fashion_path_arr,
    fashion_person_pathname_arr,
} from '../routes/FashionRoutes';
//
import PersonalLeft from '../col_left/_main/PersonalLeft';
import FashionH from '../../../components/head/_main/FashionH';
//
import './FashionPersonal.scss';
import './FashionPersonalRes.scss';

//
FashionPersonal.propTypes = {};

//
function FashionPersonal(props) {
    //
    const [is_open, setIsOpen] = useState(false);
    const [active_ix, setActiveIx] = useState(-1);

    //
    const { route_arr } = useRouteLoaded({
        initial_route_arr: FashionRoutes,
        allow_routes_str: fashion_person_pathname_arr,
    });

    //
    useEffect(() => {
        document.title = 'Personal';
    }, []);

    useEffect(() => {
        handleChangeLocation();
    }, [location.pathname]);

    //
    function handleChangeLocation() {
        setActiveIx(
            fashion_path_arr.findIndex((item) =>
                location.pathname.includes(item)
            )
        );
        is_open && setIsOpen(false);
    }

    //
    function toggleOpenLeft() {
        setIsOpen(!is_open);
    }

    //
    function handleChangeActiveIx(ix) {
        setActiveIx(ix);
    }

    //
    return (
        <div>
            <div>
                <div>
                    <FashionH />
                </div>

                <div className="FashionPersonal_ctg">
                    <div className="FashionPersonal_contain position-rel">
                        <div className="FashionPersonal_row display-flex">
                            <div
                                className={`FashionPersonal_left ${
                                    is_open ? '' : 'FashionPersonal_left-hidden'
                                }`}
                            >
                                <PersonalLeft
                                    active_ix={active_ix}
                                    handleChangeActiveIx={handleChangeActiveIx}
                                />

                                <div
                                    className={`FashionPersonal_left-toggle ${
                                        is_open
                                            ? ''
                                            : 'FashionPersonal_left-toggle-hidden'
                                    }`}
                                >
                                    <div
                                        className={`FashionPersonal_left-icon close-icon-small brs-50 ${
                                            is_open
                                                ? ''
                                                : 'FashionPersonal_left-icon-close'
                                        }`}
                                        onClick={toggleOpenLeft}
                                    >
                                        <IconsArrow y={400} size_icon="1rem" />
                                    </div>
                                </div>
                            </div>

                            <div className="FashionPersonal_right box-shadow-1">
                                <RouteLoaded route_arr={route_arr} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionPersonal;
