import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { API_City_UD } from '../../../../../../api/api_django/api01/API01';
//
import { useForceUpdate } from '../../../../../../_custom_hooks/UseForceUpdate';
//
import makeFormData from '../../../../../../_some_function/makeFormData';
//
import PictureName from '../../../../../../component/picture_name/pic_name/PictureName';
//
import { handle_API_CityHistory_L } from '../../../../__handle_api/CityHandleAPI';
//
import './CityItem.scss';
//
import Choices from '../../choices/Choices';
import CityUpdate from '../../actions/action_update/CityUpdate';
import { useScreenFetching } from '../../../../../../_custom_hooks/UseScreenFetching';

//
CityItem.propTypes = {
    city_obj: PropTypes.object,
    has_fetched: PropTypes.bool,
};

//
function CityItem({ city_obj }) {
    //
    const {
        openScreenConfirm,
        openScreenHistory,
        openScreenUpdate,
        //
        closeScreenUpdate,
    } = useContext(context_api);

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

    //
    const forceUpdate = useForceUpdate();

    const handleScreenFetching = useScreenFetching();

    /* -------------------- OPEN ACTIONS ----------------- */

    //
    function openHistory() {
        openScreenHistory(
            'History',
            on_API_History_L,
            () => <div></div> // HisComponent
        );
    }
    //
    function openUpdate() {
        openScreenUpdate('Update', CityUpdate, {
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
        openScreenConfirm(
            'Delete',
            'Do you really want to delete this city?',
            handleDelete
        );
    }

    //
    function openReport() {
        openScreenConfirm(
            'Report',
            'Do you want to report this city?',
            handleReport
        );
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
        closeScreenUpdate();
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
            <div
                className="CityItem brs-5px box-shadow-1"
                style={{ backgroundColor: bg_color }}
            >
                <div className="CityItem_user">
                    <PictureName user={user} />
                </div>

                <div>
                    <address>
                        <div>City: {city}</div>

                        <div>Street: {street}</div>
                    </address>

                    <blockquote className="CityItem_quote">{quote}</blockquote>
                </div>

                <div className="CityItem_img">
                    <a href={image} target="_blank">
                        <div className="CityItem_img-contain bg-loader brs-5px">
                            <img src={image} alt="" />
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
        )
    );
}

export default CityItem;
