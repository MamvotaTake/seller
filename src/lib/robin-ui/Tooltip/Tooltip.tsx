import { Tooltip as AntdTooltip } from 'antd';
import { TooltipProps as AntdTooltipProps } from 'antd/lib/tooltip';
import {cloneElement, isValidElement, useState} from "react";
import {useDebounce} from "use-debounce";

const DEFAULT_DELAY = 300;

export type TooltipProps = AntdTooltipProps & {
    delayMs?: number
}
export function Tooltip({children, defaultOpen, delayMs = DEFAULT_DELAY, ...props}: TooltipProps): JSX.Element {
    const [localVisible, setVisible] = useState(false);
    const [debouncedLocalVisible] = useDebounce(defaultOpen ?? localVisible, delayMs);

    if(!('mouseEnterDelay' in props)) {
        props.mouseLeaveDelay = delayMs;
    }

    // See https://github.com/ant-design/ant-design/blob/master/components/tooltip/index.tsx#L226
    const child = isValidElement(children) ? children : <span>{children}</span>;

    const derivedVisible = typeof defaultOpen === 'undefined' ? localVisible && debouncedLocalVisible : defaultOpen;
    return props.title ? (
        <AntdTooltip {...props} defaultOpen={derivedVisible}>
            {cloneElement(child, {
                onMouseEnter: () => {
                    child.props.onMouseEnter?.()
                    if (typeof defaultOpen === 'undefined') {
                        setVisible(true)
                    }
                },
                onMouseLeave: () => {
                    child.props.onMouseLeave?.()
                    if (typeof defaultOpen === 'undefined') {
                        setVisible(false)
                    }
                },
            })}
        </AntdTooltip>
    ) : (
        child
    );
}