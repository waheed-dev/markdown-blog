import { Box, Image, Text, Heading, Button,Link} from "@chakra-ui/react";
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

const Budget = () => {
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
      pb={"6"}
      borderBottom={["1px", "0px", "0px", "0px"]}
      borderColor={"green.600"}
      flexDirection={"row-reverse"}
      gap={"4"}
    >
      <MotionImage
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={imageVariants}
        src="/Budget.svg"
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
        <Heading>Budget Application</Heading>
        <Text fontSize={["xl", "xl", "2xl", "2xl"]} fontWeight={"bold"} color={"gray.500"}>
          React,React-bootstrap
        </Text>
        <Text fontSize={"lg"} mt={"4"} mb={"10"}>
          This simple React app has it all from custom hooks to custom context and prop drilling and more <br/>
          We can stuff like adding expenses,removing expenses and creating budget
        </Text>
        <Box display={"flex"} gap={"12"}>
          <Button
            bgColor={"green.500"}
            _hover={{ backgroundColor: "green.600" }}
            color={"white"}
            _dark={{ backgroundColor: "green.400" }}
          >
              <Link _hover={{textDecoration:'none'}} href={'https://react-budget-app-vert.vercel.app/'} isExternal={true}>

            Live preview
              </Link>
          </Button>
          <AiFillGithub color={"#2f855a"} size={"40"} />
        </Box>
      </MotionBox>
    </Box>
  );
};
export default Budget