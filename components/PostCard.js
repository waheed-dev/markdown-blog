import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const PostCard = ({ title, author, date, coverImg, category, excerpt,slug}) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <Box
      _hover={{
        border: "1px",
        borderColor: "green.400",
        cursor : 'pointer'
      }}
      padding={"2"}
      borderRadius={"2xl"}
    >
      <Image
        objectFit={"cover"}
        borderRadius={"2xl"}
        boxSize={"400"}
        width={''}
        src={coverImg}
        alt="post-coverimg"
      />
      <Box display={"flex"} justifyContent={"space-between"} mb={"2"} mt={"2"}>
        <Text color={"gray.600"}>{date}</Text>
        <Text fontWeight={"medium"}>{author}</Text>
      </Box>
      <Text fontSize={"26"} fontWeight={"medium"} mb={"2"}>
        {title}
      </Text>
      <Text fontSize={"18"} color={"gray.600"}>
        {excerpt}
      </Text>
    </Box>
    </Link>
  );
};

export default PostCard;
