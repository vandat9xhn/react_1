import React from 'react';
//
import { API_FbSearchGroup_L } from '../../api/api_django/fb_search/groups';
//
import IconsArrow from '../../_icons_svg/icons_arrow/IconsArrow';
import IconSent from '../../_icons_svg/icons_status_message/icon_sent/IconSent';
import IconPlusSubtract from '../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';

//
export async function handle_API_FbSearchGroup_L({ c_count = 0, params = {} }) {
    const res = await API_FbSearchGroup_L({
        c_count: c_count,
        size: 16,
        page: 1,
        ...params,
    });

    const { data } = res.data;

    data.map((item) => {
        const ix = ['joined', 'not_joined', 'sent_request'].indexOf(
            item.action_case
        );

        item['action_case_obj'] = [
            {
                name: item.action_case,
                title: 'Visit group',
                Icon: <IconSent stroke="currentColor" size_icon="12px" />,
            },
            {
                name: item.action_case,
                title: 'Join group',
                Icon: (
                    <IconPlusSubtract stroke="currentColor" size_icon="10px" />
                ),
            },
            {
                name: item.action_case,
                title: 'Pending',
                Icon: (
                    <div className="display-flex-center rotate-180 line-16px">
                        <IconsArrow x={200} y={200} size_icon="14px" />
                    </div>
                ),
            },
        ][ix];

        return item;
    });

    return { ...res.data, data: data };
}
