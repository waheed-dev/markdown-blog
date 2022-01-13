import {Box, Button} from "@chakra-ui/react";
import {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from "react-icons/hi";
import Link from 'next/link'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

const Pagination = ({numPages,currentPage}) => {
    const isFirst =currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = `/blog/page/${currentPage - 1}`
    const NextPage = `/blog/page/${currentPage + 1}`
    if (numPages === 1) return <></>
  return (
    <Box display={"flex"} justifyContent={"center"} marginTop={6} gap={"3"}>
      {!isFirst && (
        <Link href={prevPage}>
          <Button
            variant={"outline"}
            display={"flex"}
            gap={2}
            alignItems={"center"}
          >
            <Box mt={"1"}>
              <MdKeyboardArrowLeft />
            </Box>
            Previous Page
          </Button>
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <Link href={`/blog/page/${i + 1}`}>
          <Button
            variant={"outline"}
            display={"flex"}
            gap={2}
            alignItems={"center"}
          >
            {i + 1}
          </Button>
        </Link>
      ))}
      {!isLast && (
        <Link href={NextPage}>
          <Button
            variant={"outline"}
            display={"flex"}
            gap={2}
            alignItems={"center"}
          >
            Next Page
            <Box mt={"1"}>
              <MdKeyboardArrowRight />
            </Box>
          </Button>
        </Link>
      )}
    </Box>
  );
}

export default Pagination