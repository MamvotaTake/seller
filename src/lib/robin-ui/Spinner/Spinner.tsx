import './Spinner.scss'

import clsx from "clsx";

type SpinnerProps = {
    textColored?: boolean,
    className?: string
}

export function Spinner({textColored = false, className}: SpinnerProps): JSX.Element {
    return(
        <svg
            className={clsx('LemonIcon Spinner', textColored && `Spinner--textColored`, className)}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className="Spinner__layer">
                <circle cx="24" cy="24" r="16" />
            </g>
            <g className="Spinner__layer">
                <circle cx="24" cy="24" r="16" />
            </g>
        </svg>
    )
}

export function SpinnerOverlay({sceneLevel, visible = true, className, ...spinnerProps}: SpinnerProps & {
    /** @default false */
    sceneLevel?: boolean
    /** @default true */
    visible?: boolean
}): JSX.Element {
    return (
        <div className={clsx('SpinnerOverlay', sceneLevel && 'SpinnerOverlay--scene-level')} aria-hidden={!visible}>
            <Spinner className={clsx('text-5xl', className)} {...spinnerProps} />
        </div>
    )
}