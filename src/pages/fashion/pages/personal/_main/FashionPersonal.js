import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// 
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import PersonalLeft from '../col_left/_main/PersonalLeft';
import FashionH from '../../../components/head/_main/FashionH';
import { FashionRoutes, fashion_path_arr } from '../routes/FashionRoutes';
// 
import './FashionPersonal.scss';

//
FashionPersonal.propTypes = {};

//
function FashionPersonal(props) {
    //
    const [loaded_component_arr, setLoadedComponentArr] = useState([]);
    const [is_open, setIsOpen] = useState(false)
    const [active_ix, setActiveIx] = useState(-1)
    //
    useEffect(() => {
        document.title = 'Personal';
        
    }, [])
    //
    useEffect(() => {
        handleChangeLocation()
        
    }, [location.pathname]);

    //
    function handleChangeLocation(){
        if (!loaded_component_arr.includes(location.pathname)) {
            setLoadedComponentArr([...loaded_component_arr, location.pathname]);
        }
        setActiveIx(fashion_path_arr.findIndex(item => location.pathname.includes(item)))
        setIsOpen(false)
    }

    //
    function toggleOpenLeft() {
        setIsOpen(!is_open)
    }

    //
    function handleChangeActiveIx(ix) {
        setActiveIx(ix)
    }

    //
    return (
        <div>
            <div>
                <div>
                    <FashionH />
                </div>
                
                <div className="FashionPersonal_ctg">
                    <div className="FashionPersonal_contain">
                        <div className="FashionPersonal_row">
                            <div className={`FashionPersonal_left box-shadow-1 brs-5px ${is_open ? '' : 'FashionPersonal_left-hidden'}`}>
                                <PersonalLeft
                                    active_ix={active_ix}
                                    handleChangeActiveIx={handleChangeActiveIx}
                                />

                                <div className={`FashionPersonal_left-toggle ${is_open ? '' : 'FashionPersonal_left-toggle-hidden'}`}>
                                    <div
                                        className={`FashionPersonal_left-icon close-icon-small brs-50 ${is_open ? '' : 'FashionPersonal_left-icon-close'}`}
                                        onClick={toggleOpenLeft}
                                    >
                                        <IconsArrow y={400} size_icon="1rem" />
                                    </div>
                                </div>
                            </div>

                            <div className="FashionPersonal_right">
                                {FashionRoutes.map((item, index) => (
                                    <div
                                        key={`FashionPersonal_${index}`}
                                        className={
                                            location.pathname == item.path
                                                ? ''
                                                : 'display-none'
                                        }
                                    >
                                        {loaded_component_arr.includes(item.path) && (
                                            <item.component />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FashionPersonal;
