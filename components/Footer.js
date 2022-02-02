import {Box, Flex, Heading, Text,Link} from "@chakra-ui/react";
import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi";

const Footer = () => {
    return (
        <Box as={'footer'}>
        <Flex justifyContent={'space-between'} pb={'6'}>
            <Box>
                <Heading fontSize={'2xl'} letterSpacing={'widest'}>A.Waheed</Heading>

            </Box>
            <Box display={'flex'} gridGap={'6'}>
                <AiFillGithub size={'25'}/>
                <AiOutlineTwitter size={'25'} />
                <AiFillLinkedin size={'25'}/>
            </Box>
        </Flex>
            <Box textAlign={'center'} pb={'6'}>
                <Text fontSize={'sm'} mb={'2'}>developed and designed by Abdul Waheed</Text>
                <Box display={'flex'} justifyContent={'center'} gap={'1'} alignItems={'center'} mb={'2'}>
                <Text fontSize={'xs'}>Made with <Link color={'blue.500'} fontSize={'sm'} href={'https://chakra-ui.com/'} isExternal>
                    Chakra Ui
                </Link>
                </Text>
                   <BiLinkExternal/>
                </Box>
                <Text fontStyle={'italic'} color={'gray.500'} fontSize={'sm'}>© 2022,All rights reserved.</Text>
            </Box>

        </Box>
    )
}

export default Footer
