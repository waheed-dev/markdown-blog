import {motion} from "framer-motion";
import {Box, Image} from "@chakra-ui/react";

export const imageVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, x: 40 }
};
export const opacityVariants = {
    visible: { opacity: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0,  }
};
export const outerimageVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, x: -40 }
};
export const outerboxVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, x: 40 }
};
export const boxVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, x: -40 }
};
export const MotionImage = motion(Image)
export const MotionBox = motion(Box)
