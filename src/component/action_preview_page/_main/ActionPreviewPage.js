import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import ActionPreviewPagePc from '../pc/ActionPreviewPagePc';
import PageTick from '../../page_name_tick/tick/PageTick';

//
ActionPreviewPage.propTypes = {};

//
function ActionPreviewPage({ page_id, title_action, has_tick }) {
    return (
        <React.Fragment>
            {IS_MOBILE ? (
                title_action
            ) : (
                <ActionPreviewPagePc
                    page_id={page_id}
                    title_action={title_action}
                />
            )}

            {has_tick ? (
                <span>
                    <span className="inline-block vertical-align-middle margin-left-5px wh-16px">
                        <PageTick />
                    </span>
                </span>
            ) : null}
        </React.Fragment>
    );
}

export default ActionPreviewPage;
