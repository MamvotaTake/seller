import {RefObject, useEffect, useState} from "react";
import  {on, off} from "../utils/utils";

/**
 * Generates a function comment for the given function body.
 *
 * @param {RefObject<HTMLElement>} ref - The reference to the HTMLElement.
 * @return {boolean} The boolean value indicating if the HTMLElement is being hovered over.
 */
const useIsHovering = (ref: RefObject<HTMLElement>): boolean => {
    if (typeof ref !== 'object' ||typeof ref.current === 'undefined'){
        console.error('useHoverDirty expects a single ref argument.')
    }

    const [value, setValue] = useState(false)

    useEffect(() => {
        const onMouseOver = () => setValue(true)
        const onMouseLeave = () => setValue(false);

        if (ref && ref.current){
            on(ref.current, 'mouseover', onMouseOver)
            on(ref.current, 'mouseleave', onMouseLeave)
        }

        // fixes react-hooks/exhaustive-deps warning about stale ref elements
        const { current } = ref

        return () => {
            if (current){
                off(ref.current, 'mouseover', onMouseOver)
                off(ref.current, 'mouseleave', onMouseLeave)
            }
        }
    }, [ref]);

    return value;
}

export default useIsHovering