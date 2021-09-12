import {
  Box, 
  Heading,
  useColorModeValue,
  Link,
  Text
} from "@chakra-ui/react"
import NextLink from "next/link"

const ProjectItem = ({ title, desc, link, dependencies}) => {
  return (
    <Box
      w={'100%'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'lg'}
      _hover={{ shadow: "2xl" }}
      rounded={'md'}
      mt={3}
      borderWidth="1px"
      p={8}
    >
      <Heading
        color={useColorModeValue('gray.700', 'white')}
        fontSize={'2xl'}
        mb={2}
      >
       {title}
      </Heading>

      <Text fontSize="sm" color={'gray.500'}>
        {desc}
      </Text>

      <Box pt={0} px="lg" pb="lg" mt={3}>
        <NextLink href={`${link}`} passHref>
          <Link isExternal>
            <Text 
              fontSize="md" 
              fontWeight={600}
              color="blue.500"
            >
              Go to project &rarr;
            </Text>
          </Link>
        </NextLink>
      </Box>
    </Box>
  )
}

export default ProjectItem;