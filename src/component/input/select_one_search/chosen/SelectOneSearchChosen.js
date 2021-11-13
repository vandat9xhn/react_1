import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';

//
SelectOneSearchChosen.propTypes = {};

//
function SelectOneSearchChosen({ title_choice, clearChoice }) {
    //
    return (
        <div className="SelectOneSearchChosen padding-8px">
            <div className="flex-between-center">
                <div className="text-blue font-600">{title_choice}</div>

                <div
                    className="btn-icon-24px bg-blue cursor-pointer"
                    onClick={clearChoice}
                >
                    <IconsArrow y={400} size_icon="15px" />
                </div>
            </div>
        </div>
    );
}

export default SelectOneSearchChosen;
