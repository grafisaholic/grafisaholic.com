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

const PostListItem = ({ post }) => {
  const { title, desc, published_at, slug, category } = post;

  
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
      width="700px"
    >
      <HStack spacing={2} isInline>
        <Tooltip hasArrow label="Published" placement="top">
          <Text fontSize="xs" fontWeight="500" color={descColor[colorMode]}>
            {published_at} / {category.toUpperCase()}
          </Text>
        </Tooltip>
      </HStack>

      <HStack spacing={1} alignItems="center" d={["none", "none", "flex"]}>
        <Heading fontSize="1xl" align="left" mt={0}>
          <NextLink href={`/blogs/${slug}`} passHref>
            <Text as={Link}>{title}</Text>
          </NextLink>
        </Heading>
      </HStack>

      <Text align="left" fontSize="xs" color={descColor[colorMode]}>
        {desc}
      </Text>
    </VStack>
  )
}

export default PostListItem;