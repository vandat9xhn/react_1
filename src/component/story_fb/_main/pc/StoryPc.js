import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'query-string';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { openScreenStoryPc } from '../../../_screen/type/story/pc/_main/ScreenStoryPc';

//
StoryPc.propTypes = {};

//
function StoryPc(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    useEffect(() => {
        openScreenStoryPc({
            openScreenFloor: openScreenFloor,
            old_active_ix: parse(location.search, { parseNumbers: true })['i'],
        });
    }, []);

    //
    return null;
}

export default StoryPc;
