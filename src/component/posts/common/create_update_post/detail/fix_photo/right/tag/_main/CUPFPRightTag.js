import React from 'react';
import PropTypes from 'prop-types';
//
import PostTagUser from '../../../../../../tag_user/PostTagUser';
import PostTagUserAdd from '../../../../../../tag_user_add/_main/PostTagUserAdd';
import PortalAtBody from '../../../../../../../../portal/at_body/PortalAtBody';
//
import './CUPFPRightTag.scss';
import CloseDiv from '../../../../../../../../some_div/close_div/CloseDiv';
import { useBool } from '../../../../../../../../../_hooks/useBool';
import CuPFRightTagAdd from '../add/CuPFRightTagAdd';

//
CUPFPRightTag.propTypes = {};

//
function CUPFPRightTag({
    ref_img,
    user_tag_arr,
    is_active,

    show_tag_add,
    tag_add_x,
    tag_add_y,

    handleStartTag,
    handleTagUser,
    handleDelTag,
}) {
    //
    const { top, left, width, height } =
        ref_img.current.getBoundingClientRect();

    //
    const { is_true, setIsTrue } = useBool();

    // -----

    //
    function onStartTag(e) {
        if (is_active) {
            setIsTrue(true);
            handleStartTag(e);
        }
    }

    //
    function makeDivHidden() {
        setIsTrue((is_true) => !is_true);
    }

    //
    return (
        <CloseDiv makeDivHidden={makeDivHidden}>
            <div
                className={`CUPFPRightTag pos-abs-center ${
                    is_active ? 'CUPFPRightTag-active' : ''
                }`}
                style={{ width: width, height: height }}
            >
                <div
                    className="CUPFPRightTag_bg pos-abs-100"
                    onClick={onStartTag}
                ></div>

                <div className="CUPFPRightTag_list">
                    {user_tag_arr.map((item, ix) => (
                        <div
                            key={item.id}
                            className="CUPFPRightTag_item pos-abs trans-x--50per"
                            style={{ top: item.top, left: item.left }}
                        >
                            <PostTagUser
                                ix={ix}
                                name={`${item.first_name} ${item.last_name}`}
                                handleDelTag={handleDelTag}
                            />
                        </div>
                    ))}
                </div>

                {is_active && show_tag_add ? (
                    <CuPFRightTagAdd
                        border_x={tag_add_x}
                        border_y={tag_add_y}
                        contain_x={tag_add_x + left + window.scrollX}
                        contain_y={tag_add_y + top + window.scrollY + 45}
                        is_show={is_true}
                        handleTagUser={handleTagUser}
                    />
                ) : null}
            </div>
        </CloseDiv>
    );
}

export default CUPFPRightTag;
