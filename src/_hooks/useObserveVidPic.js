import { useEffect, useState } from 'react';
//
import observerVidPic from '../_some_function/ImageObserve';

//
export function useObserveVidPic(ref_elm) {
    //
    const [class_vid_pic, setClassVidPic] = useState(
        'vid_pic-observe opacity-0'
    );

    //
    useEffect(() => {
        ref_elm.current &&
            observerVidPic({
                elements: [ref_elm.current],
                callback: () => {
                    setClassVidPic('vid_pic-observe opacity-1');
                },
            });
    }, [ref_elm]);

    //
    return class_vid_pic;
}
