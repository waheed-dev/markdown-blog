import {Box, Image,Text,Heading,Button} from "@chakra-ui/react";
import {AiFillGithub} from "react-icons/ai";

const Budget = () => {
    return (
        <Box  mt={'20'} display={['block','flex','flex','flex']} justifyContent={'space-evenly'} flexDirection={'row-reverse'} gap={'4'}>
            <Image
                src="/Budget.svg"
                alt="Picture of the author"
                boxSize={['150','240','240','240']}
                mx={'auto'}
                mb={'2'}
            />
            <Box width={'sm'}>
                <Heading>Budget Application</Heading>
                <Text fontSize={'2xl'} fontWeight={'bold'} color={'gray.500'}>Next js,Material ui,openMapWeatherApi</Text>
                <Text fontSize={'lg'} mt={'4'} mb={'10'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolores eaque esse quibusdam quod soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eius iusto minima pariatur perspiciatis rem.
                </Text>
                <Box display={'flex'} gap={'12'}>

                    <Button colorScheme={'green'}>Live preview</Button>
                    <AiFillGithub color={'green'} size={'40'}/>
                </Box>
            </Box>

        </Box>
    )
}
export default Budget