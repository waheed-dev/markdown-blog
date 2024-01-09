import {Box, Image, Text, Heading, Button, Link as Hyper} from "@chakra-ui/react";
import Link from 'next/link'
import { AiFillGithub } from "react-icons/ai";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {boxVariants, imageVariants, MotionBox, MotionImage} from "../helpers/helpers";


const Quizz = () => {
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
      display={["block", "flex", "flex", "flex"]}
      justifyContent={"space-evenly"}
      gap={"4"}
      pb={"10"}
    >
      <MotionImage
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={imageVariants}
        src="/Quizz.svg"
        alt="Picture of the author"
        boxSize={["150", "240", "240", "240"]}
        mx={"auto"}
        mb={"2"}
      />
      <MotionBox
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={boxVariants} width={["", "md", "lg", "lg"]}>
        <Heading>Markdown Blog</Heading>
        <Text fontSize={["xl", "xl", "2xl", "2xl"]} fontWeight={"bold"} color={"gray.500"}>
         vite and Json-server
        </Text>
        <Text fontSize={"lg"} mt={"4"} mb={"10"}>

          A Quizz project that tracks users time, score, right and wrong answers and time taken by each questions
        </Text>
        <Box display={"flex"} gap={"12"}>
          <Button
            bgColor={"green.500"}
            _hover={{ backgroundColor: "green.600" }}
            color={"white"}
            _dark={{ backgroundColor: "green.400" }}
          >

              <Link href={'https://quizz-app-one.vercel.app/'}>
                  Live preview
              </Link>
          </Button>
          <Hyper href={'https://github.com/waheed-dev/quizz-app'} isExternal>
          <AiFillGithub size={"40"} />
          </Hyper>
        </Box>
      </MotionBox>
    </Box>
  );
};
export default Quizz