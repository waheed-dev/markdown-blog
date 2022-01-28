import {Box, Heading, Image, Text} from "@chakra-ui/react";
import Link from 'next/link'
import {AiOutlineArrowRight} from "react-icons/ai";
const PortBlogCard = ({coverImg,title,excerpt,date,slug}) => {
    return (
      <Link href={`/blog/${slug}`} passHref>
          <Box>

        <Box
          _dark={{ backgroundColor: "whiteAlpha.200" }}
          bg={"blackAlpha.200"}
          alignItems={"center"}
          mt={"12"}
          p={["3","5","6","10"]}
          gap={["1","5","8","10"]}
          display={"flex"}
          height={"sm"}
          borderRadius={"2xl"}
          width={['md/2','xl','2xl','4xl']}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Box alignSelf={"center"}>
            <Text
              display={"flex"}
              alignItems={"center"}
              gap={"6"}
              fontSize={['md','lg','2xl','3xl']}
              mb={"8"}
            >
              Featured Article{" "}
              <Box mt={"1"}>
                <AiOutlineArrowRight size={"20"} />
              </Box>
            </Text>
            <Heading fontSize={['xl','2xl','3xl','4xl']}>{title}</Heading>
            <Text fontSize={["xs","sm","lg","lg"]} my={["3","3","4","6"]}>
              {date}
            </Text>
            <Text fontSize={["xs","lg","xl","2xl"]} mt={'4'}>{excerpt}</Text>
          </Box>
          <Box w={""}>
            <Image
              objectFit={"cover"}
              borderRadius={['xl','xl','2xl','2xl']}
              boxSize={["280","330","350","360"]}
              src={coverImg}
              alt="post-coverimg"
            />
          </Box>
        </Box>
          </Box>
      </Link>
    );
}

export default PortBlogCard