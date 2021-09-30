import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// 
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';
//
import { handle_API_FsNotice_L } from '../../../../../../../../_handle_api/fashion/notice';
//
import { useDataShowMore } from '../../../../../../../../_hooks/useDataShowMore';
//
import ScreenBlurShowMore from '../../../../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
import HasLinkOrNot from '../../../../../../../../component/link/has_link_or_not/HasLinkOrNot';
//
import { FsPNotice_markAllAsRead } from '../../_state/FsPNotice_markAllAsRead';
//
import FsPNCommonItem from '../item/FsPNCommonItem';
import FetchingDiv from '../../../../../../../../component/some_div/fetching/FetchingDiv';
import FsPNoticeMarkAll from '../../_components/mark_all/FsPNoticeMarkAll';
//
import './FsPNoticeCommonMb.scss';

//
FsPNoticeCommon.propTypes = {
    notice_type: PropTypes.string,
};

FsPNoticeCommon.defaultProps = {
    notice_type: '',
};

//
function FsPNoticeCommon({ notice_type }) {
    //
    const { data_state, setDataState, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) =>
            handle_API_FsNotice_L({
                c_count: c_count,
                params: {
                    notice_type: notice_type,
                },
            }),
    });

    const { data_arr, count, is_fetching, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // ------

    //
    function markAllAsRead() {
        FsPNotice_markAllAsRead({ setDataState: setDataState });
    }

    //
    function handleShowMore() {
        getData_API();
    }

    //
    return (
        <div className="FsPNoticeCommon bg-primary">
            {has_fetched ? (
                <div>
                    <div className="border-bottom-blur font-14px">
                        <FsPNoticeMarkAll
                            has_new={data_arr.some((item) => !item.has_read)}
                            markAllAsRead={markAllAsRead}
                        />
                    </div>

                    {data_arr.map((item, ix) => (
                        <div
                            key={item.id}
                            className={`${
                                item.has_read ? '' : 'bg-fashion-heart'
                            }`}
                        >
                            <HasLinkOrNot
                                has_link={IS_MOBILE}
                                class_link="color-inherit"
                                link_to={`/fashion`}
                            >
                                <FsPNCommonItem
                                    logo={item.logo}
                                    name={item.name}
                                    info={item.info}
                                    img={item.img}
                                    created_time={item.created_time}
                                    link_to={item.link_to}
                                />
                            </HasLinkOrNot>
                        </div>
                    ))}

                    <div>
                        <ScreenBlurShowMore
                            title="Xem thêm"
                            is_fetching={is_fetching}
                            is_show_more={data_arr.length < count}
                            FetchingComponent={FetchingDiv}
                            handleShowMore={handleShowMore}
                        />
                    </div>
                </div>
            ) : (
                <div className="h-100per"></div>
            )}
        </div>
    );
}

export default FsPNoticeCommon;
