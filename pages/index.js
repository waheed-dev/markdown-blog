import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Text,Box} from "@chakra-ui/react";
import Header from "../components/header/Header";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WebMentor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Box>
            <Header/>
            <Search/>
            <Box paddingX={'12'} mt={'6'}>
            <Text fontSize={'24'}>hahahha</Text>

            </Box>
        </Box>
    </div>
  )
}
