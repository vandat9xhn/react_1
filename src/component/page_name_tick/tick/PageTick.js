import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import ActionsHoldPc from '../../actions_hold/pc/ActionsHoldPc';
//
import PageTickBtn from './PageTickBtn';
//
import './PageTick.scss';

//
PageTick.propTypes = {
    size_icon: PageTickBtn.propTypes.size_icon,
};

//
function PageTick({ size_icon }) {
    //
    return IS_MOBILE ? (
        <PageTickBtn size_icon={size_icon} />
    ) : (
        <div className="PageTick">
            <ActionsHoldPc
                title_action={<PageTickBtn size_icon={size_icon} />}
                class_action_contain="w-360px padding-16px"
                //
                x_always="left"
                transform_x_more={-12}
                //
                time_leave={100}
                // use_caret={false}
            >
                <div>
                    A verified badge confirms that this is an authentic Page for
                    this public figure, media company or brand.
                </div>
            </ActionsHoldPc>
        </div>
    );
}

export default PageTick;
