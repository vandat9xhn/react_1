//
const cmt_action_obj = {
    edit: {
        id: 1,
        name: 'edit',
        title: 'Edit',
    },
    delete: {
        id: 2,
        name: 'delete',
        title: 'Delete',
    },
    hide: {
        id: 3,
        name: 'hide',
        title: 'Hide comment',
    },
    report: {
        id: 4,
        name: 'report',
        title: 'Give feedback or report this comment',
    },
};

//
export function handle_API_FbPostCmtAction_L({
    is_commenter = false,
    is_poster = false,
    params = {},
}) {
    return new Promise((res) => {
        if (is_commenter) {
            res([cmt_action_obj.edit, cmt_action_obj.delete]);
        } else if (is_poster) {
            res([cmt_action_obj.delete, cmt_action_obj.hide]);
        } else {
            res([cmt_action_obj.hide, cmt_action_obj.report]);
        }
    });
}
