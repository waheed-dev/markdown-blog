import {Box, Image, Text, Heading, Button} from "@chakra-ui/react";
import Link from 'next/link'
import { AiFillGithub } from "react-icons/ai";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {boxVariants, imageVariants, MotionBox, MotionImage} from "../helpers/helpers";


const Blog = () => {
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
        src="/Blog.svg"
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
        <Text fontSize={"2xl"} fontWeight={"bold"} color={"gray.500"}>
          Next js,Material ui,openMapWeatherApi
        </Text>
        <Text fontSize={"lg"} mt={"4"} mb={"10"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          dolores eaque esse quibusdam quod soluta. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Corporis eius iusto minima pariatur
          perspiciatis rem.
        </Text>
        <Box display={"flex"} gap={"12"}>
          <Button
            bgColor={"green.500"}
            _hover={{ backgroundColor: "green.600" }}
            color={"white"}
            _dark={{ backgroundColor: "green.400" }}
          >
              <Link href={'/blog'}>
                  Live preview
              </Link>
          </Button>
          <AiFillGithub color={"#2f855a"} size={"40"} />
        </Box>
      </MotionBox>
    </Box>
  );
};
export default Blog