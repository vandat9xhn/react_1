import { ActionsContainMb } from 'react-portal-actions';

export default ActionsContainMb;

// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// //
// import { toggleAppHiddenTemp } from '../../../../_some_function/AppHiddenTemp';

// //
// ActionsContainMb.propTypes = {};

// //
// function ActionsContainMb({
//     class_actions_mb,
//     class_action_contain_mb,
//     children,

//     handleClose,
//     callbackOpen,
// }) {
//     //
//     useEffect(() => {
//         callbackOpen && callbackOpen();
//         toggleAppHiddenTemp({ is_hidden: true });

//         return () => {
//             toggleAppHiddenTemp({ is_hidden: false });
//         };
//     }, []);

//     // ----

//     //
//     function onClose(e) {
//         stopPropagation(e);
//         handleClose();
//     }

//     //
//     function stopPropagation(e) {
//         e.stopPropagation();
//     }

//     //
//     return (
//         <div
//             className={`ActionsMb pos-fixed-100per z-index-lv5 user-select-none ${class_actions_mb}`}
//             onTouchStart={stopPropagation}
//         >
//             <div className="pos-abs-100 bg-shadow-5" onClick={onClose}></div>

//             <div className={`ActionsMb_contain ${class_action_contain_mb}`}>
//                 {children}
//             </div>
//         </div>
//     );
// }

// export default ActionsContainMb;
