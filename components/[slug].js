import {Box} from "@chakra-ui/react";
import fs from 'fs'
import path from 'path'


export default function PostDetails() {
    return (
        <Box>

        </Box>
    )
}

export async function getStaticPaths(){
const files = fs.readdirSync(path.join('posts'))
}