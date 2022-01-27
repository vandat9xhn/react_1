import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { getRandomImg } from '../../../../../../_default/_common/default_image';
//
import './PLHomeTech.scss';

//
PLHomeTech.propTypes = {};

//
function PLHomeTech(props) {
    //
    const tech_arr = [
        {
            id: 1,
            content:
                'dasda dsad asdasd asd asdasda ads adas dasd asd asd asd asd asd asdasda sdas dasd asd asd asda sda dd  ada dad ada dasda das dasd asd as',
            img: getRandomImg(),
            link_to: '/phone-laptop',
            time_str: '6 giờ trước',
        },
        {
            id: 2,
            content: 'dasda dsad asdasd asd asdasda',
            img: getRandomImg(),
            link_to: '/phone-laptop',
            time_str: '6 giờ trước',
        },
        {
            id: 3,
            content: 'dasda dsad asdasd asd asdasda',
            img: getRandomImg(),
            link_to: '/phone-laptop',
            time_str: '6 giờ trước',
        },
        {
            id: 4,
            content: 'dasda dsad asdasd asd asdasda',
            img: getRandomImg(),
            link_to: '/phone-laptop',
            time_str: '6 giờ trước',
        },
        {
            id: 5,
            content: 'dasda dsad asdasd asd asdasda',
            img: getRandomImg(),
            link_to: '/phone-laptop',
            time_str: '6 giờ trước',
        },
        {
            id: 6,
            content: 'dasda dsad asdasd asd asdasda',
            img: getRandomImg(),
            link_to: '/phone-laptop',
            time_str: '6 giờ trước',
        },
    ];

    //
    return (
        <div className="PLHomeTech">
            <h2 className="PLHomeTech_title margin-bottom-15px pl-home-title-md">
                24h CÔNG NGHỆ
            </h2>

            <div className="PLHomeTech_row display-flex">
                {IS_MOBILE ? null : (
                    <Link
                        className="PLHomeTech_left color-inherit font-18px"
                        to={tech_arr[0].link_to}
                    >
                        <img
                            className="w-100per object-fit-cover"
                            src={tech_arr[0].img}
                            alt=""
                            height="300px"
                        />

                        <div className="wk-box-vertical line-clamp-2 overflow-hidden margin-y-10px font-700">
                            {tech_arr[0].content}
                        </div>

                        <div className="font-14px text-third">
                            {tech_arr[0].time_str}
                        </div>
                    </Link>
                )}

                <div className="PLHomeTech_right padding-left-10px font-12px">
                    {tech_arr.slice(IS_MOBILE ? 0 : 1).map((item, ix) => (
                        <Link
                            key={item.id}
                            className="PLHomeTech_right_item display-flex margin-bottom-10px color-inherit"
                            to={item.link_to}
                        >
                            <img
                                className="object-fit-cover"
                                src={item.img}
                                alt=""
                                width="120"
                                height="70"
                            />

                            <div className="margin-left-10px">
                                <div className="wk-box-vertical line-clamp-3 overflow-hidden margin-bottom-5px">
                                    {item.content}
                                </div>

                                <div className="font-10px text-third">
                                    {item.time_str}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PLHomeTech;
