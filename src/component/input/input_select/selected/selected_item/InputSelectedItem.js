import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './InputSelectedItem.scss';

//
InputSelectedItem.propTypes = {};

//
function InputSelectedItem({ ix, item, handleRemoveSelectedItem }) {
    //
    function onRemoveSelectedItem() {
        handleRemoveSelectedItem(ix);
    }

    //
    return (
        <div className="InputSelectedItem brs-8px bg-active-fb text-blue">
            <div className="InputSelectedItem_row">
                <div className="inline-block font-500">{item}</div>

                <div className="inline-block">
                    <div
                        className="InputSelectedItem_icon display-flex-center cursor-pointer brs-50 hv-bg-blur"
                        onClick={onRemoveSelectedItem}
                    >
                        <IconsArrow y={400} size_icon="1rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputSelectedItem;
