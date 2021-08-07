import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import LearnPortal from './LearnPortal';
import { useMakeBodyHidden } from '../../../_hooks/useMakeBodyHidden';

//
LearnPortalModel.propTypes = {};

//
function LearnPortalModel({ children }) {
    //
    const [state_obj, setStateObj] = useState({
        data_arr: [],
    });

    const { data_arr } = state_obj;

    //
    useMakeBodyHidden({ hidden_header: false });

    //
    function handleClick() {
        setStateObj({
            ...state_obj,
            data_arr: [...data_arr, data_arr.length + 1],
        });
    }

    console.log(data_arr);
    //
    return (
        <div>
            <div onClick={handleClick}>
                <LearnPortal>
                    <div>
                        <div className="pos-abs-center bg-blue">
                            <h2>Learn portal</h2>

                            <div>This is portal</div>
                        <div>{children}</div>
                        </div>

                    </div>
                </LearnPortal>
            </div>
        </div>
    );
}

export default LearnPortalModel;
