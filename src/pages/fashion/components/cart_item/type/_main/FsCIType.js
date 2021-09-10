import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
// 
import IconCaret from '../../../../../../_icons_svg/_icon_caret/IconCaret';
//
import PortalAtBody from '../../../../../../component/portal/at_body/PortalAtBody';
// 
import FsITiers from '../../../../components/tiers/_main/FsITiers';
//
import './FsCIType.scss';

//
FsCIType.propTypes = {
    ...FsITiers.propTypes,
};

//
function FsCIType({
    tier_variations,
    quantity,
    total_add,
    models,

    model_ix,
    open_model,

    toggleOpen,
    handleConfirm,
    handleClose,
}) {
    //
    return (
        <div className="FsCIType pos-rel">
            <div
                className="FsCIType_type text-third cursor-pointer"
                onClick={toggleOpen}
            >
                <div className="display-flex">
                    <div className="margin-right-10px">Phân loại hàng:</div>

                    <div
                        className={`FsCIType_icon ${
                            open_model ? 'FsCIType_icon-open' : ''
                        }`}
                    >
                        <IconCaret size_icon="0.5rem" fill="currentColor" />
                    </div>
                </div>

                <div>{models[model_ix].name}</div>
            </div>

            {open_model ? (
                IS_MOBILE ? (
                    <PortalAtBody>
                        <div className="pos-fixed-100per bg-film z-index-lv5">
                            <FsITiers
                                tier_variations={tier_variations}
                                quantity={quantity}
                                total_add={total_add}
                                models={models}
                                old_model_ix={model_ix}
                                use_count={false}
                                handleClose={handleClose}
                                handleConfirm={handleConfirm}
                            />
                        </div>
                    </PortalAtBody>
                ) : (
                    <div className="pos-abs top-100per x-center z-index-lv1">
                        <FsITiers
                            tier_variations={tier_variations}
                            quantity={quantity}
                            total_add={total_add}
                            models={models}
                            old_model_ix={model_ix}
                            use_count={false}
                            handleClose={handleClose}
                            handleConfirm={handleConfirm}
                        />
                    </div>
                )
            ) : null}
        </div>
    );
}

export default FsCIType;
