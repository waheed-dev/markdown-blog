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

const AirBnbClone = () => {
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

      flexDirection={"row-reverse"}
      gap={"4"}
    >
      <MotionImage
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={imageVariants}
        src="/AirBnb.svg"
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
        <Heading>AirBnb Clone</Heading>
        <Text fontSize={["xl", "xl", "2xl", "2xl"]} fontWeight={"bold"} color={"gray.500"}>
          NextJs,Tailwind,Prisma
        </Text>
        <Text fontSize={"lg"} mt={"4"} mb={"10"}>
          an Airbnb clone using Next.js 13, Prisma, and Tailwind for a modern, responsive, and dynamic web experience.
        </Text>
        <Box display={"flex"} gap={"12"}>
          <Button
            bgColor={"green.500"}
            _hover={{ backgroundColor: "green.600" }}
            color={"white"}
            _dark={{ backgroundColor: "green.400" }}
          >
            <Link _hover={{textDecoration:'none'}} href={'https://airbnb-clone-next13-pi.vercel.app/'} isExternal={true}>

              Live preview
            </Link>
          </Button>

              <Link _hover={{textDecoration:'none'}} href={'https://github.com/waheed-dev/Airbnb-clone-next13'} isExternal={true}>
          <AiFillGithub size={"40"} />
              </Link>
        </Box>
      </MotionBox>
    </Box>
  );
};
export default AirBnbClone