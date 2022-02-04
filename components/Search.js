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
    function useOuterClick(callback) {
        const innerRef = useRef();
        const callbackRef = useRef();

        // set current callback in ref, before second useEffect uses it
        useEffect(() => { // useEffect wrapper to be safe for concurrent mode
            callbackRef.current = callback;
        });

        useEffect(() => {
            document.addEventListener("click", handleClick);
            return () => document.removeEventListener("click", handleClick);

            // read most recent callback and innerRef dom node from refs
            function handleClick(e) {
                if (
                    innerRef.current &&
                    callbackRef.current &&
                    !innerRef.current.contains(e.target)
                ) {
                    callbackRef.current(e);
                }
            }
        }, []);

        return innerRef;
    }
    const innerRef = useOuterClick(e => {
       setSearchInput('')
    });
      return (
         <Box display={'flex'} justifyContent={'center'}>
             <form id="container" ref={innerRef}>
                 <FormLabel>Search</FormLabel>
                 <Input  id={'search'} value={searchInput} onChange={ (e) => {setSearchInput(e.target.value)}} width={['xxs','xs','md','lg']}  maxLength={255} />
             </form>
             <SearchResults results={searchResults}/>
         </Box>
      )
}

export default Search