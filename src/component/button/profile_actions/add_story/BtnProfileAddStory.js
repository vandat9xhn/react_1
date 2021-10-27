import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconPlusSubtract from '../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import BtnProfileActions from '../_common/BtnProfileActions';
//
import './BtnProfileAddStory.scss';

//
BtnProfileAddStory.propTypes = {};

//
function BtnProfileAddStory({}) {
    //
    return (
        <Link className="color-inherit" to={`/story/create`}>
            <BtnProfileActions
                className={'BtnProfileAddStory bg-blue text-white'}
                Icon={
                    <div className="BtnProfileAddStory_icon display-flex-center brs-50 bg-always-white">
                        <IconPlusSubtract stroke="var(--blue)" />
                    </div>
                }
                title={'Add to Story'}
                // handleClick={onAddStory}
            />
        </Link>
    );
}

export default BtnProfileAddStory;
