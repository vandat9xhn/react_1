import React from 'react';
import PropTypes from 'prop-types';
// 
import SwitchDiv from '../../../some_div/switch_div/_main/SwitchDiv';
import IconDiv from '../../../some_div/icon_div/IconDiv';
import IconsNature from '../../../../_icons_svg/icons_nature/IconsNature';
import IconsFlower from '../../../../_icons_svg/icons_flower/IconsFlower';
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
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
function HeaderNature(props) {
    const { which_nature, closeSeeNature, changeNature } = props;

    //
    function onChangeSnow() {
        changeNature(which_nature !== 'snow' ? 'snow' : '');
    }

    //
    function onChangeFlower() {
        changeNature(which_nature !== 'flower' ? 'flower' : '');
    }

    //
    return (
        <div className="HeaderNature">
            {/* close */}
            <div
                className="HeaderNature_close cursor-pointer display-flex"
                onClick={closeSeeNature}
            >
                <div>
                    <IconsArrow x={200} y={200} />
                </div>
            </div>

            {/* snow */}
            <div
                className="header_item HeaderNature_snow"
                onClick={onChangeSnow}
                title="Make snow drop"
            >
                <SwitchDiv switch_on={which_nature == 'snow'}>
                    <IconDiv Icon={IconsNature}>Snow drop</IconDiv>
                </SwitchDiv>
            </div>

            {/* flower */}
            <div
                className="header_item HeaderNature_flower"
                onClick={onChangeFlower}
                title="Make flower drop"
            >
                <SwitchDiv switch_on={which_nature == 'flower'}>
                    <IconDiv Icon={IconsFlower}>Flower drop</IconDiv>
                </SwitchDiv>
            </div>
        </div>
    );
}

export default HeaderNature;
