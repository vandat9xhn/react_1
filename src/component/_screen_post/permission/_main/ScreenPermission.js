import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import { IconsPermission } from '../../../../_groups_icon/permission/GroupIconPermission';
//
import ScreenBlurHead from '../../../_screen_blur/_component/head/ScreenBlurHead';
import ScreenBlur from '../../../_screen_blur/_main/ScreenBlur';
import ScreenPermissionItem from '../item/ScreenPermissionItem';
import ScreenBlurFootYesNo from '../../../_screen_blur/_component/foot_yes_no/ScreenBlurFootYesNo';
//
import './ScreenPermission.scss';

//
class ScreenPermission extends Component {
    state = {
        open_screen: false,
        active_num: 0,
        handleChoosePermission: () => {},
    };

    /* ---------------- OPEN - CLOSE ----------------- */

    //
    openScreenPermission = (active_num, handleChoosePermission) => {
        this.c_num = active_num;

        this.setState({
            open_screen: true,
            active_num: active_num,
            handleChoosePermission: handleChoosePermission,
        });
    };

    //
    closeScreenPermission = () => {
        this.c_num = -1;

        this.setState({
            open_screen: false,
            active_num: 0,
            handleChoosePermission: () => {},
        });
    };

    /* ---------------- CHOOSE - CONFIRM ----------------- */

    //
    choosePermission = (new_active_num) => {
        this.setState({
            active_num: new_active_num,
        });
    };

    //
    onConfirm = () => {
        const { handleChoosePermission, active_num } = this.state;

        this.c_num != active_num && handleChoosePermission(active_num);
        this.closeScreenPermission();
    };

    //
    render() {
        const { active_num, open_screen } = this.state;

        //
        return (
            <ScreenBlur
                open_screen={open_screen}
                closeScreen={this.closeScreenPermission}
            >
                <div className="ScreenPermission">
                    <div>
                        <ScreenBlurHead
                            title="Permission"
                            closeScreenBlur={this.closeScreenPermission}
                        />
                    </div>

                    <div className="ScreenBlur_body_contain scroll-thin">
                        {IconsPermission.map((icon_obj, ix) => (
                            <div
                                key={`ScreenPermission_${ix}`}
                                className="ScreenPermission_item"
                            >
                                <ScreenPermissionItem
                                    ix={ix}
                                    is_active={active_num == ix}
                                    icon_obj={icon_obj}
                                    choosePermission={this.choosePermission}
                                />
                            </div>
                        ))}
                    </div>

                    <div>
                        <ScreenBlurFootYesNo
                            disabled={this.c_num == active_num}
                            handleConfirm={this.onConfirm}
                            closeScreenBlur={this.closeScreenPermission}
                        />
                    </div>
                </div>
            </ScreenBlur>
        );
    }
}

ScreenPermission.propTypes = {};

export default ScreenPermission;
