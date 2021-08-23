// 
export function changeVidPicIx({new_ix, setStateObj}) {
    setStateObj(state_obj=> {
        return {
            ...state_obj,
            vid_pic_ix: new_ix
        }
    })
}