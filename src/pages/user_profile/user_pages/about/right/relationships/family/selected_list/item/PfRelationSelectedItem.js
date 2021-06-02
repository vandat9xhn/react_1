import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../../../../../../component/picture_name/pic_name_content/PicNameContent';
import IconsArrow from '../../../../../../../../../_icons_svg/icons_arrow/IconsArrow';

//
PfRelationSelectedItem.propTypes = {
    item: PropTypes.object,
    ix: PropTypes.number,
    handleRemoveSelectedItem: PropTypes.func,
};

//
function PfRelationSelectedItem({ item, ix, handleRemoveSelectedItem }) {
    //
    function onRemoveSelectedItem() {
        handleRemoveSelectedItem(ix);
    }

    //
    return (
        <div className="padding-8px hv-bg-blur">
            <div className="flex-between-center">
                <div>
                    <PicNameContent user={item} />
                </div>

                <div>
                    <div
                        className="close-icon-small brs-50 cursor-pointer hv-opacity"
                        onClick={onRemoveSelectedItem}
                    >
                        <IconsArrow y={400} size_icon="1rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PfRelationSelectedItem;
