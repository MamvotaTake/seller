import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {MdLanguage} from "react-icons/md";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;

}

const items: MenuItem[] = [
    getItem('English', 'sub1', <MdLanguage className='hidden text-5xl'/>, [
        getItem('Russian', '1',  ),
        getItem('French', '2'),
        getItem('Portuguese', '3'),
    ]),


    getItem('Success Stories', '4'),
    getItem('About Robin', '5'),
    getItem('F.Q.A', '6'),
    getItem('Analytics', '7'),

];

export function SideMenu() {
    const [current, setCurrent] = useState('1');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Menu
            onClick={onClick}
            style={{ width: 340 }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            items={items}
            className='mt-8 text-lg'
            inlineCollapsed={false}
        />
    );
}