import {Box,Text,Image,Button} from "@chakra-ui/react";

const SelfInfo = () => {
    return (
        <Box mt={'20'}  mb={'10'} display={['block','flex','flex','flex']} justifyContent={'space-between'} flexDirection={'row-reverse'} alignContent={'center'}>
            <Box >
                <Box border={'2px'} mt={'4'} boxSize={['250','240','240','240']} display={'flex'} mx={"auto"} justifyContent={'center'} alignContent={'center'} borderColor={'green.400'} borderRadius={'full'}>
                    <Image
                        mt={'8'}
                        src="/Saitama.png"
                        alt="Picture of the author"
                        boxSize={['150','240','240','240']}
                    />

                </Box>
            </Box>
            <Box gap={4} fontSize={'3xl'} fontWeight={'extrabold'} width={['sm','md','lg','lg']}>
                <Text>Hi,My Name is <Text as={'span'} color={'green.600'} _dark={{color : 'green.400'}}>Waheed
                </Text></Text>
                <Text fontSize={'2xl'} color={'gray.500'}>Full Stack developer</Text>
                <Text fontSize={'xl'} fontWeight={'normal'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et eveniet iusto nemo recusandae. Aut ex explicabo illum laborum mollitia odit officia, pariatur perspiciatis possimus quo, reiciendis sit vel veritatis!
                </Text>
                <Box display={'flex'} gap={6} mt={10}>
                <Button  colorScheme={'green'}>Contact</Button>
                <Button variant={'outline'} colorScheme={'green'}>Resume</Button>
                </Box>
            </Box>

        </Box>
    )
}

export default SelfInfo