import {Button, useColorMode, Box, Text, Heading, Divider} from "@chakra-ui/react";
import Link from 'next/link'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box>

        <Box display={'flex'}  justifyContent={'space-between'} padding={'6'}>
        <Heading>
            <Link href={'/'}>

            Waheed
            </Link>
        </Heading>
            <Box display={'flex'}  alignItems={'center'} gap={'6'}>

            <Text>About</Text>
        <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
            </Box>
        </Box>
            <Divider/>
        </Box>
    )

}
export default Header