import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_FbEmojiType_L } from '../../../../../../../_handle_api/post/cu_emoji';
//
import CUPEmojiTypeItem from '../item/CUPEmojiTypeItemMb';

//
CUPEmojiTypeMb.propTypes = {};

//
function CUPEmojiTypeMb({ changeType }) {
    //
    const [state_obj, setStateObj] = useState({
        emoji_type_arr: [] || [
            {
                id: 0,
                type: '',
                title: '',
                icon: null,
            },
        ],
    });

    const { emoji_type_arr } = state_obj;

    //
    const ref_main_elm = useRef(null);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () => getData_EmojiType({}),
        });
    }, []);

    // ------

    //
    async function getData_EmojiType() {
        const { data } = await handle_API_FbEmojiType_L({});

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                emoji_type_arr: data,
            };
        });
    }

    //
    return (
        <div ref={ref_main_elm} className="CUPEmojiTypeMb">
            <div>
                {emoji_type_arr.map((item, ix) => (
                    <div key={item.id} className="border-bottom-blur">
                        <CUPEmojiTypeItem
                            type={item.type}
                            icon={item.icon}
                            title={item.title}
                            changeType={changeType}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CUPEmojiTypeMb;
