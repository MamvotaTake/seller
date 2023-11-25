export const noop = () => {};

export function on <T extends Window | Document | HTMLElement | EventTarget >(
    obj: T | null,
    ...args: [...Parameters<NonNullable<T['addEventListener']>>, ...never]
):void {
    if (obj && obj.addEventListener) {
        obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
    }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null,
    ...args: [...Parameters<NonNullable<T['removeEventListener']>>, ...never]
){


    if (obj && obj.removeEventListener) {
        obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
    }
}


export const isBrowser = typeof window !== 'undefined';

export const isNavigator = typeof navigator !== 'undefined';
