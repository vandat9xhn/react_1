import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../../../_hooks/useBool';
//
import IconsArrow from '../../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import InputFile from '../../../../../../../input/input_file/InputFile';
//
import CUPostFixChoice from '../../../../_components/fix_choice/CUPostFixChoice';

//
CUPFVideoLeftSrt.propTypes = {};

//
function CUPFVideoLeftSrt({ handleChangeSrt }) {
    //
    const { is_true, toggleBool } = useBool();

    //
    return (
        <div className="CUPFVideoLeftSrt">
            <div className="font-17px font-600">
                <CUPostFixChoice
                    title="Change thumbnail"
                    Icon={null}
                    ix={1}
                    is_active={is_true}
                    has_sub={true}
                    clickFixChoice={toggleBool}
                />
            </div>

            {is_true ? (
                <div className="flex-between-center margin-top-15px padding-x-10px">
                    <div>
                        <div className="font-600">Upload captions</div>

                        <div className="font-12px text-third font-400">
                            Use subrip (.srt) files
                        </div>
                    </div>

                    <div>
                        <InputFile
                            file_multiple={false}
                            should_reset={false}
                            vid_pic_key="srt"
                            face_circle={false}
                            accept=".srt"
                            handleChange={handleChangeSrt}
                        >
                            <div className="display-flex-center padding-x-11px padding-y-6px brs-6px bg-ccc font-500 cursor-pointer hv-bg-hv">
                                <div className="rotate-180">
                                    <IconsArrow x={600} size_icon="20px" />
                                </div>

                                <div className="margin-left-5px">Upload</div>
                            </div>
                        </InputFile>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default CUPFVideoLeftSrt;
