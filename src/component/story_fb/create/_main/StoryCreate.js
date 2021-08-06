import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { openScreenCreateStoryPc } from '../../../_screen/type/story/pc/create/ScreenStoryCreate';

//
StoryCreate.propTypes = {};

//
function StoryCreate(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    useEffect(() => {
        openScreenCreateStoryPc({
            openScreenFloor: openScreenFloor,
            show_fav: true,
        });
    }, []);

    //
    return null;
}

export default StoryCreate;
