import React from 'react';
import PropTypes from 'prop-types';
import { formatLocalDateString } from '../../../../_some_function/FormatDate';

//
PLUsedTime.propTypes = {};

//
function PLUsedTime({ buying_time, rating_time, used_time_str }) {
    //
    return (
        <div className="PLUsedTime pos-rel">
            <div className="PLUsedTime_title text-third">
                Đã dùng khoảng {used_time_str}
            </div>

            <div className="PLUsedTime_contain display-none pos-abs bottom-100per">
                <div className="padding-y-20px padding-x-15px bg-ccc brs-4px">
                    <div className="flex-between-center margin-bottom-10px">
                        {[
                            {
                                title: 'Mua ngày',
                                time: buying_time,
                            },
                            {
                                title: 'Viết đánh giá',
                                time: rating_time,
                            },
                        ].map((item, ix) => (
                            <div key={ix}>
                                <div>{item.title}</div>

                                <div>{formatLocalDateString(item.time)}</div>
                            </div>
                        ))}
                    </div>

                    <div></div>

                    <div className="margin-bottom-10px text-align-center">
                        <span> Đã dùng</span>{' '}
                        <span className="font-500">khoảng {used_time_str}</span>
                    </div>

                    <div>
                        <ul className="padding-left-20px margin-0">
                            {[
                                {
                                    info: `Ở thời điểm viết đánh giá, khách đã mua sản phẩm khoảng 1 tuần.`,
                                },
                                {
                                    info: `Thời gian sử dụng thực tế có thể bằng hoặc ít hơn khoảng thời gian này.`,
                                },
                            ].map((item, ix) => (
                                <li key={ix}>{item.info}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PLUsedTime;
