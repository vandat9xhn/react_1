import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PfAboutConfirm from '../../../_component/confirm/PfAboutConfirm';
import InputNotValid from '../../../../../../../../component/input/input_not_valid/InputNotValid';

//
PfAboutLifeEventEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutLifeEventEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, life_event } = item_obj;

    //
    const [cur_life_event, setCurLifeEvent] = useState(life_event);
    const [life_event_error, setLifeEventError] = useState(false);

    //
    function handleChangeLifeEvent(e) {
        setCurLifeEvent(e.target.value);
    }

    function onSave(new_permission) {
        if (
            /[a-zA-Z]{2,}/.test(cur_life_event) ||
            (life_event != '' && cur_life_event == '')
        ) {
            handleSave({
                permission: new_permission,
                life_event: cur_life_event.trim(),
            });
        } else {
            setLifeEventError(true);
        }
    }

    //
    return (
        <div>
            <div className={life_event_error ? 'text-red' : 'display-none'}>
                <div>LifeEvent must have at least 2 letters!</div>
                <br />
            </div>

            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="life_event"
                        value={cur_life_event}
                        type="text"
                        placeholder="Life event"
                        handleChange={handleChangeLifeEvent}
                    />
                </div>
            </div>

            <div>
                <PfAboutConfirm
                    permission={permission}
                    handleCancel={handleCancel}
                    handleSave={onSave}
                />
            </div>
        </div>
    );
}

export default PfAboutLifeEventEdit;
