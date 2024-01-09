
import Head from "next/head";
import {Box, Divider} from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import PortCta from "../components/PortCta";
import SelfInfo from "../components/SelfInfo";
import Projects from "../components/Projects/Projects";
import Skills from "../components/skills/Skills";
import Testimonials from "../components/testemonials/Testimonials";
import {ContactForm} from "../components/contact-form/ContactForm";

export default function Home({posts}) {
  return (
    <div>
          <html style={{scrollBehavior : 'smooth'}}>
          <Head>
        <title>Waheed-portfolio</title>
              <link rel="shortcut icon" href="favicon.jpg" />
      </Head>
          </html>
      <Box>
          <Box paddingX={['6','10','50','160']} mt={['6','8','10','10']}>
        <Header />

          <PortCta/>

            <SelfInfo/>
            <Projects/>
            <Skills/>
              <Testimonials/>
              <ContactForm/>
              <Divider mb={['10','10','18','20']}/>
          <Footer/>
        </Box>


        </Box>
    </div>
  );
}

