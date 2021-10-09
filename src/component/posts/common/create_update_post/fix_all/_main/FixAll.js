import React from 'react';
import PropTypes from 'prop-types';
//
import InputFile from '../../../../../input/input_file/InputFile';
//
import FixItem from '../item/FixItem';
import CUPostFixHead from '../../_components/fix_head/CUPostFixHead';
//
import './FixAll.scss';

//
FixAll.propTypes = {};

//
function FixAll({
    vid_pics,

    openFixDetail,
    handleChangeContentVidPic,
    handleChooseFiles,

    closeFixAll,
    deleteAnItem,
}) {
    //
    return (
        <div
            className={`FixAll margin-auto bg-primary brs-8px box-shadow-fb ${
                vid_pics.length >= 5
                    ? 'FixAll-lg'
                    : vid_pics.length >= 3
                    ? 'FixAll-md'
                    : ''
            }`}
        >
            <div>
                <CUPostFixHead title="Photos/Videos" handleBack={closeFixAll} />
            </div>

            <div className="FixAll_contain bg-fb">
                <div className="display-flex flex-wrap">
                    {vid_pics.map((item, index) => (
                        <div key={index} className="FixAll_item padding-5px">
                            <FixItem
                                ix={index}
                                vid_pic={item.vid_pic}
                                content={item.content}
                                type={item.type}
                                thumbnail={item.thumbnail}
                                openFixDetail={openFixDetail}
                                handleChangeContentVidPic={
                                    handleChangeContentVidPic
                                }
                                deleteAnItem={deleteAnItem}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-end padding-x-20px padding-y-15px">
                <InputFile
                    handleChange={handleChooseFiles}
                    accept="image/*, video/*"
                    file_multiple={true}
                    face_circle={false}
                >
                    <div className="padding-y-7px padding-x-10px brs-4px font-600 text-blue cursor-pointer hv-bg-blur">
                        Add Photos/Video
                    </div>
                </InputFile>

                <button
                    className="btn btn-hv margin-left-15px padding-x-20px padding-y-7px brs-4px bg-blue font-600 text-white cursor-pointer"
                    type="button"
                    onClick={closeFixAll}
                >
                    Done
                </button>
            </div>
        </div>
    );
}

export default FixAll;
