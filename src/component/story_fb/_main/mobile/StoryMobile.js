import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { openScreenStoryMenuMobile } from '../../../_screen/type/story/mobile/menu/ScreenStoryMenuMobile';

//
StoryMobile.propTypes = {};

//
function StoryMobile(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    useEffect(() => {
        openScreenStoryMenuMobile({ openScreenFloor: openScreenFloor });
    }, []);

    //
    return null;
}

export default StoryMobile;
