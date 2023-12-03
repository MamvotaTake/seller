import {ButtonHTMLAttributes, forwardRef, FunctionComponent, ReactNode, RefAttributes} from "react";

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
    type?: 'primary' | 'secondary' | 'tertiary' | 'onboarding';
    children?: ReactNode,
    status?: 'primary' | 'danger' | 'warning',
    size?: 'xsmall' |'small' | 'medium' | 'large',
    active?: boolean,
    className?: string
    icon?: ReactNode | null,
    to?: string,
    sideIcon?: ReactNode | null,
    loading?: boolean,
    htmlType?: 'button' | 'submit' | 'reset',

}

type RobinButtonProps = RobinButtonPropsBase & {
    sideIcon?: ReactNode | null
}

export const RobinButton: FunctionComponent<RobinButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef(
    (
        {
            hildren,
            active = false,
            className,
            disabled,
            disabledReason,
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
            onClick,
            ...buttonProps

        },
        ref
    ): JSX.Element => {
        return 'Hello World'
    }
)