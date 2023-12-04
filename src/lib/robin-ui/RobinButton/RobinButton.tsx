
import './RobinButton.scss'
import './RobinButton3000.scss'

import {ButtonHTMLAttributes, forwardRef, FunctionComponent, ReactNode, RefAttributes} from "react";
import clsx from "clsx";
import {Spinner} from "../Spinner/Spinner";
import {TooltipProps} from "../Tooltip";

type RobinButtonPropsBase =  Pick<
    ButtonHTMLAttributes<HTMLElement>,
    | 'title'
    | 'onClick'
    | 'id'
    | 'tabIndex'
    | 'form'
    | 'onMouseDown'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onKeyDown'
    | 'role'
    | 'aria-haspopup'
    > & {
    title?: string;
    type?: 'primary' | 'secondary' | 'tertiary' | 'onboarding';
    children?: ReactNode,
    status?: 'primary' | 'danger' | 'warning',
    size?: 'xsmall' |'small' | 'medium' | 'large',
    active?: boolean,
    className?: string
    disabled?: boolean,
    disabledReason?: string | null | false
    icon?: ReactNode | null,
    to?: string,
    fullWidth?: boolean,
    center?: boolean,
    sideIcon?: ReactNode | null,
    loading?: boolean,
    htmlType?: 'button' | 'submit' | 'reset',
    /** Tooltip to display on hover. */
    tooltip?: TooltipProps['title']
    tooltipPlacement?: TooltipProps['placement']
    /** Tooltip's `getPopupContainer`. **/
    getTooltipPopupContainer?: () => HTMLElement,
    'data-attr'?: string
    'aria-label'?: string

}

type RobinButtonProps = RobinButtonPropsBase & {
    sideIcon?: ReactNode | null
}

export const RobinButton: FunctionComponent<RobinButtonProps & RefAttributes<HTMLButtonElement>> =
    forwardRef(
    (
        {
            children,
            active = false,
            className,
            disabled,
            // disabledReason,
            loading,
            type = 'tertiary',
            status = 'primary',
            icon,
            sideIcon,
            fullWidth,
            center,
            size,
            htmlType = 'button',
            to,
            title,
            onClick,
            tooltip,
            // tooltipPlacement,
            // getTooltipPopupContainer,
            ...buttonProps

        },
        ref
    ): JSX.Element => {

        if(loading) {
            icon = <Spinner textColored/>
            disabled = true
        }
        //
        // let tooltipContent: TooltipProps['title']
        // if (disabledReason) {
        //     disabled = true // Support `disabledReason` while maintaining compatibility with `disabled`
        //     if (tooltipContent) {
        //         tooltipContent = (
        //             <>
        //                 {tooltip}
        //                 <div className="mt-1 italic">{disabledReason}</div>
        //             </>
        //         )
        //     } else {
        //         tooltipContent = <span className="italic">{disabledReason}</span>
        //     }
        // } else {
        //     tooltipContent = tooltip
        // }

        const ButtonComponent = to ? 'link' : 'button'
        const linkDependentProps = to ? {
            to: !disabled ? to : undefined,
        } : {type: htmlType}

        if (ButtonComponent === 'button' && !buttonProps['aria-label'] && typeof tooltip === 'string') {
            buttonProps['aria-label'] = tooltip
        }

        const workingButton = (
            <ButtonComponent
                ref={ref as unknown}
                className={clsx(
                        'LemonButton',
                        `LemonButton--${type}`,
                        `LemonButton--status-${status}`,
                        loading && `LemonButton--loading`,
                        size && `LemonButton--${size}`,
                        active && 'LemonButton--active',
                        fullWidth && 'LemonButton--full-width',
                        center && 'LemonButton--centered',
                        !children && 'LemonButton--no-content',
                        !!icon && `LemonButton--has-icon`,
                        !!sideIcon && `LemonButton--has-side-icon`,
                        className
                )}
                onClick={!disabled ? onClick : undefined}
                aria-disabled={disabled}
                {...linkDependentProps}
                {...buttonProps}
            >
                <span className="LemonButton__chrome">
                    {icon ? <span className="LemonButton__icon">{icon}</span> : null}
                    {children ? <span className="LemonButton__content">{children}</span> : null}
                    {sideIcon ? <span className="LemonButton__icon">{sideIcon}</span> : null}
                </span>
            </ButtonComponent>
        )

        return workingButton
    }
)