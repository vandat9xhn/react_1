import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import ActionPreviewPagePc from '../pc/ActionPreviewPagePc';

//
ActionPreviewPage.propTypes = {};

//
function ActionPreviewPage({ page_id, title_action }) {
    //
    if (IS_MOBILE) {
        return title_action;
    }

    return (
        <ActionPreviewPagePc page_id={page_id} title_action={title_action} />
    );
}

export default ActionPreviewPage;
