import {Box,Heading} from "@chakra-ui/react";
import JobApp from "./JobApp";
import AirBnbClone from "./AirBnbClone";
import Quizz from "./Quizz";

const Projects = () => {
  return (
      <Box>
        <Heading>Projects</Heading>
          <Quizz/>
          <AirBnbClone/>
          <JobApp/>
      </Box>
  )
}

export default Projects