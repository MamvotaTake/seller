import {Logo} from "../Logo.tsx";
import {Flex, Modal} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {useState} from "react";
import {SideMenu} from "../Menu.tsx";
import {MdMenuOpen} from "react-icons/md";
import {RobinButton} from "../../robin-ui/RobinButton";
import './Header.scss'

type Props={inView: boolean}

export function Header({ inView}: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Flex style={{width: '100%'}} justify="space-between" className='relative flex justify-center items-center py-12  '>
                <Logo/>
                <span onClick={showModal} className='absolute right-0 px-12  cursor-pointer hover:text-blue-800 transition-all duration-300'>
                        {isModalOpen ? <MdMenuOpen className='text-4xl text-zinc-950'/> : <MenuOutlined className='text-xl text-zinc-950'/>}
                    </span>

                <Modal width={400}  open={isModalOpen} onOk={handleOk}  onCancel={handleCancel}  footer={null}>
                    <SideMenu/>
                </Modal>
            </Flex>

            {
                inView && <Flex className='Header' >
                    <Flex style={{width: '100%'}} justify="space-between" className='px-12 mt-8 mb-8 '>
                        <Logo/>
                        <RobinButton  type='primary' >Create Profile/Login</RobinButton>
                        <span onClick={showModal} className='cursor-pointer hover:text-blue-800 transition-all duration-300'>
                        {isModalOpen ? <MdMenuOpen className='text-4xl text-zinc-950'/> : <MenuOutlined className='text-xl text-zinc-950'/>}
                    </span>

                        <Modal width={400}  open={isModalOpen} onOk={handleOk}  onCancel={handleCancel}  footer={null}>
                            <SideMenu/>
                        </Modal>
                    </Flex>
                </Flex>
            }
        </>
    );
}