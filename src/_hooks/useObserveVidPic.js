import { useObserveVidPic as _useObserveVidPic } from 'react-observer-ts';

//
export function useObserveVidPic(ref_elm) {
    //
    return _useObserveVidPic({
        ref_elm: ref_elm,
        class_hide: 'vid_pic-observe opacity-0',
        class_show: 'vid_pic-observe opacity-1',
    });
}
