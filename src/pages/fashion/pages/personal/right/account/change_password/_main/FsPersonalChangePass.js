import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
//
import {
    detectPasswordIsReal,
    detectPasswordPattern,
} from '../../../../../../../../_some_function/detectPasswordIsOk';
//
import { useScreenFetching } from '../../../../../../../../_hooks/UseScreenFetching';
// 
import { openScreenNotice } from '../../../../../../../../component/_screen_once/notice/ScreenNotice';
//
import FsPChangePassHead from '../head/FsPChangePassHead';
import FsPChangePassForm from '../form/FsPChangePassForm';
import FsPChangePassSuccess from '../notice/success/FsPChangePassSuccess';
//
import './FsPersonalChangePass.scss';
import '../_mobile_css/FsPersonalChangePassMb.scss';

//
const FsPer_initial_change_pass_state_obj = () => {
    return {
        old_pass: '',
        new_pass: '',
        confirm_pass: '',

        old_pass_error: '',
        new_pass_error: '',
        confirm_pass_error: '',
    };
};

//
FsPersonalChangePass.propTypes = {};

//
function FsPersonalChangePass(props) {
    //
    const { openScreenOnce, closeScreenOnce } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        ...FsPer_initial_change_pass_state_obj(),
    });

    const {
        old_pass,
        new_pass,
        confirm_pass,

        old_pass_error,
        new_pass_error,
        confirm_pass_error,
    } = state_obj;

    //
    const handleScreenFetching = useScreenFetching();

    // ------

    //
    function handleChange({ key, value, other_state = {} }) {
        setStateObj({
            ...state_obj,
            [key]: value,
            ...other_state,
        });
    }

    // ------

    //
    function handleChangeOldPass(e) {
        handleChange({
            key: 'old_pass',
            value: e.target.value,
        });
    }

    //
    function handleChangeNewPass(e) {
        const value = e.target.value;
        const pattern_pass_is_ok = detectPasswordPattern(value);
        const confirm_pass_is_ok = value == confirm_pass_error;

        handleChange({
            key: 'new_pass',
            value: value,
            other_state: {
                new_pass_error: pattern_pass_is_ok
                    ? ''
                    : 'M???t kh???u c???n ??t nh???t 5 k?? t??? ch??? ho???c s???',
                confirm_pass_error: confirm_pass_is_ok
                    ? ''
                    : 'M???t kh???u kh??ng ch??nh x??c',
            },
        });
    }

    //
    function handleChangeConfirmPass(e) {
        const value = e.target.value;
        const pattern_pass_is_ok = value == new_pass;

        handleChange({
            key: 'confirm_pass',
            value: value,
            other_state: {
                confirm_pass_error: pattern_pass_is_ok
                    ? ''
                    : 'M???t kh???u kh??ng ch??nh x??c',
            },
        });
    }

    // --------

    //
    function handleForgetPass() {
        console.log('forget');
    }

    //
    async function handleConfirm() {
        if (new_pass_error || confirm_pass_error || new_pass == '') {
            return;
        }

        const pass_is_real = await handleScreenFetching(() =>
            detectPasswordIsReal(old_pass)
        );

        if (!pass_is_real) {
            setStateObj({
                ...state_obj,
                old_pass_error: 'M???t kh???u kh??ng ch??nh x??c!',
            });

            return;
        }

        setStateObj({
            ...FsPer_initial_change_pass_state_obj(),
        });

        openScreenNotice({
            openScreenOnce: openScreenOnce,
            ComponentNotice: <FsPChangePassSuccess />,
        });

        setTimeout(() => {
            closeScreenOnce();
        }, 1500);
    }

    //
    return (
        <div className="FsPersonalChangePass bg-primary">
            <div>
                <FsPChangePassHead />
            </div>

            <div className="FsPersonalChangePass_form">
                <FsPChangePassForm
                    old_pass={old_pass}
                    new_pass={new_pass}
                    confirm_pass={confirm_pass}
                    //
                    old_pass_error={old_pass_error}
                    new_pass_error={new_pass_error}
                    confirm_pass_error={confirm_pass_error}
                    //
                    handleChangeOldPass={handleChangeOldPass}
                    handleChangeNewPass={handleChangeNewPass}
                    handleChangeConfirmPass={handleChangeConfirmPass}
                    //
                    handleForgetPass={handleForgetPass}
                    handleConfirm={handleConfirm}
                />
            </div>
        </div>
    );
}

export default FsPersonalChangePass;
