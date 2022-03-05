import { ActionsHoldMb } from "react-portal-actions";

export default ActionsHoldMb;

// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// //
// import { useHold } from '../../../_hooks/useHold';
// import { useBool } from '../../../_hooks/useBool';
// //
// import ActionsMb from '../../actions/mobile/_main/ActionsMb';

// //
// ActionsHoldMb.propTypes = {};

// //
// function ActionsHoldMb({
//     title_action,
//     class_action_contain_mb,
//     children,

//     time_hold,
//     force_close,
// }) {
//     //
//     const { is_true, setIsTrue } = useBool();

//     //
//     const { StartHold, StopHold } = useHold({
//         time: time_hold,
//     });

//     //
//     useEffect(() => {
//         handleClose();
//     }, [force_close]);

//     // -----

//     //
//     function handleClose() {
//         setIsTrue(false);
//     }

//     //
//     function handleTouchStart() {
//         StartHold(() => {
//             setIsTrue(true);
//         });
//     }

//     //
//     function handleTouchEnd() {
//         StopHold(() => {
//             handleClose();
//         });
//     }

//     //
//     return (
//         <ActionsMb
//             title_action={
//                 <div
//                     className="ActionsHoldMb_title display-inherit cursor-pointer hv-underline"
//                     onTouchStart={handleTouchStart}
//                     onTouchEnd={handleTouchEnd}
//                 >
//                     {title_action}
//                 </div>
//             }
//             class_action_contain_mb={class_action_contain_mb}
//             use_own_title={true}
//             is_show={is_true}
//             handleClose={handleClose}
//         >
//             {children}
//         </ActionsMb>
//     );
// }

// export default ActionsHoldMb;
