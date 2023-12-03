import {Logo} from "../Logo.tsx";
import {Button, Flex, Modal} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {useState} from "react";
import {SideMenu} from "../Menu.tsx";
import {MdMenuOpen} from "react-icons/md";
import {useInView} from "react-intersection-observer";

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {ref, inView} = useInView({
        threshold: 0.9,
        root: null,
    })
console.log(inView)
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
            <Flex  className='backdrop-blur-lg bg-white/30 text-blue-50 z-10 fixed top-0 left-0 right-0' >
                <Flex ref={ref} style={{width: '100%'}} justify="space-between" className='px-12 mt-8 '>
                    <Logo/>
                    {inView && <Button type={'link'} size={"large"} className='text-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-blue-50 hover:text-black'>Create Profile/Login</Button>}
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