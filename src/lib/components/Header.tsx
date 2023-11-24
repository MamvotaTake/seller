import {Logo} from "./Logo.tsx";
import {Flex, Modal} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {useState} from "react";
import {SideMenu} from "./Menu.tsx";
import {MdMenuOpen} from "react-icons/md";

export function Header() {
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
            <Flex style={{width: '100%'}} justify="space-between" className='p-12' >
                <Logo/>
                <span onClick={showModal} className='cursor-pointer hover:text-blue-800 transition-all duration-300'>
                    {isModalOpen ? <MdMenuOpen className='text-3xl'/> : <MenuOutlined className='text-xl'/>}
                </span>
                <Modal width={400}  open={isModalOpen} onOk={handleOk}  onCancel={handleCancel}  footer={null}>
                    <SideMenu/>
                </Modal>
            </Flex>
        </>
    );
}