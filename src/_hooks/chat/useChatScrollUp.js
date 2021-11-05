import { useRef, useState } from 'react';
// 
import { IS_MOBILE } from '../../_constant/Constant';
//
import { handle_API_ChatMessage_L } from '../../_handle_api/chat/ChatHandleAPI';
//
import { useMounted } from '../useMounted';

//
export const useChatScrollUp = ({ ref_elm, room_chat, message_obj }) => {
    //
    const { messages, count_message } = message_obj;

    //
    const pos = useRef(0);
    const is_max = useRef(false);
    const just_fetching = useRef(false);
    const data_count = useRef(messages.length);

    //
    const [is_fetching, setIsFetching] = useState(false);

    //
    const mounted = useMounted();

    /*--------- GET API ---------*/

    //
    async function getData_API() {
        try {
            const c_scroll_top = ref_elm.current.scrollTop;
            setIsFetching(true);

            const data = await handle_API_ChatMessage_L(
                room_chat,
                data_count.current
            );

            if (!mounted) {
                return;
            }

            messages.push(...data);
            setIsFetching(false);

            ref_elm.current.scrollTop = c_scroll_top;
            data_count.current += data.length;
            is_max.current = count_message <= data_count.current;
            just_fetching.current = false;
        } catch (e) {
            console.log(e);
        }
    }

    /* -------------------- */

    //
    function handleScroll(e) {
        //
        if (IS_MOBILE) {
            return;
        }

        if (
            data_count.current == 0 ||
            just_fetching.current ||
            is_max.current ||
            e.target.scrollTop >=
                e.target.clientHeight - e.target.scrollHeight + 10
        ) {
            return;
        }

        pos.current = e.target.scrollTop;
        just_fetching.current = true;
        getData_API();
    }

    //
    return {
        is_fetching,
        getData_API,
        handleScroll,
    };
};
