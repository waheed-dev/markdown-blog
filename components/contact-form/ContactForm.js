import {
    Avatar,
    Box,
    Button,
    Checkbox,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    StackDivider,
    Text,
    Textarea,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiCloudUpload } from 'react-icons/hi'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { FieldGroup } from './FieldGroup'


export const ContactForm = () => (
    <Box mt={['14','18','20','20']}  mb={'10'}>

        <Heading>Contact me</Heading>
        <Box mt={['10','16','18','20']}>
            <Box ml={['6','10','10','10']}>
    <Box
        px={{
            base: '4',
            md: '10',
        }}
        py="16"
        maxWidth="3xl"
        mx="auto"
    >
        <form
            id="settings-form"
            onSubmit={(e) => {
                e.preventDefault()

            }}
        >
            <Stack spacing="4" divider={<StackDivider />}>

                <FieldGroup>
                    <VStack width="full" spacing="6">
                        <FormControl id="name">
                            <FormLabel>Name</FormLabel>
                            <Input type="text" maxLength={255} />
                        </FormControl>

                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>

                        <FormControl id="message">
                            <FormLabel>Message</FormLabel>
                            <Textarea rows={5} />
                            <FormHelperText>
                                Send a brief message
                            </FormHelperText>
                        </FormControl>
                    </VStack>
                </FieldGroup>
            </Stack>
            <FieldGroup mt="8">
                <HStack width="full">
                    <Button type="submit" colorScheme="green" bgColor={'green.600'}>
                        Save Changes
                    </Button>
                    <Button variant="outline">Cancel</Button>
                </HStack>
            </FieldGroup>
        </form>
    </Box>
            </Box>
        </Box>
    </Box>
)