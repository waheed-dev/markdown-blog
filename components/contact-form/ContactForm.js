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
    Textarea, toast,
    useColorModeValue, useToast,
    VStack,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiCloudUpload } from 'react-icons/hi'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { FieldGroup } from './FieldGroup'
import {useEffect, useState} from "react";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {imageVariants, MotionBox, opacityVariants} from "../helpers/helpers";


export const ContactForm = () =>  {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    const toast = useToast()
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
        if (!message) return (
            toast({
                title: "Error",
                description:'please input your message',
                status: "error",
                duration: 4000,
                isClosable: true,
            })
        )
        if (!email) return (
            toast({
                title: "Error",
                description:'please input Email address',
                status: "error",
                duration: 4000,
                isClosable: true,
            })
        )
       if (!email.toString().includes('@')) return (
           toast({
               title: "Error",
               description:'please correct input Email address',
               status: "error",
               duration: 4000,
               isClosable: true,
           })
       )
        if (!name) return (
            toast({
                title: "Error",
                description:'please input name',
                status: "error",
                duration: 4000,
                isClosable: true,
            })
        )
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

        })
        if (name.toString().length > 0  && email.toString().length > 0 && message.toString().length > 0) {
            console.log('Response succeeded!')
            setSubmitted(true)
            setName('')
            setEmail('')
            setMessage('')
            return (
                toast({
                    position: 'bottom',
                    status : 'success',
                    render: () => (
                        <Box color='white' p={3} bg='green.700'>
                            successfully sent
                        </Box>
                    ),})
            )
        }
    }
    return (

        <MotionBox ref={ref}
                   animate={controls}
                   initial="hidden"
                   variants={opacityVariants} mt={['10','16','18','18']}  mb={['-4','2','8','8']}>

            <Heading>Contact me</Heading>
            <Box mt={['-16','-6','2','6']} id={'contact'}>
                <Box ml={['6','','-20','-20']}>
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
                            <FieldGroup mt={['-6','-4','1','1']}>
                                <HStack width="full" gap={['2','2','4','4']}>
                                    <Button type="submit"   px={['6','6','8','8']}  onClick={handleSubmit} bgColor={'green.500'} _hover={{backgroundColor : 'green.600'}} color={'white'} _dark={{backgroundColor : 'green.400'}}>
                                        Send
                                    </Button>
                                    <Button variant="outline" color={'green.500'} _dark={{color : 'green.400'}} px={['6','6','8','8']} onClick={ResetHandler}>Reset</Button>
                                </HStack>
                            </FieldGroup>
                        </form>
                    </Box>
                </Box>
            </Box>
        </MotionBox>

    )

}
