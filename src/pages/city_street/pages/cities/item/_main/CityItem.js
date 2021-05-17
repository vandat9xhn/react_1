import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
import { API_City_UD } from '../../../../../../api/api_django/api01/API01';
import makeFormData from '../../../../../../_some_function/makeFormData';
import { handle_API_CityHistory_L } from '../../../../__handle_api/CityHandleAPI';
import { useForceUpdate } from '../../../../../../_custom_hooks/UseForceUpdate';
//
import SkeletonDiv from '../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
import PictureName from '../../../../../../component/picture_name/pic_name/PictureName';
//
import Choices from '../../choices/Choices';
import CityUpdate from '../../actions/action_update/CityUpdate';
//
import image_loading from '../../../../../../../image/image_loading.svg';
import './CityItem.scss';

//
CityItem.propTypes = {
    city_obj: PropTypes.object,
};

//
function CityItem(props) {
    const { city_obj } = props;

    const {
        id,
        user,
        city,
        street,
        image,
        count_his,

        is_user,
        is_del,
    } = city_obj;

    // hook
    const forceUpdate = useForceUpdate();

    // context
    const {
        openScreenConfirm,
        openScreenHistory,
        openScreenUpdate,
        //
        closeScreenUpdate,
    } = useContext(context_api);

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
        openScreenUpdate(
            'Update',
            CityUpdate, // UpdateComponent
            {
                initialValues: {
                    city: city,
                    street: street,
                    image: image,
                },
                handleSubmit: handleUpdate,
            } //data_update
        );
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
        // Do something and force_update
        await API_City_UD(id, 'PATCH', makeFormData(data));
        city_obj.city = data.city;
        city_obj.street = data.street;
        data.image && (city_obj.image = data.image);

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
            <div className="CityItem">
                <div className="CityItem_contain brs-5px box-shadow-1">
                    <div className="CityItem_user">
                        <PictureName user={user} />
                    </div>

                    {city ? (
                        <div>
                            <div>City: {city}.</div>
                            <div>Street: {street}</div>
                        </div>
                    ) : (
                        <SkeletonDiv num={2} />
                    )}

                    <div className="CityItem_img">
                        <a href={image || image_loading} target="_blank">
                            <div className="CityItem_img-contain bg-loader brs-5px">
                                <img src={image || image_loading} alt="" />
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
            </div>
        )
    );
}

export default CityItem;
