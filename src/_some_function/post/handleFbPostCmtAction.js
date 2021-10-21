//
export function handleFbPostCmtAction({
    action_name = '',
    
    openEdit = () => {},
    openDelete = () => {},
    openReport = () => {},
}) {
    if (action_name == 'edit') {
        openEdit();

        return;
    }

    if (action_name == 'delete') {
        openDelete();

        return;
    }

    if (action_name == 'report') {
        openReport();

        return;
    }
}
