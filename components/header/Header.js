import {Button, useColorMode, Box, Text, Heading, Divider} from "@chakra-ui/react";
import Link from 'next/link'
import {motion} from "framer-motion";
import {BsMoon, BsSun} from "react-icons/bs";
import {useColorModeValue as mode} from "@chakra-ui/react";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box>
        <Box display={'flex'}  justifyContent={'space-between'} mb={'10'} alignItems={'center'}>
        <Heading
            letterSpacing={'2px'} fontSize={['2xl','2xl','3xl','4xl']} bgGradient='linear(to-l, #7928CA, #FF0080)'  bgClip={'text'} _hover={{cursor : 'pointer'}}>
            <Link href={'/'} >
                WAHEED
            </Link>
        </Heading>
            <Box display={'flex'}  alignItems={'center'} gap={['4','6','8','10']}>

        <Button variant={'outline'} onClick={toggleColorMode}>
             {colorMode === 'light' ? <BsSun size={20}/> : <BsMoon size={'20'}/>}
        </Button>
            </Box>
        </Box>

        </Box>
    )

}
export default Header