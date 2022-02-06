import {Box, Flex, Heading, Img, SimpleGrid, Text, useColorModeValue as mode} from '@chakra-ui/react'
import * as React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import {boxVariants, MotionBox, opacityVariants, outerboxVariants} from "../helpers/helpers";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const Testimonial = (props) => {

    const { children, image, author, role, colorScheme: c } = props
    const accentColor = mode(`${c}.600`, `${c}.400`)
    return (
        <Flex
            direction="column"
            rounded={{
                md: 'lg',
            }}
            bg={mode('white', 'gray.700')}
            shadow="lg"
        >
            <Flex
                direction="column"
                position="relative"
                mb="4"
                textAlign="center"
                justify="center"
                align="center"
                pt="10"
                pb="6"
                px="10"
            >
                <Box as="blockquote" maxW="340px" mx="auto" my="4">
                    <Box
                        position="absolute"
                        top="6"
                        left="5"
                        display={{
                            base: 'none',
                            md: 'inline',
                        }}
                        fontSize="3xl"
                        color={accentColor}
                        opacity={0.2}
                    >
                        <ImQuotesLeft />
                    </Box>
                    <Text fontSize="lg">{children}</Text>
                    <Box
                        position="absolute"
                        bottom="-2"
                        right="5"
                        display={{
                            base: 'none',
                            md: 'inline',
                        }}
                        fontSize="3xl"
                        color={accentColor}
                        opacity={0.2}
                    >
                        <ImQuotesRight />
                    </Box>
                </Box>
            </Flex>
            <Flex
                direction="column"
                position="relative"
                align="center"
                justify="center"
                color="white"
                px="6"
                pb="8"
            >
                <Box
                    position="absolute"
                    left="0"
                    bottom="0"
                    w="full"
                    h="full"
                    roundedBottom={{
                        md: 'lg',
                    }}
                    overflow="hidden"
                    _before={{
                        content: `''`,
                        display: 'block',
                        position: 'absolute',
                        bottom: '0',
                        left: '-10%',
                        width: '120%',
                        height: '90%',
                        roundedTop: '120%',
                        bg: accentColor,
                    }}
                />
                <Img
                    src={image}
                    alt={author}
                    rounded="full"
                    border="6px solid"
                    borderColor={accentColor}
                    position="relative"
                    mt="-5"
                    w="16"
                    h="16"
                    objectFit="cover"
                />
                <Box position="relative" fontSize="sm" mt="3" textAlign="center">
                    <Text as="h3" fontWeight="bold" fontSize="md">
                        {author}
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export const Testimonials = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <MotionBox  ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={boxVariants}>

            <Heading>Testimonials</Heading>
            <Box mt={['10','16','18','20']}>
                <Box ml={['6','10','10','10']}>
        <Box as="section" bg={mode('white', 'gray.800')} py="12">
            <Box
                maxW={{
                    base: 'xl',
                    md: '6xl',
                }}
                mx="auto"
                px={{
                    md: '8',
                }}
            >
                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                    }}
                    spacing="10"
                >
                    <MotionBox

                    >

                    <Testimonial
                        author="Fahrudi Budi Prasetyo"
                        role="Chief Technology Officer, Astro Bike"
                        colorScheme="green"
                        image="/fahrudi.jpeg"
                    >
                        So glad I could finally experience the superb quality myself and I was quite impressed by the speed,thoughtfulness and the communication skills of the developer.
                    </Testimonial>
                    </MotionBox>
                    <MotionBox

                    >

                    <Testimonial
                        author="Eike Wagenfeld"
                        colorScheme="green"
                        image="https://images.unsplash.com/photo-1486116736668-6384736c9330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA3fHxsYWR5JTIwaGVhZHNob3R8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60"
                    >
                        "Was amazed to see how effective our new site was our customer retention improved by 22% in month one Alone without increasing any marketing budget.<br/>Overall very impressive"
                    </Testimonial>
                    </MotionBox>
                </SimpleGrid>
            </Box>
        </Box>
                </Box>
            </Box>
        </MotionBox>
    )
}
export default Testimonials