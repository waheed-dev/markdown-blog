import { Box, Text, Image, Button,Link} from "@chakra-ui/react";
import { motion,useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import {useEffect} from "react";
import {MotionBox} from "./helpers/helpers";
import {boxVariants} from "./helpers/helpers";

const MotionImage = motion(Image)
const imageVariants = {
  visible: { opacity: 1, rotate : 360, transition: { duration: 2 } },
  hidden: { opacity: 0, rotate: 0 }
};



const SelfInfo = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Box
      mt={"20"}
      mb={"14"}
      display={["block", "flex", "flex", "flex"]}
      justifyContent={"space-between"}
      flexDirection={"row-reverse"}
      alignContent={"center"}
    >
      <Box mb={["8", "0", "0", "0"]}>
        <Box
          border={"2px"}
          mt={"2"}
          boxSize={["250", "250", "320", "380"]}
          display={"flex"}
          mx={"auto"}
          backgroundColor={'gray.300'}
          justifyContent={"center"}
          alignContent={"center"}
          borderColor={"green.400"}
          borderRadius={"full"}
        >


          <MotionImage
              ref={ref}
              animate={controls}
              initial="hidden"
            mt={""}
            src="/sellff.png"
              objectFit={'cover'}
            alt="Picture of the author"
            boxSize={["200", "220", "250", "300"]}
          />


        </Box>
      </Box>
      <MotionBox
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={boxVariants}
        gap={4}
        fontSize={"3xl"}
        fontWeight={"extrabold"}
        width={["", "md", "lg", "lg"]}
      >
        <Text>
          Hi,i'm{" "}
          <Text as={"span"} color={"green.500"} _dark={{ color: "green.400" }}>
            Waheed
          </Text>
        </Text>
        <Text fontSize={["xl", "xl", "2xl", "2xl"]} color={"gray.500"}>
          Mern stack developer
        </Text>
        <Text fontSize={"xl"} fontWeight={"normal"}>
         i'm a Computer science Graduate having 16 years education and a Mern stack developer having a ton of experience in designing and developing production grade React and next.js web applications. <br/>
          I also have experience working with cms like Wordpress and also developing and designing shopify stores.
        </Text>
        <Box display={"flex"} gap={6} mt={10}>
          <Button
            bgColor={"green.500"}
            _hover={{ backgroundColor: "green.600" }}
            color={"white"}
            _dark={{ backgroundColor: "green.400" }}
          >
            <Link _hover={{textDecoration:'none'}} href={"#contact"} passHref>
              Contact
            </Link>
          </Button>
          <Button
              variant={'outline'}
              bgColor={"green.500"}
              _hover={{ backgroundColor: "green.600" }}
              color={"white"}
              _dark={{ backgroundColor: "green.400" }}
          >
            <Link _hover={{textDecoration:'none'}} href={'https://drive.google.com/u/0/uc?id=1QVVDmEWWlXtw4sQloLRCIHO1eL7by1Tc&export=download'} isExternal={true}>
Resume

            </Link>
          </Button>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default SelfInfo