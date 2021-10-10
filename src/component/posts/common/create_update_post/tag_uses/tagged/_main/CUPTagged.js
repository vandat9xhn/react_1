import React from 'react';
import PropTypes from 'prop-types';
//
import PostTagUser from '../../../../tag_user/PostTagUser';
// 
import './CUPTagged.scss';

//
CUPTagged.propTypes = {};

//
function CUPTagged({ user_tag_arr, handleDelTag }) {
    //
    return (
        <div className="CUPTagged padding-16px">
            <div className="margin-bottom-5px line-16px text-third font-600 font-13px">
                TAGGED
            </div>

            <div className="padding-10px border-blur brs-6px">
                <div className="display-flex flex-wrap">
                    {user_tag_arr.map((item, ix) => (
                        <div key={item.id} className="padding-5px">
                            <PostTagUser
                                ix={ix}
                                name={`${item.first_name} ${item.last_name}`}
                                handleDelTag={handleDelTag}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CUPTagged;
