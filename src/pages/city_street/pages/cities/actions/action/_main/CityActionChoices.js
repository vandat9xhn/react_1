import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import { useBool } from '../../../../../../../_hooks/useBool';
//
import Actions from '../../../../../../../component/actions/_main/Actions';
//
import CityActionChoicesContain from '../contain/CityActionChoicesContain';
//
import './CityActionChoices.scss';

//
CityActionChoices.propTypes = {};

//
function CityActionChoices({
    is_poster,

    openHistory,
    openUpdate,
    openDelete,
    openReport,
}) {
    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // ----

    //
    function handleClose() {
        setIsTrue(false);
    }

    // ----

    //
    function onOpenHistory(params) {
        openHistory(params);
        setIsTrue(false);
    }

    //
    function onOpenUpdate(params) {
        openUpdate(params);
        setIsTrue(false);
    }

    //
    function onOpenDelete(params) {
        openDelete(params);
        setIsTrue(false);
    }

    //
    function onOpenReport(params) {
        openReport(params);
        setIsTrue(false);
    }

    // ------

    const Contain = (
        <CityActionChoicesContain
            is_poster={is_poster}
            openHistory={onOpenHistory}
            openUpdate={onOpenUpdate}
            openDelete={onOpenDelete}
            openReport={onOpenReport}
        />
    );

    //
    return (
        <div className="CityActionChoices">
            <Actions
                is_show={is_true}
                use_title={true}
                toggleShow={toggleBool}
                handleClose={handleClose}
            >
                {IS_MOBILE ? (
                    <div className="CityActionChoices_list-mb pos-abs bottom-0 left-0 w-100per bg-primary overflow-y-auto scroll-width-0">
                        {Contain}
                    </div>
                ) : (
                    <div className="CityActionChoices_list-pc brs-8px bg-primary box-shadow-fb">
                        {Contain}
                    </div>
                )}
            </Actions>
        </div>
    );
}

export default CityActionChoices;
