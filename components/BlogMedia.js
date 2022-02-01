import { Box, Img } from '@chakra-ui/react'
import * as React from 'react'


export const BlogMedia = (props) => {
    const { src, alt, ...rest } = props
    return (
        <Box pos="relative" borderRadius={'xl'} cursor="pointer" className="group" h={['250','300','400','400']} overflow="hidden" {...rest}>
            <Img
                w="full"
                h="full"
                objectFit="cover"
                htmlWidth="672"
                htmlHeight="448"
                src={src}
                alt={alt}
                transition="all 0.2s"
                _groupHover={{
                    transform: 'scale(1.05)',
                }}
            />

        </Box>
    )
}
