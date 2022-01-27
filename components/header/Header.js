import {Button, useColorMode, Box, Text, Heading, Divider} from "@chakra-ui/react";
import Link from 'next/link'
import {motion} from "framer-motion";
import {BsMoon, BsSun} from "react-icons/bs";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box >
        <Box display={'flex'}  justifyContent={'space-between'} mb={'10'}>
        <Heading
            letterSpacing={'2px'} fontSize={['lg','2xl','3xl','4xl']} bgGradient='linear(to-l, #7928CA, #FF0080)'  bgClip={'text'}>
            <Link href={'/'}>
                WAHEED
            </Link>
        </Heading>
            <Box display={'flex'}  alignItems={'center'} gap={['2','3','4','6']}>


                <Link href={'/blog'}>

                    Blog
                </Link>
        <Button onClick={toggleColorMode} bg={'transparent'}>
             {colorMode === 'light' ? <BsSun size={20}/> : <BsMoon size={'20'}/>}
        </Button>
            </Box>
        </Box>

        </Box>
    )

}
export default Header