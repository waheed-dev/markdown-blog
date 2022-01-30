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
import {useState} from "react";


export const ContactForm = () =>  {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const [submitted, setSubmitted] = useState(false)
    const ResetHandler = () => {
        setName('')
        setEmail('')
        setMessage('')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('').res.send()
            }
        })
    }
    return (

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
                            onSubmit={handleSubmit}
                        >
                            <Stack spacing="4" divider={<StackDivider />}>

                                <FieldGroup>
                                    <VStack width="full" spacing="6">
                                        <FormControl id="name">
                                            <FormLabel>Name</FormLabel>
                                            <Input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  maxLength={255} />
                                        </FormControl>
                                        <FormControl id="email">
                                            <FormLabel>Email</FormLabel>
                                            <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
                                        </FormControl>
                                        <FormControl id="message">
                                            <FormLabel>Message</FormLabel>
                                            <Textarea rows={5} value={message} onChange={(e)=>{setMessage(e.target.value)}}  />
                                            <FormHelperText>
                                                Send a brief message
                                            </FormHelperText>
                                        </FormControl>
                                    </VStack>
                                </FieldGroup>
                            </Stack>
                            <FieldGroup mt="8">
                                <HStack width="full">
                                    <Button type="submit" onClick={handleSubmit} colorScheme="green" bgColor={'green.600'}>
                                        Send
                                    </Button>
                                    <Button variant="outline" onClick={ResetHandler}>Reset</Button>
                                </HStack>
                            </FieldGroup>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>

    )

}
