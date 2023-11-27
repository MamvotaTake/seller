import {CSSProperties} from "react";
import { AlignType } from 'rc-trigger/lib/interface'
import {useSliderPositioning} from "../../hooks/useSliderPositioning.ts";
import {BsInfo} from "react-icons/bs";
import {clsx} from "clsx";
import Link from "antd/lib/typography/Link";
import {Tooltip} from "../Tooltip";

/** A tab that represents one of the options, but doesn't have any content. Render tab-dependent UI yourself. */
export type AbstractRobinTab<T extends  string | number> = {
    key: T,
    label: string | JSX.Element,
    tooltip?: string | JSX.Element,
    link?: string,

}

/** A tab with content. In this case the RobinTabs component automatically renders content of the active tab. */
type ConcreteRobinTab<T extends string | number> = AbstractRobinTab<T> & {
    content: JSX.Element
};

export type RobinTab<T extends string | number> = AbstractRobinTab<T> | ConcreteRobinTab<T>

export type RobinTabsProps<T extends string | number> = {
    activeKey: T,
    onChange: (key: T) => void,
    tabs: (RobinTab<T> | null | false)[],
    'data-attr'?: string
}

type RobinTabsCSSProperties = CSSProperties & {
    '--robin-tabs-slider-width': `${number}px`;
    '--robin-tabs-slider-offset': `${number}px`;
};

/** Custom tooltip placement so that it is closely aligned with the tabs, instead of being distanced. */
const TAB_TOOLTIP_PLACEMENTS: Record<string, AlignType> = {
    top: {
        points: ['bc', 'tc'], // Bottom-center of tooltip aligned to top-center of target
        offset: [0, 4], // This is the key change - positioning the tooltip lower to align arrow tip and top of tab
        overflow: {
            adjustX: 0,
            adjustY: 0,
        },
    },
}
export function RobinTabs<T extends string | number>({activeKey, onChange, tabs, 'data-attr': dataAttr}: RobinTabsProps<T>): JSX.Element {
    const {containerRef, selectionRef, sliderWidth, sliderOffset, transitioning} = useSliderPositioning<HTMLUListElement, HTMLLIElement>(activeKey, 200)

    /** Tabs with falsy entries filtered out. */
    const realTabs = tabs.filter((Boolean)) as RobinTab<T>[]
    const activeTab = realTabs.find((tab) => tab.key === activeKey)


    return (
        <div
            className={clsx('LemonTabs', transitioning && 'LemonTabs--transitioning')}
            // eslint-disable-next-line react/forbid-dom-props
            style={
                {
                    '--robin-tabs-slider-width': `${sliderWidth}px`,
                    '--robin-tabs-slider-offset': `${sliderOffset}px`,
                } as RobinTabsCSSProperties
            }
            data-attr={dataAttr}
        >
            <ul className="LemonTabs__bar" role="tablist" ref={containerRef}>
                {realTabs.map((tab) => {
                    const content = (
                        <>
                            {tab.label}
                            {tab.tooltip && <BsInfo className="ml-1 text-base shrink-0" />}
                        </>
                    )
                    return (
                        <Tooltip key={tab.key} title={tab.tooltip} builtinPlacements={TAB_TOOLTIP_PLACEMENTS}>
                            <li
                                className={clsx('LemonTabs__tab', tab.key === activeKey && 'LemonTabs__tab--active')}
                                onClick={onChange ? () => onChange(tab.key) : undefined}
                                role="tab"
                                aria-selected={tab.key === activeKey}
                                tabIndex={0}
                                onKeyDown={
                                    onChange
                                        ? (e) => {
                                            if (e.key === 'Enter') {
                                                onChange(tab.key)
                                            }
                                        }
                                        : undefined
                                }
                                ref={tab.key === activeKey ? selectionRef : undefined}
                            >
                                {tab.link ? (
                                    <Link className="LemonTabs__tab-content" >
                                        {content}
                                    </Link>
                                ) : (
                                    <div className="LemonTabs__tab-content">{content}</div>
                                )}
                            </li>
                        </Tooltip>
                    )
                })}
            </ul>
            {activeTab && 'content' in activeTab && (
                <div className="LemonTabs__content" key={activeKey}>
                    {activeTab.content}
                </div>
            )}
        </div>
    )
}