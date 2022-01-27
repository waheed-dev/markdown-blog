import {Box, Heading} from "@chakra-ui/react";
import {ImQuotesLeft,ImQuotesRight} from 'react-icons/im'
import {Typewriter} from "react-simple-typewriter";
const PortCta = () => {
    return (
        <Box display={'flex'} justifyContent={'center'}>
            <ImQuotesLeft size={'30'}/>
            <Heading textAlign={'center'} fontSize={['xl','xl','2xl','3xl']} my={'12'}
            >In order to be irreplaceable, one must always be
                <Heading fontSize={['xl','xl','2xl','3xl']} color={'green.600'} _dark={{color : 'green.400'}}
                            fontWeight={'bold'}>
                    <Typewriter
                        words={['Different','Learning','Efficient','Creative','Discipline']}
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