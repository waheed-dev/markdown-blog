import {Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import {
    SiAuth0, SiC,
    SiChakraui,
    SiCss3, SiDocker, SiExpress,
    SiFigma, SiFramer, SiGithub, SiGraphql,
    SiHtml5,
    SiJavascript, SiKubernetes, SiLess, SiNestjs,
    SiNextdotjs, SiNodedotjs, SiNpm, SiPostgresql, SiPostman, SiPug,
    SiReact, SiStrapi,
    SiTailwindcss, SiTypescript,SiMaterialdesign, SiWebstorm, SiWordpress
} from "react-icons/si";
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
                   variants={boxVariants} mt={['14', '18', '20', '20']} mb={'10'}>
            <Heading>Skills</Heading>
            <Box mt={['10', '16', '18', '20']}>
                <Box ml={['6', '10', '10', '10']}>

                                <Box display={'flex'} mt={'4'} justifyContent={'space-evenly'} alignContent={'center'}
                                     gap={'6'}>
                                    <MotionBox ref={ref}
                                               animate={controls}
                                               initial="hidden"
                                               variants={boxVariants}>
                                        <Text fontSize={'lg'} display={'flex'} gap={['2', '6', '10', '14']}
                                              my={'10'}><SiJavascript size={'25'}/> Javascript</Text>

                                        <Text fontSize={'lg'} display={'flex'} gap={['2', '6', '10', '14']}
                                              my={'10'}><SiNextdotjs size={'25'}/> NextJS</Text>
                                        <Text fontSize={'lg'} display={'flex'} gap={['2', '6', '10', '14']}
                                              my={'10'}><SiNodedotjs size={'25'}/> NodeJs</Text>

                                    </MotionBox>
                                    <MotionBox ref={ref}
                                               animate={controls}
                                               initial="hidden"
                                               variants={outerboxVariants}>
                                        <Text fontSize={'lg'} display={'flex'} gap={['2', '6', '10', '14']}
                                              my={'10'}><SiTailwindcss size={'25'}/> TailwindCss</Text>
                                        <Text fontSize={'lg'} display={'flex'} gap={['2', '6', '10', '14']}
                                              my={'10'}><SiReact size={'25'}/> React</Text>
                                        <Text fontSize={'lg'} display={'flex'} gap={['2', '6', '10', '14']}
                                              my={'10'}><SiTypescript size={'25'}/> Typescript</Text>

                                    </MotionBox>
                                </Box>
                        <Text color={'gray.500'} fontSize={'2xl'} fontWeight={'bold'}>Always Learning</Text>

                </Box>
            </Box>
        </MotionBox>
    )
}
export default Skills