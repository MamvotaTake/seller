import {Collapse, Flex} from "antd";
import { MinusOutlined, PlusOutlined} from "@ant-design/icons";

const text = `
 The frequency index in 2021 reached about 8.5 orders per user per year – an increase of more than double in the last two years.
`;
const styleIcon={
    display: 'flex',
    marginTop: '0.7rem',
    color: 'white',
    padding: '0.1rem',
    fontSize: '1rem',
    // border: '1px solid white',
    borderRadius: '50%',
    borderColor: 'white'
}
export function RobinCollapse() {
    return (
        <>
                <Flex vertical className='space-y-6 py-6'>
                    <Flex className='flex justify-between gap-8'>
                        {/*<p className='flex items-center border border-white px-4 py-1 text-xl text-blue-50 font-bold rounded-full'>*/}
                        {/*    1*/}
                        {/*</p>*/}
                        <Collapse
                            collapsible="header"
                            defaultActiveKey={['2']}
                            bordered={false}
                            style={{color: 'white'}}
                            expandIconPosition="end"
                            expandIcon={({ isActive }) => isActive  ? <MinusOutlined style={styleIcon} /> : <PlusOutlined style={styleIcon} />}
                            className="w-full text-xl   font-semibold bg-gradient-to-r from-gray-300 to-cyan-900"
                            items={[
                                {
                                    key: '1',
                                    label: 'Turnover growth of 125%',
                                    children: <p className='text-sm text-stone-300'>{text}</p>,
                                },
                            ]}
                        />
                    </Flex>
                    <Flex className='flex justify-between gap-8'>

                        <Collapse
                            collapsible="header"
                            defaultActiveKey={['2']}
                            bordered={false}
                            expandIconPosition="end"
                            expandIcon={({ isActive }) => isActive  ? <MinusOutlined style={styleIcon} /> : <PlusOutlined style={styleIcon} />}
                            className="w-full text-xl font-semibold text-stone-300 bg-gradient-to-r from-gray-300 to-cyan-900"
                            items={[
                                {
                                    key: '1',
                                    label: 'Increase in the number of orders by 200%',
                                    children: <p className='text-sm'>{text}</p>,
                                },
                            ]}
                        />
                    </Flex>

                    <Flex className='flex justify-between gap-8'>

                        <Collapse
                            collapsible="header"
                            defaultActiveKey={['2']}
                            bordered={false}
                            expandIconPosition="end"
                            expandIcon={({ isActive }) => isActive  ? <MinusOutlined style={styleIcon}/> : <PlusOutlined style={styleIcon} />}
                            className="w-full z-10 text-xl font-semibold text-stone-300 bg-gradient-to-r from-gray-300 to-cyan-900"
                            items={[
                                {
                                    key: '1',
                                    label: 'Increase the frequency of orders by 60%',
                                    children: <p className='text-sm'>{text}</p>,
                                },
                            ]}
                        />
                    </Flex>
                </Flex>
        </>
    );
}