import {Key, RefObject, useLayoutEffect, useRef, useState} from "react";
import {useResizeObserver} from "./useResizeObserver.ts";

/**
 * Generates the slider positioning based on the current value and transition duration.
 *
 * @param {Key | null | undefined} currentValue - The current value of the slider.
 * @param {number} transitionMs - The duration of the transition in milliseconds.
 * @return {{
 *    containerRef: RefObject<C>,
 *    selectionRef: RefObject<S>,
 *    sliderWidth: number,
 *    sliderOffset: number,
 *    transitioning: boolean
 * }} The slider positioning information.
 */
export function useSliderPositioning<C extends HTMLElement, S extends HTMLElement>(currentValue:Key |  null|undefined, transitionMs: number): {
    containerRef:RefObject<C>,
    selectionRef:RefObject<S>,
    sliderWidth:number,
    sliderOffset:number,
    transitioning:boolean
} {
    const hasRenderedInitiallyRef = useRef(false);
    const containerRef = useRef<C>(null);
    const selectionRef = useRef<S>(null);
    const [[selectionWidth, selectionOffset], setSelectionWidthAndOffset] = useState<[number, number]>([0, 0]);
    const [transitioning, setTransitioning] = useState(false);
    const {width: containerWidth = 0} = useResizeObserver({ref:containerRef});

    useLayoutEffect(() => {
        if(selectionRef.current){
            setSelectionWidthAndOffset([selectionRef.current.offsetWidth, selectionRef.current.offsetLeft]);
            if(hasRenderedInitiallyRef.current){
                setTransitioning(true);
                const transitioningTimeout = setTimeout(() => setTransitioning(false), transitionMs)
                return () => clearTimeout(transitioningTimeout)
            } else {
                hasRenderedInitiallyRef.current = true
            }
        }
    }, [currentValue, containerWidth]);

    return {
        containerRef,
        selectionRef,
        sliderWidth: selectionWidth,
        sliderOffset: selectionOffset,
        transitioning
    }
}
