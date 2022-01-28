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
      <Box mt={'20'}  mb={'10'}>

      <Heading>Skills</Heading>
          <Box mt={'20'}>
              <Box ml={'10'}>
                  <Tabs colorScheme={'green'} variant={'solid-rounded'} size={'md'}>
                      <TabList display={'flex'} justifyContent={'space-evenly'}>
                          <Tab>Frontend</Tab>
                          <Tab>Backend</Tab>
                          <Tab>Familiar with</Tab>
                      </TabList>
                      <TabPanels>
                          <TabPanel mt={'4'}>
                              <Box display={'flex'} fontWeight={'bold'} justifyContent={'center'} fontSize={'lg'}>
                                  <Box mt={'1'}>
                                      <FcGoogle/>
                                  </Box>
                                  oogle</Box>
                              <Box  display={'flex'} mt={'4'} justifyContent={'space-evenly'} alignContent={'center'} gap={'6'}>

                              <Box >
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiJavascript size={'25'} color={'green'}/> Javascript</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiReact size={'25'} color={'green'}/> React</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiTypescript size={'25'} color={'green'}/> Typescript</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiNextdotjs size={'25'} color={'green'}/> NextJS</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiHtml5 size={'25'}  color={'green'}/> HTML5</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiCss3 size={'25'}  color={'green'}/> CSS3</Text>
                              </Box>
                              <Box>
                                  <Text fontSize={'lg'} display={'flex'} gap={['2','6','10','14']} my={'10'}><SiFigma size={'25'}  color={'green'}/> Figma</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiTailwindcss size={'25'}  color={'green'}/> TailwindCss</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiChakraui size={'25'}  color={'green'}/> ChakraUi</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiMaterialui size={'25'}  color={'green'}/> MaterialUI</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiFramer size={'25'}  color={'green'}/>Framer motion</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiLess size={'25'}  color={'green'}/>Scss</Text>
                              </Box>
                              </Box>

                          </TabPanel>
                          <TabPanel mt={'4'}>
                              <Box display={'flex'} fontWeight={'bold'} justifyContent={'center'} fontSize={'lg'} >
                                  <Box mt={'1'}>
                                      <FcGoogle/>
                                  </Box>
                                  oogle</Box>
                              <Box  mt={'4'} display={'flex'} justifyContent={'space-evenly'} alignContent={'center'} gap={'6'}>

                              <Box>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiNodedotjs size={'25'} color={'green'}/> Node</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiExpress size={'25'} color={'green'}/> Express</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiNestjs size={'25'} color={'green'}/> NestJS</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiGraphql size={'25'}  color={'green'}/> GraphQl</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><DiMongodb size={'25'}  color={'green'}/> MongoDB</Text>
                              </Box>
                              <Box>
                                  <Text fontSize={'lg'} display={'flex'}   gap={['2','6','10','14']} my={'10'}><SiPug size={'25'}  color={'green'}/>Pug</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiPostgresql size={'25'}  color={'green'}/>Postgress</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiPostman size={'25'}  color={'green'}/> Postman</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiAuth0 size={'25'}  color={'green'}/>JWT</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiNpm size={'25'}  color={'green'}/>NPM</Text>
                              </Box>
                              </Box>

                          </TabPanel>
                          <TabPanel>
                              <Box  mt={'4'} display={'flex'} justifyContent={'space-evenly'} gap={'6'} alignContent={'center'}>
                                  <Box>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiGithub size={'25'} color={'green'}/>Git & Github</Text>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><VscCode size={'25'} color={'green'}/>Vscode</Text>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiStrapi size={'25'} color={'green'}/>Strapi</Text>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiDocker size={'25'} color={'green'}/>Docker</Text>
                                  </Box>
                                  <Box>
                                      <Text fontSize={'lg'} display={'flex'}  gap={['2','6','10','14']} my={'10'}><SiC size={'25'}  color={'green'}/>C</Text>
                                      <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiWebstorm size={'25'}  color={'green'}/>Webstorm</Text>
                                      <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiWordpress size={'25'}  color={'green'}/>Wordpress</Text>
                                      <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiKubernetes size={'25'}  color={'green'}/>Kubernetes</Text>
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