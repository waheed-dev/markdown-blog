import {Box, Image, Text, Heading, Button, Link,useColorModeValue as mode} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import {
  boxVariants,
  imageVariants,
  MotionBox,
  MotionImage,
  outerboxVariants,
  outerimageVariants
} from "../helpers/helpers";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const JobApp = () => {
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
      pb={"6"}
      display={["block", "flex", "flex", "flex"]}
      justifyContent={"space-evenly"}
      gap={"4"}
    >
      <MotionImage
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={imageVariants}
        src="/JobApp.svg"
        alt="Picture of the jobApp"
        boxSize={["150", "240", "240", "240"]}
        mx={"auto"}
        mb={"2"}
      />
      <MotionBox
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={boxVariants} width={["", "md", "lg", "lg"]}>
        <Heading>Job Tracker</Heading>
        <Text fontSize={["xl", "xl", "2xl", "2xl"]} fontWeight={"bold"} color={"gray.500"}>
          Mern Stack
        </Text>
        <Text fontSize={"lg"} mt={"4"} mb={"10"}>
          MERN stack job tracking app for efficient job application management.
        </Text>
        <Box display={"flex"} gap={"12"}>
          <Button
            bgColor={"green.500"}
            _hover={{ backgroundColor: "green.600" }}
            color={"white"}
            _dark={{ backgroundColor: "green.400" }}
          >
              <Link _hover={{textDecoration:'none'}} href={'https://mern-jobs-app.onrender.com/'} isExternal={true}>

                  Live preview
              </Link>
          </Button>
          <Link _hover={{textDecoration:'none'}} href={'https://github.com/waheed-dev/jobs-app-mern-stack'} isExternal={true}>
          <AiFillGithub size={"40"} />
          </Link>
        </Box>
      </MotionBox>
    </Box>
  );
};
export default JobApp