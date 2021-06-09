import React from 'react';
import PropTypes from 'prop-types';
//
import IconsNature from '../../../../_icons_svg/icons_nature/IconsNature';
import IconsFlower from '../../../../_icons_svg/icons_flower/IconsFlower';
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import IconDiv from '../../../some_div/icon_div/IconDiv';
import SwitchDiv from '../../../some_div/switch_div/_main/SwitchDiv';
//
import './HeaderNature.scss';

//
HeaderNature.propTypes = {
    which_nature: PropTypes.string,
    seeNature: PropTypes.func,
    closeSeeNature: PropTypes.func,
    changeNature: PropTypes.func,
};

//
function HeaderNature({ which_nature, closeSeeNature, changeNature }) {
    //
    function onChangeSnow() {
        changeNature('snow');
    }

    //
    function onChangeFlower() {
        changeNature('flower');
    }

    //
    return (
        <div className="HeaderNature">
            <div
                className="HeaderNature_close cursor-pointer display-flex"
                onClick={closeSeeNature}
            >
                <div>
                    <IconsArrow x={200} y={200} />
                </div>
            </div>

            <div
                className="header_item HeaderNature_snow"
                onClick={onChangeSnow}
            >
                <SwitchDiv switch_on={which_nature == 'snow'}>
                    <IconDiv Icon={IconsNature}>Snow drop</IconDiv>
                </SwitchDiv>
            </div>

            <div
                className="header_item HeaderNature_flower"
                onClick={onChangeFlower}
            >
                <SwitchDiv switch_on={which_nature == 'flower'}>
                    <IconDiv Icon={IconsFlower}>Flower drop</IconDiv>
                </SwitchDiv>
            </div>
        </div>
    );
}

export default HeaderNature;
