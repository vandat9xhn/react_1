import React from 'react';
import PropTypes from 'prop-types';
//
import CUPostRadio from '../../../../../_components/radio/CUPostRadio';
import TextareaCaption from '../../../../../../../../input/textarea_caption/TextareaCaption';

//
CUPFixPhotoLeftAlt.propTypes = {};

//
function CUPFixPhotoLeftAlt({
    alt,
    alt_ix,

    chooseAlt,
    handleChangeAlt,
}) {
    //
    return (
        <div className="CUPFixPhotoLeftAlt">
            <div className="margin-bottom-15px font-600">
                Use generated alt text for this photo or add custom alt text:
            </div>

            <div className="margin-bottom-15px">
                <CUPostRadio
                    ix={0}
                    is_active={alt_ix == 0}
                    handleChoose={chooseAlt}
                >
                    <div>May be an image of tree, outdoors and text</div>
                </CUPostRadio>
            </div>

            <div>
                <CUPostRadio
                    ix={1}
                    is_active={alt_ix == 1}
                    handleChoose={chooseAlt}
                >
                    <TextareaCaption
                        value={alt}
                        textarea_class="CUPFixPhotoLeftAlt_custom_Text padding-x-16px padding-y-3px scroll-thin"
                        onChange={handleChangeAlt}
                        textarea_props={{ rows: 2 }}
                    />
                </CUPostRadio>
            </div>
        </div>
    );
}

export default CUPFixPhotoLeftAlt;
