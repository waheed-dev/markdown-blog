import {Box, Heading} from "@chakra-ui/react";
import {ImQuotesLeft,ImQuotesRight} from 'react-icons/im'
import {Typewriter} from "react-simple-typewriter";
const PortCta = () => {
    return (
        <Box display={'flex'} justifyContent={'center'}>
            <ImQuotesLeft size={'22'}/>
            <Heading textAlign={'center'} fontSize={['2xl','2xl','3xl','3xl']} my={'12'}
            >I can help make your site
                <Heading fontSize={['2xl','2xl','3xl','3xl']} color={'green.500'} _dark={{color : 'green.400'}}
                            fontWeight={'bold'}>
                    <Typewriter
                        words={['More fast','Generate more revenue','More secure','Rank better and have better SEO']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2500}
                    />
                </Heading>


            </Heading>
            <Box alignSelf={'flex-end'}>

            <ImQuotesRight size={'22'}/>
            </Box>
        </Box>
    )
}

export default PortCta