import {Box, Image,Text,Heading,Button} from "@chakra-ui/react";
import {AiFillGithub} from "react-icons/ai";

const Budget = () => {
    return (
        <Box  mt={'20'} display={'flex'} justifyContent={'space-evenly'} gap={'4'}>

            <Box width={'lg'}>
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
            <Image
                src="/Budget.svg"
                alt="Picture of the author"
                boxSize={'330'}
            />
        </Box>
    )
}
export default Budget