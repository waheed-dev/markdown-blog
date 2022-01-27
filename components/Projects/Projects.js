import {Box,Heading} from "@chakra-ui/react";
import Weather from "./Weather";
import Budget from "./Budget";
import Blog from "./Blog";

const Projects = () => {
  return (
      <Box>
        <Heading>Projects</Heading>
          <Weather/>
          <Budget/>
          <Blog/>
      </Box>
  )
}

export default Projects