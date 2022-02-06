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
import {boxVariants, MotionBox, outerboxVariants} from "../helpers/helpers";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const Skills = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
  return (
      <MotionBox ref={ref}
                 animate={controls}
                 initial="hidden"
                 variants={boxVariants} mt={['14','18','20','20']}  mb={'10'}>

      <Heading>Skills</Heading>
          <Box mt={['10','16','18','20']}>
              <Box ml={['6','10','10','10']}>
                  <Tabs colorScheme={'green'} variant={'enclosed'} size={'md'}>
                      <TabList display={'flex'} justifyContent={'space-evenly'}>
                          <Tab>
                              <Text fontWeight={'semibold'}>
                              Frontend
                              </Text>
                          </Tab>
                          <Tab >
                          <Text fontWeight={'semibold'}>
                              Backend
                          </Text>

                          </Tab>
                          <Tab>

                          <Text fontWeight={'semibold'}>
                              Familiar with
                          </Text>
                          </Tab>
                      </TabList>
                      <TabPanels>
                          <TabPanel mt={'4'}>
                              <Box display={'flex'} mt={'4'} justifyContent={'space-evenly'} alignContent={'center'} gap={'6'}>
                              <MotionBox  ref={ref}
                                          animate={controls}
                                          initial="hidden"
                                          variants={boxVariants}>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiJavascript size={'25'} /> Javascript</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiReact size={'25'}/> React</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiTypescript size={'25'} /> Typescript</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={'10'}><SiNextdotjs size={'25'}/> NextJS</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiHtml5 size={'25'}/> HTML5</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']}  my={['16','10','10','10']}><SiCss3 size={'25'}/> CSS3</Text>
                              </MotionBox>
                              <MotionBox ref={ref}
                                         animate={controls}
                                         initial="hidden"
                                         variants={outerboxVariants}>
                                  <Text fontSize={'lg'} display={'flex'} gap={['2','6','10','14']} my={'10'}><SiFigma size={'25'} /> Figma</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiTailwindcss size={'25'} /> TailwindCss</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiChakraui size={'25'} /> ChakraUi</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiMaterialui size={'25'} /> MaterialUI</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiFramer size={'25'} />Framer motion</Text>
                                  <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={'10'}><SiLess size={'25'}/>Scss</Text>
                              </MotionBox>
                              </Box>

                          </TabPanel>
                          <TabPanel mt={'4'}>
                              <Box  mt={'4'} display={'flex'} justifyContent={'space-evenly'} alignContent={'center'} gap={'6'}>

                              <MotionBox ref={ref}
                                         animate={controls}
                                         initial="hidden"
                                         variants={boxVariants}>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiNodedotjs size={'25'} /> Node</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiExpress size={'25'} /> Express</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiNestjs size={'25'} /> Nest.jS</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiGraphql size={'25'}/> GraphQl</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><DiMongodb size={'25'}/> MongoDB</Text>
                              </MotionBox>
                              <MotionBox ref={ref}
                                         animate={controls}
                                         initial="hidden"
                                         variants={outerboxVariants}>
                                  <Text fontSize={'lg'} display={'flex'}   gap={['2','6','10','14']} my={'10'}><SiPug />Pug</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiPostgresql />Postgres</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiPostman /> Postman</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiAuth0 />JWT</Text>
                                  <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiNpm  />NPM</Text>
                              </MotionBox>
                              </Box>

                          </TabPanel>
                          <TabPanel mt={'4'}>
                              <Box  mt={'4'} display={'flex'} justifyContent={'space-evenly'} gap={''} alignContent={'center'}>
                                  <MotionBox ref={ref}
                                             animate={controls}
                                             initial="hidden"
                                             variants={boxVariants}>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiGithub size={'25'} />Git & Github</Text>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><VscCode size={'25'} />Vscode</Text>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiStrapi size={'25'}/>Strapi</Text>
                                      <Text fontSize={'lg'}  display={'flex'}  gap={['2','6','10','14']}  my={'10'}><SiDocker size={'25'} />Docker</Text>
                                  </MotionBox>
                                  <MotionBox ref={ref}
                                             animate={controls}
                                             initial="hidden"
                                             variants={outerboxVariants}>
                                      <Text fontSize={'lg'} display={'flex'}  gap={['2','6','10','14']} my={'10'}><SiC size={'25'}  />C</Text>
                                      <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={['10','10','10','10']}><SiWebstorm size={'25'}  />Webstorm</Text>
                                      <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={['10','10','10','10']}><SiWordpress size={'25'}  />Wordpress</Text>
                                      <Text fontSize={'lg'}  display={'flex'} gap={['2','6','10','14']} my={['10','10','10','10']}><SiKubernetes size={'25'}  />Kubernetes</Text>
                                  </MotionBox>
                              </Box>
                          </TabPanel>
                      </TabPanels>
                  <Text color={'gray.500'} fontSize={'2xl'} fontWeight={'bold'}>Always Learning</Text>
                  </Tabs>
              </Box>

      </Box>
      </MotionBox>
  )
}
export default Skills