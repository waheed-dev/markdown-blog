import {Box, Heading, Text, Image, Button} from "@chakra-ui/react";
import fs from 'fs'
import Path from 'path'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Header from "../../components/header/Header";
import Head from "next/head";
import {BiArrowBack} from "react-icons/bi";
import Link from 'next/link'
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import Footer from "../../components/Footer";


export default function PostDetails({frontmatter,content}) {
    console.log(frontmatter)
    return (
        <Box mb={'4'}>
            <Head>
                <title>{frontmatter.title}</title>
            </Head>
            <Box paddingX={['6','10','50','160']} mt={['6','8','10','10']}>
                <Header />
            </Box>
            <Box paddingX={['6','10','50','160']} mt={['6','8','10','10']}>
            <Link href={'/blog'} passHref><Button _hover={{cursor : 'pointer'}} display={'flex'} variant={'link'} gap={['2','4','4','6']} alignItems={'center'} fontSize={['xl','2xl','2xl','2xl']} mb={'8'}> <BiArrowBack/>Go back</Button></Link>
                <Box px={''}>
                    <Heading>{frontmatter.title}</Heading>
                    <Text mt={'2'} fontSize={'lg'} _dark={{color : 'gray.400'}} color={'gray.600'}>{frontmatter.date}</Text>
                    <Image mt={'4'} src={frontmatter.cover_image} alt={'cover image'} />
                    <Text fontSize={'lg'} mt={'6'}>
                        <ReactMarkdown components={ChakraUIRenderer()}>{content}</ReactMarkdown>
                    </Text>
                </Box>
                <Footer/>
            </Box>
        </Box>
    )
}

export async function getStaticPaths(){
const files = fs.readdirSync(Path.join('posts'))
    const paths = files.map(fileName => ({
        params : {
            slug: fileName.replace('.md', '')
}}))
    return {
      paths,
      fallback: false,
    };

}
export async function getStaticProps({params : {slug}}){
    const markdownWithMeta = fs.readFileSync(Path.join('posts', slug + '.md'),'utf-8')
    const {data : frontmatter,content} = matter(markdownWithMeta)
    return {
        props : {
            frontmatter,
            content,
            slug
        }
    }
}