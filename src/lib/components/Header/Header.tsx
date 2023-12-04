import {Logo} from "../Logo.tsx";
import {Flex, Modal} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {useState} from "react";
import {SideMenu} from "../Menu.tsx";
import {MdMenuOpen} from "react-icons/md";
import {useInView} from "react-intersection-observer";
import {RobinButton} from "../../robin-ui/RobinButton";

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {ref, inView} = useInView({
        threshold: 0.5,

    })
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
            <Flex ref={ref}  className='backdrop-blur-lg bg-white/30 text-blue-50 z-10 fixed top-0 left-0 right-0' >
                <Flex style={{width: '100%'}} justify="space-between" className='px-12 mt-8 mb-8 '>
                    <Logo/>
                    {!inView && <RobinButton  type='primary' >Create Profile/Login</RobinButton>}
                    <span onClick={showModal} className='cursor-pointer hover:text-blue-800 transition-all duration-300'>
                        {isModalOpen ? <MdMenuOpen className='text-4xl text-zinc-950'/> : <MenuOutlined className='text-xl text-zinc-950'/>}
                    </span>

                    <Modal width={400}  open={isModalOpen} onOk={handleOk}  onCancel={handleCancel}  footer={null}>
                        <SideMenu/>
                    </Modal>
                </Flex>
            </Flex>
        </>
    );
}