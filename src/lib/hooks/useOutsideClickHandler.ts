import {MutableRefObject, useEffect} from "react";
import {off, on} from "../utils/utils.ts";

export const CLICK_OUTSIDE_BLOCK_CLASS = 'click-outside-block';

const exceptions = ['.ant-select-dropdown *', `.${CLICK_OUTSIDE_BLOCK_CLASS}`, `.${CLICK_OUTSIDE_BLOCK_CLASS} *`]
export function useOutsideClickHandler(
    refOrRefs: string | MutableRefObject<any> | (MutableRefObject<any> | string)[],
    handleClickOutside: (event: Event) => void,
    extraDeps: any[] = [],
    exceptTagNames?: string[]
): void{
    const allRefs = Array.isArray(refOrRefs) ? refOrRefs : [refOrRefs]

    useEffect(() => {
        function handleClick(event: Event) {
            if (exceptions.some((exception) => (event.target as Element)?.matches(exception))) {
                return
            }if (
                allRefs.some((maybeRef) => {
                    if (typeof maybeRef === 'string') {
                        return event.composedPath?.()?.find((e) => (e as HTMLElement)?.matches?.(maybeRef))
                    } else {
                        const ref = maybeRef.current
                        return event.target && ref && `contains` in ref && ref.contains(event.target as Element)
                    }
                })
            ) {
                return
            }
            const target = (event.composedPath?.()?.[0] || event.target) as HTMLElement
            if (exceptTagNames && exceptTagNames.includes(target.tagName)) {
                return
            }
            handleClickOutside?.(event)
        }

        if (allRefs.length > 0) {
            // Only attach event listeners if there's something to track
            on(document, 'mouseup', handleClick)
            on(document,'touchend', handleClick)
            return () => {
                off(document,'mouseup', handleClick)
                off(document,'touchend', handleClick)
            }
        }
    }, [...allRefs, ...extraDeps])
}