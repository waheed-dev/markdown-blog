import Link from "next/link";
import { Box } from "@chakra-ui/react";
export default function CategoryLabel({ children }) {
  const categoryKey = {
    JavaScript: "red",
    PHP: "blue",
    Python: "yellow",
    TYPESCRIPT: "cyan",
    CSS: "purple",
  };

  return (
    <Box bg={`${categoryKey[children]}.600`} p={'1'} borderRadius={'xl'} px={'4'}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>
      {children}
      </Link>
    </Box>
  );
}
