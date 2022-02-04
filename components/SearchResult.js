import {Box,List, ListItem, OrderedList, Text, UnorderedList, useDisclosure} from "@chakra-ui/react";
import {useColorModeValue as mode} from "@chakra-ui/react";
import Link from 'next/link'

export default function SearchResults ({results}) {

    if (results.length === 0 ) {return <></>}
    return (
        <Box position={'absolute'}  width={['xs','xs','sm','md']} top={'40'} right={['10','100','180','400']} zIndex={'10'} >
            {results.map(res => {
                return (
                            <Link href={`/blog/${res.slug}`} passhref>
                    <Box px={'4'} py={'3'} bg={mode('gray.100', 'gray.900')}  _hover={{backgroundColor : 'gray.500',cursor : 'pointer'}}>
                        <UnorderedList p={''}>
                            <ListItem>{res.frontMatter.title}</ListItem>
                        </UnorderedList>
                    </Box>
</Link>
                )
            })}
        </Box>
        )

}