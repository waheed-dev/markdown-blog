import {Box, Flex, Heading, Text, Link, Button} from "@chakra-ui/react";
import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    }
    return (
        <Box as={'footer'}>
        <Flex justifyContent={'center'} pb={'10'}>
            <Box display={'flex'} gridGap={'6'}>
                <AiFillGithub size={'25'}/>
                <AiOutlineTwitter size={'25'} />
                <AiFillLinkedin size={'25'}/>
            </Box>
        </Flex>
            <Box textAlign={'center'} pb={'12'}>
                <Text fontSize={'sm'} mb={'2'}>developed and designed by Abdul Waheed</Text>
                <Box display={'flex'} justifyContent={'center'} gap={'1'} alignItems={'center'} mb={'2'}>
                <Text fontSize={'xs'}>Made with <Link color={'blue.500'} fontSize={'sm'} href={'https://chakra-ui.com/'} isExternal>
                    Chakra Ui
                </Link>
                </Text>
                   <BiLinkExternal/>
                </Box>
                <Text fontStyle={'italic'} color={'gray.500'} fontSize={'sm'}>© 2022,All rights reserved.</Text>
                <Button bgColor={'green.500'} _hover={{backgroundColor : 'green.600'}} color={'white'} _dark={{backgroundColor : 'green.400'}} onClick={scrollToTop} mt={'6'} >Back to top</Button>
            </Box>

        </Box>
    )
}

export default Footer
