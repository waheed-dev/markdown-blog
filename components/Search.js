import {Box, FormControl, FormLabel, Input, Stack, StackDivider, Textarea, VStack} from "@chakra-ui/react";
import {FieldGroup} from "./contact-form/FieldGroup";
import {useEffect, useRef, useState} from "react";
import SearchResults from "./SearchResult";

const Search = () => {
    const [searchInput,setSearchInput] = useState('')
    const [searchResults,setSearchResults] = useState([])
    useEffect(() => {
        const getResults = async () => {
        if (searchInput === '') {
            setSearchResults([])
        } else {
            const res = await fetch(`/api/search?q=${searchInput}`)
            const {results} = await res.json()
            console.log(results)
            setSearchResults(results) } }
        getResults()
    }, [searchInput])

      return (
         <Box display={'flex'} justifyContent={'center'}>
             <form>
                 <FormLabel>Search</FormLabel>
                 <Input type="search" id={'search'} value={searchInput} onChange={ (e) => {setSearchInput(e.target.value)}} width={['xxs','xs','md','lg']}  maxLength={255} />
             </form>
             <SearchResults results={searchResults}/>
         </Box>
      )
}

export default Search