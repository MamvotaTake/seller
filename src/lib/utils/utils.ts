export const noop = () => {};

/**
 * Adds an event listener to the specified object.
 *
 * @param {T | null} obj - The object to add the event listener to.
 * @param {...Parameters<T['addEventListener']>} args - The arguments to pass to the event listener.
 * @return {void} - This function does not return anything.
 */

export function on<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null,
    ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
    if (obj && obj.addEventListener) {
        obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
    }
}

/**
 * Removes an event listener from a DOM element or event target.
 *
 * @param {T extends Window | Document | HTMLElement | EventTarget} obj - The DOM element or event target to remove the event listener from.
 * @param {Parameters<T['removeEventListener']> | [string, Function | null, ...any]} args - The arguments passed to the removeEventListener method.
 * @return {void} - This function does not return anything.
 */

export function off<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null,
    ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
    if (obj && obj.removeEventListener) {
        obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
    }
}

export const isBrowser = typeof window !== 'undefined';

export const isNavigator = typeof navigator !== 'undefined';