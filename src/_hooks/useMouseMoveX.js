import { useMouseMoveOneAxis } from "../_hooks/useMouseMoveOneAxis";

//
export function useMouseMoveX({
    handleMouseDown = () => {},
    handleMouseMove = () => {},
    handleMouseEnd = () => {},
}) {
    return useMouseMoveOneAxis({
        axis: "x",
        handleMouseDown: handleMouseDown,
        handleMouseMove: handleMouseMove,
        handleMouseEnd: handleMouseEnd,
    });
}
