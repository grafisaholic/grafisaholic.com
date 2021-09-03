import {
  Box, 
  Heading,
  useColorModeValue,
  Link,
  Text
} from "@chakra-ui/react"
import NextLink from "next/link"

const ProjectItem = () => {
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
        Kawal COVID-19
      </Heading>

      <Text fontSize="sm" color={'gray.500'}>
      Payuni software is a cloud-based PPOB credit and payment server application to make it easier for merchants to monitor transactions, deposits, made using microservices infrastructure.
      </Text>

      <Box pt={0} px="lg" pb="lg" mt={2}>
        <NextLink href="/" passHref>
          <Text 
            fontSize="md" 
            as={Link} 
            fontWeight={600}
            color="blue.500"
          >
            Go to project &rarr;
          </Text>
        </NextLink>
      </Box>
    </Box>
  )
}

export default ProjectItem;