import NextLink from 'next/link';
import {
  Heading,
  useColorMode,
  VStack,
  HStack,
  Link,
  Text,
  Tooltip
} from '@chakra-ui/react';

const PostListItem = () => {
  const {colorMode} = useColorMode();
  const descColor = {
    light: 'gray.600',
    dark: 'gray.400'
  }

  const bgColor = {
    light: "white",
    dark: "gray.800"
  }

  return (
    <VStack
      spacing={1}
      p={4}
      _hover={{ shadow: "md", textDecoration: "none" }}
      borderWidth="1px"
      position="relative"
      rounded="md"
      mt={3}
      bg={bgColor[colorMode]}
      align="left"
    >
      <HStack spacing={2} isInline>
        <Tooltip hasArrow label="Published" placement="top">
          <Text fontSize="xs" fontWeight="500" color={descColor[colorMode]}>
            3 April 2021 / ARTICLE
          </Text>
        </Tooltip>
      </HStack>

      <HStack spacing={1} alignItems="center" d={["none", "none", "flex"]}>
        <Heading fontSize="1xl" align="left" mt={0}>
          <NextLink href={`/blog`} passHref>
            <Text as={Link}>Hello World</Text>
          </NextLink>
        </Heading>
      </HStack>

      <Text align="left" fontSize="sm" color={descColor[colorMode]}>
        Payuni software is a cloud-based PPOB credit and payment server application to make it easier for merchants to monitor transactions, deposits, made using microservices infrastructure.
      </Text>
    </VStack>
  )
}

export default PostListItem;