import {Box, Input, Textarea} from "@chakra-ui/react";

const Search = () => {
      return (
          <Box display={'flex'} justifyContent={'center'} mt={'6'} >

          <Input width={'30%'}  placeholder='search post' size='md' />
          </Box>
      )
}

export default Search