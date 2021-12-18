import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { initial_page_preview } from '../../../_initial/page/preview';
//
import { handle_API_PagePreview_R } from '../../../_handle_api/fb_page/preview';
//
import { useMounted } from '../../../_hooks/useMounted';
//
import IconPublic from '../../../_icons_svg/icon_public/IconPublic';
import IconTablePhone from '../../../_icons_svg/icon_table_phone/IconTablePhone';
//
import ActionPreviewPc from '../../action_preview/pc/ActionPreviewPc';
import ActionsPreviewInfo from '../../action_preview/info/ActionsPreviewInfo';
import ActionsPageOther from '../../actions_page/other/ActionsPageOther';
import BtnPageCase from '../../button/page_actions/_case/BtnPageCase';
//
import './ActionPreviewPagePc.scss';

//
function ActionsCaseComponent({ item, page_id, handleAction }) {
    return (
        <BtnPageCase
            action_name={item.action_name}
            page_id={page_id}
            has_liked={item.has_liked}
            has_followed={item.has_followed}
            //
            handleAction={handleAction}
        />
    );
}

//
const ActionsOtherComponent = ({
    page_id,
    class_action_contain,
    handleAction,
}) => (
    <ActionsPageOther
        page_id={page_id}
        is_at_body={true}
        class_action_contain={class_action_contain}
        handleAction={handleAction}
    />
);

//
ActionPreviewPagePc.propTypes = {};

//
function ActionPreviewPagePc({
    page_id,
    title_action,

    pos_orientation,
    x_always,
    y_always,
}) {
    //
    const [page_state, setPageState] = useState({
        page: initial_page_preview(),
        is_fetching: false,
        has_fetched: false,
    });

    const { page, is_fetching, has_fetched } = page_state;

    const {
        id,
        name,
        picture,

        // following_count,
        // like_count,
        // has_followed,
        // has_liked,

        type,
        description,
        web_link,
        phone,

        action_case_arr,
    } = page;

    //
    const mounted = useMounted();

    // --------

    //
    async function getPageInfo() {
        setPageState({
            ...page_state,
            is_fetching: true,
        });

        const data = await handle_API_PagePreview_R({ page_id: page_id });

        if (!mounted) {
            return;
        }

        setPageState({
            ...page_state,
            page: data,
            is_fetching: false,
            has_fetched: true,
        });
    }

    //
    function handleAction(action_name = '') {
        console.log(action_name);
    }

    // ------

    const page_preview_arr = [
        {
            component: ActionsPreviewInfo,
            can_show: true,
            props: {
                Icon: null,
                info: '',
                title: type,
            },
        },

        {
            component: ActionsPreviewInfo,
            can_show: true,
            props: {
                Icon: null,
                info: '',
                title: description,
            },
        },

        {
            component: ActionsPreviewInfo,
            can_show: web_link,
            props: {
                Icon: <IconPublic />,
                info: '',
                title: (
                    <a href={web_link} target="_blank">
                        {web_link.slice(8)}
                    </a>
                ),
            },
        },

        {
            component: ActionsPreviewInfo,
            can_show: phone,
            props: {
                Icon: <IconTablePhone />,
                info: '',
                title: phone,
            },
        },
    ];

    //
    return (
        <ActionPreviewPc
            title_action={title_action}
            class_action_contain={'ActionPreviewPagePc'}
            // 
            pos_orientation={pos_orientation}
            x_always={x_always}
            y_always={y_always}
            //
            id={id}
            name={name}
            picture={picture}
            link_to={`/page/${id}`}
            //
            is_fetching={is_fetching}
            has_fetched={has_fetched}
            //
            preview_arr={page_preview_arr}
            action_case_arr={action_case_arr}
            case_props={{ page_id: id }}
            other_case_props={{ page_id: id }}
            //
            getData_API={getPageInfo}
            handleAction={handleAction}
            ActionsCaseComponent={ActionsCaseComponent}
            ActionsOtherComponent={ActionsOtherComponent}
        />
    );
}

export default ActionPreviewPagePc;
