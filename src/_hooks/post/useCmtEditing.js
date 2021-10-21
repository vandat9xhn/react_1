//
export function useCmtEdit({
    cmt_obj,
    setStateObj,

    handle_API_MoreContentCmt_R,
    handle_API_Cmt_U,
}) {
    //
    async function openEditing() {
        const content_obj = cmt_obj.content_obj

        if (!content_obj.has_more_content) {
            setStateObj((state_obj) => ({
                ...state_obj,
                is_editing: true,
            }));

            return;
        }

        setStateObj((state_obj) => ({
            ...state_obj,
            is_editing: true,
            is_fetching_edit: true,
        }));

        const content_more = await handleScreenFetching(
            handle_API_MoreContentCmt_R
        );

        content_obj.content_more = content_more;

        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching_edit: false,
        }));
    }

    //
    async function handleEdit(data) {
        const { text, files, urls } = data;

        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching_edit: true,
        }));

        await handle_API_Cmt_U(id, {
            text: text,
            file: files.length ? files[0] : '',
        });

        content_obj.content = text;
        cmt_obj.vid_pic = urls[0].vid_pic;

        setStateObj((state_obj) => ({
            ...state_obj,
            is_editing: false,
            is_fetching_edit: false,
        }));
    }

    //
    function cancelEdit() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_editing: false,
        }));
    }

    // ----

    return {
        openEditing,
        handleEdit,
        cancelEdit,
    };
}
