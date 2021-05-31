import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './InputSelected.scss';

//
InputSelected.propTypes = {};

//
function InputSelected({ ix, item, handleRemoveSelectedItem }) {
    //
    function onRemoveSelectedItem() {
        handleRemoveSelectedItem(ix);
    }

    //
    return (
        <div className="InputSelected brs-8px bg-active-fb text-blue">
            <div className="InputSelected_row">
                <div className="inline-block label-field">{item}</div>

                <div className="inline-block">
                    <div
                        className="InputSelected_icon display-flex-center cursor-pointer brs-50 hv-bg-blur"
                        onClick={onRemoveSelectedItem}
                    >
                        <IconsArrow y={400} size_icon="1rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputSelected;
