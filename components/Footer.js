import {Box, Flex, Heading, Text, Link, Button, Tooltip} from "@chakra-ui/react";
import {AiFillGithub, AiFillLinkedin, AiOutlineArrowUp, AiOutlineTwitter, AiOutlineWarning} from "react-icons/ai";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    }
    return (
        <Box as={'footer'} mt={'4'}>
        <Flex justifyContent={'center'} pb={'10'} mt={''}>
                <Tooltip label="Under development" aria-label='A tooltip' bg={'red.500'} closeDelay={2000} IsOpen={true}  hasArrow={true}>
            <Box display={'flex'} gridGap={'6'}>
                <Link _hover={{textDecoration:'none'}} href={'https://github.com/waheed-dev/'} isExternal={true}>
                <AiFillGithub size={'25'}/>
                </Link>
                <AiOutlineTwitter size={'25'} />
                <AiFillLinkedin size={'25'}/>
            </Box>
                </Tooltip>
        </Flex>
            <Box textAlign={'center'} pb={'12'}>
                <Text fontSize={'sm'} mb={'2'}>developed and designed by Abdul Waheed</Text>
                <Text fontStyle={'italic'} color={'gray.500'} fontSize={'sm'}>© 2022,All rights reserved.</Text>
                <Button bgColor={'green.500'} _hover={{backgroundColor : 'green.600'}} color={'white'} _dark={{backgroundColor : 'green.400'}} onClick={scrollToTop} mt={'6'} >Back to top&nbsp;<AiOutlineArrowUp size={'20'}/></Button>
                <Text fontSize={'xs'} mb={'2'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'2'} mt={'8'}><AiOutlineWarning/> this site is currently under development</Text>
            </Box>

        </Box>
    )
}

export default Footer
