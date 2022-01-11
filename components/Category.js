import { Box, Button, Text } from "@chakra-ui/react";

const Category = () => {
  return (
    <>
      <Box display={"flex"} flexDir={"column"}>
        <Text
          textAlign={"center"}
          fontSize={"20"}
          fontWeight={"medium"}
          mt={"6"}
        >
          Search by topic
        </Text>
        <Box
          display={"flex"}
          gap={"6"}
          mt={"4"}
          justifyContent={"center"}
          marginTop={"4"}
        >
          <Button
            color={"whiteAlpha.900"}
            _hover={{ bg: "red.300" }}
            bg={"red.500"}
          >
            JAVASCRIPT
          </Button>

          <Button
            color={"whiteAlpha.900"}
            _hover={{ bg: "green.300" }}
            bg={"green.500"}
          >
            REACT
          </Button>
          <Button
            color={"whiteAlpha.900"}
            _hover={{ bg: "cyan.300" }}
            bg={"cyan.500"}
          >
            NextJs
          </Button>
          <Button
            color={"whiteAlpha.900"}
            _hover={{ bg: "yellow.300" }}
            bg={"yellow.500"}
          >
            CSS
          </Button>
          <Button
            color={"whiteAlpha.900"}
            _hover={{ bg: "blue.300" }}
            bg={"blue.500"}
          >
            TypeScript
          </Button>
        </Box>
        <Box display={"flex"} gap={"6"} mt={"4"} justifyContent={" center"}>
          <Button
            color={"whiteAlpha.900"}
            _hover={{ bg: "purple.300" }}
            bg={"purple.500"}
          >
            Node
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Category;
