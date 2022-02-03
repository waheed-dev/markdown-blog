import {Box, FormControl, FormLabel, Input, Stack, StackDivider, Textarea, VStack} from "@chakra-ui/react";
import {FieldGroup} from "./contact-form/FieldGroup";
import {useState} from "react";

const Search = () => {
    const [search,setSearch] = useState('')
      return (
         <Box display={'flex'} justifyContent={'center'}>
             <form>
                 <FormLabel>Search</FormLabel>
                 <Input type="search" id={'search'} value={search} onChange={ (e) => {setSearch(e.target.value)}} width={['xxs','xs','md','lg']}  maxLength={255} />
             </form>
         </Box>
      )
}

export default Search