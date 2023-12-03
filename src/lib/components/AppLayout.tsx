import {Header} from "./Header/Header.tsx";
import {Home} from "./Home.tsx";
import {Flex} from "antd";

export function AppLayout() {
    return (
        <>
            <Flex vertical className='bg-blue-100 h-full flex'>
                <Header/>
                <Home/>
            </Flex>
        </>
    );
}