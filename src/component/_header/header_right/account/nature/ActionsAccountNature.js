import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconsNature from '../../../../../_icons_svg/icons_nature/IconsNature';
import IconsFlower from '../../../../../_icons_svg/icons_flower/IconsFlower';
//
import IconDiv from '../../../../some_div/icon_div/IconDiv';
import FlexDiv from '../../../../some_div/flex_div/FlexDiv';

//
const icon_nature_obj = { snow: IconsNature, flower: IconsFlower };

//
ActionsAccountNature.propTypes = {};

//
function ActionsAccountNature({ which_nature, seeNature }) {
    //
    return (
        <div className="ActionsAccountNature">
            <div
                className="header_item"
                onClick={seeNature}
                title="Choose nature effect"
            >
                <FlexDiv
                    ComponentLeft={
                        <IconDiv
                            Icon={
                                which_nature
                                    ? icon_nature_obj[which_nature]
                                    : IconsNature
                            }
                        >
                            Nature Effect
                        </IconDiv>
                    }
                    ComponentRight={
                        <div className="rotate-180">
                            <IconsArrow x={200} y={200} />
                        </div>
                    }
                    space_between={true}
                />
            </div>
        </div>
    );
}

export default ActionsAccountNature;
