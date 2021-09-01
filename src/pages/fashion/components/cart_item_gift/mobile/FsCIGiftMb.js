import React from 'react';
import PropTypes from 'prop-types';
//
import { FS_SEARCH_DEL_WIDTH } from '../../../../../_constant/Constant';
//
import { useShowHideUnder } from '../../../../../_hooks/useShowHideUnder';
//
import MainAndUnder from '../../../../../component/main_and_under/MainAndUnder';
//
import FsCIImgName from '../../cart_item/img_name/FsCIImgName';
import FsCIDelSearchMb from '../../cart_item/del_search_mobile/FsCIDelSearchMb';
//
import './FsCIGiftMb.scss';

//
FsCIGiftMb.propTypes = {};

//
function FsCIGiftMb({ id, name, img, total_add_cart, handleDeleteGift }) {
    //
    const { is_run, state_obj, handleStart } = useShowHideUnder({
        under_width: FS_SEARCH_DEL_WIDTH,
    });

    //
    return (
        <MainAndUnder
            main_elm={
                <div className="display-flex space-around align-items-center">
                    <div className="FsCIGiftMb_product">
                        <FsCIImgName img={img} name={name} />
                    </div>

                    <div className="FsCIGiftMb_count text-align-center text-secondary font-14px">
                        {total_add_cart}
                    </div>
                </div>
            }
            under_elm={
                <FsCIDelSearchMb
                    item_id={id}
                    width={FS_SEARCH_DEL_WIDTH}
                    handleDelete={handleDeleteGift}
                />
            }
            class_main="padding-8px bg-primary"
            class_under="right-0 top-0"
            //
            use_touch={true}
            trans_x={state_obj.trans_x}
            no_transition={is_run.current}
            handleStart={handleStart}
        />
    );
}

export default FsCIGiftMb;
