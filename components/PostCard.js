import {Box, Text,Image} from "@chakra-ui/react";

const PostCard = ({title,author,date,coverImg,category, excerpt}) => {
    return (
    <Box  _hover={{
        border:'1px',
        borderColor: "teal.500",
    }} padding={'2'} borderRadius={'2xl'}>
        <Image objectFit={'cover'} borderRadius={'2xl'} boxSize={'400'} src={coverImg} alt="postCOverimg"/>
        <Box display={'flex'} justifyContent={'space-between'} mb={'2'}>

        <Text color={'gray.600'}>{date}</Text>
        <Text fontWeight={'medium'}>{author}</Text>
        </Box>
        <Text fontSize={'26'} fontWeight={'medium'} mb={'2'}>{title}</Text>
        <Text fontSize={'18'} color={'gray.600'}>{excerpt}</Text>
    </Box>
    )
}

export default PostCard