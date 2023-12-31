import {Col, Flex,  Row,  Image} from "antd";
import { Typography } from 'antd';
import {RobinCollapse} from "../robin-ui/RobinCollapse/RobinCollapse.tsx";
import {ReactNode} from "react";
import {RobinInput} from "../robin-ui/RobinInput";



const { Paragraph, Title } = Typography;


export function Home({currentRef}: {currentRef: ReactNode}) {

    return (
        <>
            <Col className='space-y-16'>
                <Flex vertical align='center' className='py-16'>
                    <h1 className='flex leading-none flex-col text-7xl items-center font-extrabold'>Any business will find a place on
                        <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text inline-block'>
                            ROBIN
                        </span>
                    </h1>
                    <Paragraph style={{textAlign: 'center', maxWidth: '50rem', fontSize: '1.6rem', marginTop: '3rem'}}>
                        Launch your own store today!
                        Registration is simple, logistics is on us, and for those who is a sales novice
                        we got all necessary tools to jump in faster.
                    </Paragraph>

                    <RobinInput  size='medium' aria-label="Close" placeholder='Enter phone number!' className="w-96 bg-zinc-100/80 py-4"/>

                </Flex>
                <Flex ref={currentRef}  className='flex justify-center  bg-gradient-to-r from-gray-900 to-cyan-900  py-16'>
                    <Row align={"stretch"}  className="flex gap-8 ">
                        <Col className='w-[40rem] space-y-6'>
                            <Title style={{color: 'white', fontSize: '3rem', fontWeight: 'bold'}}>Join us, we will grow together</Title>
                            <RobinCollapse/>
                        </Col>
                        <Col className='relative'>
                            <Image
                                preview={false}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                height={570}
                                className='relative md:rounded-tl-[5rem] md:rounded-br-[5rem]'
                            />
                            <div className='absolute top-0 right-0 left-0 bottom-1 md:rounded-tl-[5rem] md:rounded-br-[5rem] bg-gray-900/50 text-white'>o</div>

                            <Flex vertical className="absolute bottom-12 -left-1/4 bg-blue-900/50 text-white p-4 md:rounded-tl-[2rem] md:rounded-br-[2rem]">
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