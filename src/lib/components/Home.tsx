import {Col, Flex, Input, Row, Select, Image} from "antd";
import { Typography } from 'antd';
import {RobinButton} from "../robin-ui/RobinButton/RobinButton.tsx";

const { Paragraph, Title } = Typography;

const selectBefore = (
    <Select defaultValue="+263" bordered={false} className='w-24 h-12 py-1 bg-gradient-to-r from-cyan-500 to-cyan-500'
            options={[
                {
                    value: '+266',
                    label: '+266',
                },
                {
                    value: '+263',
                    label: '+263',
                },
                {
                    value: '+27',
                    label: '+27',
                }
            ]}
    />
);
export function Home() {
    return (
        <>
            <Col className='space-y-16'>
                <Flex vertical align='center' className='py-12 '>
                    <h1 className='flex leading-none flex-col text-7xl items-center font-extrabold'>Any business will find a place on
                        <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text inline-block'>
                      ROBIN
                  </span></h1>
                    <Paragraph style={{textAlign: 'center', maxWidth: '50rem', fontSize: '1.6rem', marginTop: '3rem'}}>
                        Launch your own store today!
                        Registration is simple, logistics is on us, and for those who is a sales novice
                        we got all necessary tools to jump in faster.
                    </Paragraph>
                    <Flex className='mt-14'>
                        <Input addonBefore={selectBefore} size="large" bordered={false} placeholder="Phone number" className="cursor-pointer flex items-center w-[30rem] rounded-lg text-lg py-1 h-14 hover:h-20 hover:w-[30.5rem] transition-all duration-700 bg-gradient-to-r from-cyan-500 to-blue-500"/>
                    </Flex>

                </Flex>
                <Flex  className='flex justify-center  bg-gradient-to-r from-gray-900 to-cyan-900 py-12'>
                    <Row align={"stretch"}  className="flex gap-8 ">
                        <Col className='w-[40rem] space-y-6'>
                            <Title style={{color: 'white', fontSize: '3rem', fontWeight: 'bold'}}>Join us, we will grow together</Title>
                        </Col>
                        <Col className='relative'>
                            <Image
                                preview={false}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                height={570}
                                className='relative md:rounded-tl-[5rem] md:rounded-br-[5rem]'
                            />
                            <div className='absolute top-0 right-0 left-0 bottom-1 md:rounded-tl-[5rem] md:rounded-br-[5rem] bg-gray-900/50 text-white'>o</div>
                            {/*<Card*/}
                            {/*    hoverable*/}
                            {/*    style={{ width: 240 }}*/}
                            {/*    className='absolute top-12 left-3/4 bg-blue-50 text-white'*/}
                            {/*    cover={<img className='w-fit' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                            {/*>*/}
                            {/*    <Flex vertical className='space-y-3'>*/}
                            {/*            <Button className='bg-blue-900 w-fit text-blue-50 rounded-lg text-xs' size="small">new</Button>*/}
                            {/*        <Text className='flex flex-col text-2xl font-bold'> Quick overview*/}
                            {/*            <span className='font-light'>*/}
                            {/*             of your store*/}
                            {/*        </span>*/}
                            {/*        </Text>*/}
                            {/*        <Paragraph className='justify-center'>*/}
                            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aspernatur.*/}
                            {/*        </Paragraph>*/}

                            {/*        <Title level={5} className='text-blue-900'>Explore More</Title>*/}
                            {/*    </Flex>*/}
                            {/*</Card>*/}
                            <Flex vertical className="absolute bottom-1/2 -left-1/4 bg-blue-900/50 text-white p-4 md:rounded-tl-[2rem] md:rounded-br-[2rem]">
                                <Row gutter={[16, 16]} justify="start">
                                    <Col span={3}>
                                        <Image
                                            preview={false}
                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                            width={50}
                                            height={50}
                                            className='rounded-full object-cover mb-2'
                                        />
                                    </Col>
                                    <Col span={3}>
                                        <Image
                                            preview={false}
                                            src="https://th.bing.com/th/id/OIP.ccW3sIp9Idv8ZpZPBhXKEwAAAA?w=400&h=500&rs=1&pid=ImgDetMain"
                                            width={50}
                                            height={50}
                                            className='rounded-full object-cover mb-2'
                                        />
                                    </Col>
                                    <Col span={2}>
                                        <Image
                                            preview={false}
                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                            width={50}
                                            height={50}

                                            className='rounded-full object-cover mb-2'
                                        />
                                    </Col>
                                    <Col span={2}>
                                        <Image
                                            preview={false}
                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                            width={50}
                                            height={50}

                                            className='rounded-full object-cover mb-2'
                                        />
                                    </Col>
                                </Row>

                                8 000+ sellers exchange experience in our community
                            </Flex>
                        </Col>
                    </Row>

                </Flex>
            </Col>

        </>
    );
}