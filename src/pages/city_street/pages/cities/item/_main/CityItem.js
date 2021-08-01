import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { API_City_UD } from '../../../../../../api/api_django/api01/API01';
//
import makeFormData from '../../../../../../_some_function/makeFormData';
//
import { handle_API_CityHistory_L } from '../../../../../../_handle_api/city/CityHandleAPI';
//
import { useScreenFetching } from '../../../../../../_hooks/UseScreenFetching';
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
//
import { openScreenConfirm } from '../../../../../../component/_screen/type/confirm/ScreenConfirm';
import { openScreenHistory } from '../../../../../../component/_screen/type/history/ScreenHistory';
import { openScreenUpdate } from '../../../../../../component/_screen/type/update/_main/ScreenUpdate';
//
import PictureName from '../../../../../../component/picture_name/pic_name/PictureName';
import VirtualScroll from '../../../../../../component/virtual_scroll/VirtualScroll';
//
//
import { city_bg_color_arr } from '../../../../_data/bg_color';
// 
import Choices from '../../choices/Choices';
import CityUpdate from '../../actions/action_update/CityUpdate';
import CityHistories from '../../actions/history/_main/CityHistories';
//
import './CityItem.scss';

//
CityItem.propTypes = {
    city_obj: PropTypes.object,
    has_fetched: PropTypes.bool,
};

//
function CityItem({ city_obj }) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    const {
        id,
        user,
        city,
        street,
        bg_color,
        quote,
        image,
        count_his,

        is_user,
        is_del,
    } = city_obj;

    const {bg, color} = city_bg_color_arr[bg_color]

    //
    const forceUpdate = useForceUpdate();

    const handleScreenFetching = useScreenFetching();

    /* ------------- OPEN ACTIONS ------------- */

    //
    function openHistory() {
        openScreenHistory({
            openScreenFloor: openScreenFloor,

            title: 'History',
            handle_API_History_L: on_API_History_L,
            HisComponent: CityHistories,
        });
    }
    //
    function openUpdate() {
        openScreenUpdate({
            openScreenFloor: openScreenFloor,

            title: 'Update',
            UpdateComponent: CityUpdate,
            initialValues: {
                city: city,
                street: street,
                image: image,
                quote: quote,
                bg_color: bg_color,
            },
            handleSubmit: handleUpdate,
        });
    }

    //
    function openDelete() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: 'Do you really want to delete this city?',
            handleConfirm: handleDelete,
        });
    }

    //
    function openReport() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Report',
            notification: 'Do you want to report this city?',
            handleConfirm: handleReport,
        });
    }

    /* --------------- ON HANDLE ACTIONS ---------------- */

    //
    function on_API_History_L(c_count) {
        return handle_API_CityHistory_L(id, c_count);
    }

    //
    async function handleUpdate(data = {}) {
        //
        await handleScreenFetching(() =>
            API_City_UD(id, 'PATCH', makeFormData(data))
        );

        city_obj.city = data.city;
        city_obj.street = data.street;
        data.image && (city_obj.image = data.image);
        city_obj.quote = data.quote;
        city_obj.bg_color = data.bg_color;

        forceUpdate();
        closeScreenFloor();
    }

    //
    async function handleDelete() {
        await API_City_UD(id, 'DELETE');
        city_obj.is_del = true;
        forceUpdate();
    }

    //
    function handleReport() {
        //  Do something
        console.log('Report: ' + id);
    }

    //
    return (
        !is_del && (
            <VirtualScroll>
                <div
                    className={`CityItem brs-5px-md box-shadow-1 ${bg} ${color}`}
                >
                    <div className="CityItem_user">
                        <PictureName user={user} />
                    </div>

                    <div>
                        <address>
                            <div>City: {city}</div>

                            <div>Street: {street}</div>
                        </address>

                        <article className="CityItem_quote">"{quote}"</article>
                    </div>

                    <div className="CityItem_img">
                        <a href={image} target="_blank">
                            <div className="CityItem_img-contain bg-loader brs-5px">
                                <div className="display-flex-center h-100per">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="CityItem_choices">
                        <Choices
                            is_user={is_user}
                            count_his={count_his}
                            //
                            openHistory={openHistory}
                            openUpdate={openUpdate}
                            openDelete={openDelete}
                            openReport={openReport}
                        />
                    </div>
                </div>
            </VirtualScroll>
        )
    );
}

export default CityItem;
