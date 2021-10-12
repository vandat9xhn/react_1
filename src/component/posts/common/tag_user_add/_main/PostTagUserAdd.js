import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../_some_function/waitingToDoLast';
//
import { initial_user } from '../../../../../_initial/user/initialUser';
//
import { handle_API_Friend_L } from '../../../../../_handle_api/profile/ProfileHandleAPI';
//
import IconsInput from '../../../../../_icons_svg/Icons_input/IconsInput';
//
import PostTagUserAddItem from '../item/PostTagUserAddItem';
//
import './PostTagUserAdd.scss';

//
PostTagUserAdd.propTypes = {};

//
function PostTagUserAdd({ handleTagUser }) {
    //
    const [value, setValue] = useState('');
    const [user_arr, setUserArr] = useState([] || [initial_user()]);

    //
    const ref_interval = useRef(null);

    //
    useEffect(() => {
        getData_Friend();
    }, []);

    // -----

    //
    async function getData_Friend(user_name = '') {
        console.log(user_name);

        const { data } = await handle_API_Friend_L({
            params: {
                tag_friend: 1,
                user_name: user_name,
            },
        });

        setUserArr(data.slice(0, 5));
    }

    // -----

    //
    function handleChange(e) {
        const new_value = e.target.value;

        setValue(new_value);

        waitingToDoLast({
            ref_interval: ref_interval,
            time: 500,
            callback: () => getData_Friend(new_value),
        });
    }

    //
    function handlePrevent(e) {
        e.stopPropagation();
    }

    //
    return (
        <div className="PostTagUserAdd" onClick={handlePrevent}>
            <div className="padding-5px brs-5px bg-primary box-shadow-fb">
                <div className="display-flex align-items-center margin-bottom-5px padding-x-8px padding-y-5px border-blur brs-4px">
                    <IconsInput y={200} size_icon="15px" />

                    <input
                        className="flex-grow-1 padding-left-8px border-none outline-none"
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    {user_arr.map((item) => (
                        <div key={item.id}>
                            <PostTagUserAddItem
                                user={item}
                                handleTagUser={handleTagUser}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostTagUserAdd;
