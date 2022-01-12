import {Box, Heading, Text,Image} from "@chakra-ui/react";
import fs from 'fs'
import Path from 'path'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import {marked} from "marked";
import Header from "../../components/header/Header";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import {BiArrowBack} from "react-icons/bi";
import Link from 'next/link'
import ChakraUIRenderer from "chakra-ui-markdown-renderer";


export default function PostDetails({frontmatter,content,slug}) {
    console.log(frontmatter)
    return (
        <div className={styles.container}>
            <Head>
                <title>{frontmatter.title}</title>
            </Head>
            <Header />
            <Box mt={'16'} px={'44'}>
            <Link href={'/'}><Box _hover={{cursor : 'pointer'}} display={'flex'} gap={'6'} alignItems={'center'} fontSize={'2xl'} mb={'12'}> <BiArrowBack/>Go Back</Box></Link>
                <Box px={''}>
                    <Heading>{frontmatter.title}</Heading>
                    <Text mt={'2'} fontSize={'lg'} _dark={{color : 'gray.400'}} color={'gray.600'}>{frontmatter.date}</Text>
                    <Image mt={'4'} src={frontmatter.cover_image}/>
                    <Text fontSize={'lg'} mt={'6'}>
                        <ReactMarkdown components={ChakraUIRenderer()} children={content}/>
                    </Text>
                </Box>
            </Box>
        </div>
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