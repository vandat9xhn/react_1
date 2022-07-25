import { useMouseMoveOneAxis } from "../_hooks/useMouseMoveOneAxis";

//
export function useMouseMoveY({
    handleMouseDown = () => {},
    handleMouseMove = () => {},
    handleMouseEnd = () => {},
}) {
    return useMouseMoveOneAxis({
        axis: "y",
        handleMouseDown: handleMouseDown,
        handleMouseMove: handleMouseMove,
        handleMouseEnd: handleMouseEnd,
    });
}
