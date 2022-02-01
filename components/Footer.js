import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
    return (
        <Flex justifyContent={'space-between'} pb={'6'}>
            <Box>
                <Heading fontSize={'2xl'} letterSpacing={'widest'}>A.Waheed</Heading>
                <Text fontStyle={'italic'} color={'gray.500'} fontSize={'xs'}>© 2021,All rights reserved.</Text>
            </Box>
            <Box display={'flex'} gridGap={'6'}>
                <AiFillGithub size={'25'}/>
                <AiOutlineTwitter size={'25'} />
                <AiFillLinkedin size={'25'}/>
            </Box>

        </Flex>
    )
}

export default Footer
