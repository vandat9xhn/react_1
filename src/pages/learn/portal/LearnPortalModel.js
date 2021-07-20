import React from 'react';
import PropTypes from 'prop-types';
//
import LearnPortal from './LearnPortal';

//
LearnPortalModel.propTypes = {};

//
function LearnPortalModel(props) {
    //
    function handleClick(e) {
        console.log(e.target);
    }

    //
    return (
        <div>
            <div onClick={handleClick}>
                <LearnPortal>
                    <div>
                        <div className="pos-abs-center bg-blue">
                            <h2>Learn portal</h2>
                            
                            <div>This is portal</div>
                        </div>
                    </div>
                </LearnPortal>
            </div>
        </div>
    );
}

export default LearnPortalModel;
