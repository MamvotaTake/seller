import {Home} from "./Home.tsx";
import {Flex} from "antd";
import {Header} from "./Header";
import {useInView} from "react-intersection-observer";


export function AppLayout() {
    const { ref, inView } = useInView({
        threshold: 0.3
    })
    return (
        <>
            <Flex vertical className='bg-blue-100 h-full flex'>
                <Header inView={inView}/>
                <Home currentRef={ref}/>
            </Flex>
        </>
    );
}