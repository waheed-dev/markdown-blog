import {Box, Heading, List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import {
    SiAuth0, SiC,
    SiChakraui,
    SiCss3, SiDocker, SiExpress,
    SiFigma, SiFramer, SiGithub, SiGraphql,
    SiHtml5,
    SiJavascript, SiKubernetes, SiLess,
    SiMaterialui, SiNestjs,
    SiNextdotjs, SiNodedotjs, SiNpm, SiPostgresql, SiPostman, SiPug,
    SiReact, SiStrapi,
    SiTailwindcss, SiTypescript, SiVsco, SiWebstorm, SiWordpress
} from "react-icons/si";
import {FcGoogle} from "react-icons/fc";
import {DiMongodb} from "react-icons/di";
import {VscCode} from "react-icons/vsc";

const Skills = () => {
  return (
      <Box mt={['14','18','20','20']}  mb={'10'}>

      <Heading>Skills</Heading>
          <Box mt={'20'}>
              <Box ml={'10'}>
                  <Tabs colorScheme={'green'} variant={'line'} size={'md'}>
                      <TabList display={'flex'} justifyContent={'space-evenly'}>
                          <Tab>Frontend</Tab>
                          <Tab>Backend</Tab>
                          <Tab>Familiar with</Tab>
                      </TabList>
                      <TabPanels>
                          <TabPanel mt={'4'}>
                              <Box  display={'flex'} mt={'4'} justifyContent={'space-evenly'} alignContent={'center'} gap={'6'}>

                              <Box >
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiJavascript size={'25'} color={'#2f855a'}/> Javascript</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiReact size={'25'} color={'#2f855a'}/> React</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiTypescript size={'25'} color={'#2f855a'}/> Typescript</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiNextdotjs size={'25'} color={'#2f855a'}/> NextJS</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiHtml5 size={'25'}  color={'#2f855a'}/> HTML5</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={['16','10','10','10']}><SiCss3 size={'25'}  color={'#2f855a'}/> CSS3</Text>
                              </Box>
                              <Box>
                                  <Text fontSize={'lg'} display={'flex'} gap={['2','6','10','14']} my={'10'}><SiFigma size={'25'}  color={'#2f855a'}/> Figma</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiTailwindcss size={'25'}  color={'#2f855a'}/> TailwindCss</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiChakraui size={'25'}  color={'#2f855a'}/> ChakraUi</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiMaterialui size={'25'}  color={'#2f855a'}/> MaterialUI</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiFramer size={'25'}  color={'#2f855a'}/>Framer motion</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiLess size={'25'}  color={'#2f855a'}/>Scss</Text>
                              </Box>
                              </Box>

                          </TabPanel>
                          <TabPanel mt={'4'}>
                              <Box  mt={'4'} display={'flex'} justifyContent={'space-evenly'} alignContent={'center'} gap={'6'}>

                              <Box>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiNodedotjs size={'25'} color={'#2f855a'}/> Node</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiExpress size={'25'} color={'#2f855a'}/> Express</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiNestjs size={'25'} color={'#2f855a'}/> NestJS</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiGraphql size={'25'}  color={'#2f855a'}/> GraphQl</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><DiMongodb size={'25'}  color={'#2f855a'}/> MongoDB</Text>
                              </Box>
                              <Box>
                                  <Text fontSize={'lg'} display={'flex'}   gap={['2','6','10','14']} my={'10'}><SiPug size={'25'}  color={'#2f855a'}/>Pug</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiPostgresql size={'25'}  color={'#2f855a'}/>Postgres</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiPostman size={'25'}  color={'#2f855a'}/> Postman</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiAuth0 size={'25'}  color={'#2f855a'}/>JWT</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiNpm size={'25'}  color={'#2f855a'}/>NPM</Text>
                              </Box>
                              </Box>

                          </TabPanel>
                          <TabPanel>
                              <Box  mt={'4'} display={'flex'} justifyContent={'space-evenly'} gap={''} alignContent={'center'}>
                                  <Box>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiGithub size={'25'} color={'#2f855a'}/>Git & Github</Text>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><VscCode size={'25'} color={'#2f855a'}/>Vscode</Text>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiStrapi size={'25'} color={'#2f855a'}/>Strapi</Text>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiDocker size={'25'} color={'#2f855a'}/>Docker</Text>
                                  </Box>
                                  <Box>
                                      <Text fontSize={'lg'} display={'flex'}  gap={['2','6','10','14']} my={'10'}><SiC size={'25'}  color={'#2f855a'}/>C</Text>
                                      <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={['10','10','10','10']}><SiWebstorm size={'25'}  color={'#2f855a'}/>Webstorm</Text>
                                      <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={['10','10','10','10']}><SiWordpress size={'25'}  color={'#2f855a'}/>Wordpress</Text>
                                      <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={['10','10','10','10']}><SiKubernetes size={'25'}  color={'#2f855a'}/>Kubernetes</Text>
                                  </Box>
                              </Box>
                          </TabPanel>
                      </TabPanels>
                  <Text color={'gray.500'} fontSize={'2xl'} fontWeight={'bold'}>Always Learning</Text>
                  </Tabs>
              </Box>

      </Box>
      </Box>
  )
}
export default Skills