import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
// 
import { context_api } from '../../../../_context/ContextAPI';
//
import { openScreenStoryMenuMobile } from '../../../_screen/type/story/mobile/menu/ScreenStoryMenuMobile';
import { openScreenStoryPc } from '../../../_screen/type/story/pc/_main/ScreenStoryPc';

//
StoryMenu.propTypes = {};

//
function StoryMenu(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    useEffect(() => {
        IS_MOBILE
            ? openScreenStoryMenuMobile({ openScreenFloor: openScreenFloor })
            : openScreenStoryPc({
                  openScreenFloor: openScreenFloor,
                  old_active_ix: parse(location.search, { parseNumbers: true })[
                      'i'
                  ],
              });
    }, []);

    //
    return null;
}

export default StoryMenu;
