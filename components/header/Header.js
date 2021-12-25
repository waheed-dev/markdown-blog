import {Button, useColorMode, Box, Text, Heading, Divider} from "@chakra-ui/react";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box>

        <Box display={'flex'}  justifyContent={'space-between'} padding={'6'}>
        <Heading>Waheed</Heading>
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