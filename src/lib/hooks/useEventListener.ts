import {DependencyList, useEffect, useRef} from "react";
import {off, on} from "../utils/utils.ts";

export type KeyboardEventHandler = (event: KeyboardEvent) => void
export type EventHandler = (event: Event) => void

export function useEventListener(
    eventName: string,
    handler: KeyboardEventHandler,
    element: Element | Window | null,
    deps?: DependencyList
): void

export function useEventListener(
    eventName: string,
    handler: EventHandler,
    element?: Element | Window | null,
    deps?: DependencyList
): void


export function useEventListener(eventName: string, handler: EventHandler | KeyboardEventHandler, element: Element | Window | null=window, deps?: DependencyList): void {

    //create a ref that stores handler
    const savedHandler = useRef<EventHandler>(() => {});

    useEffect(() => {
        savedHandler.current = handler as EventHandler;
    }, [handler]);

    useEffect(() => {
        if(!element?.addEventListener){
            console.warn(`Could not add event listener to ${eventName} on ${!element ?  element : (element as Element)?.localName ?? 'window'}`);
        }

        const eventListener: EventHandler = (event: Event) => savedHandler.current(event);

        // element?.addEventListener(eventName, eventListener);
        on(element, eventName, eventListener);

        return () => {
            // element?.removeEventListener(eventName, eventListener);
            off(element, eventName, eventListener);
        }

    }, [eventName, element, ...(deps || [])]);
}

