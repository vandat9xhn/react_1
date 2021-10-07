import React from 'react';
import PropTypes from 'prop-types';
//
import PostTagUser from '../../../../../../tag_user/PostTagUser';
import PostTagUserAdd from '../../../../../../tag_user_add/_main/PostTagUserAdd';
//
import './CUPFPRightTag.scss';

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
    const { width, height } = ref_img.current.getBoundingClientRect();

    //
    function onStartTag(e) {
        is_active && handleStartTag(e);
    }

    //
    return (
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
                <div
                    className="CUPFPRightTag_add pos-abs"
                    style={{
                        top: tag_add_y,
                        left: tag_add_x,
                        transform: `translate(-50%, -40px)`,
                    }}
                >
                    <PostTagUserAdd handleTagUser={handleTagUser} />
                </div>
            ) : null}
        </div>
    );
}

export default CUPFPRightTag;
