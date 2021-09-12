import {
  useColorMode,
  Stack,
  Flex,
  Heading,
  Text,
  Divider,
  VStack,
  HStack,
  Box
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function About() {
  const {colorMode} = useColorMode();
  const colorSecondary = {
    light: 'gray:700',
    dark: 'gray:400'
  }

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        alignItems="flex-start"
        m="0 auto 0 auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" as="h1" size="2xl" mb={3} fontFamily='body'>
            About
          </Heading>
          <Text 
            color={colorSecondary[colorMode]} 
            fontWeight="600" 
            px={2}
            fontSize="1xl"
            fontFamily={'body'}
          >
            Hey, I'am Khabibur Rokhman.
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          px={2}
        >
          <Text mb={3} fontSize="md" color={colorSecondary[colorMode]}>
            I am a self-taught web developer based in Rembang, Indonesia. currently working as a software engineer at PT. Fintek Digital Nusantara.I started my career from a high school graduate in 2017 to become a factory worker and finally anchored to become a programmer.
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          px={2}
        >
          <Text mb={3} fontSize="md" color={colorSecondary[colorMode]}>
            I build web using various JavaScript frameworks, Like Reactjs, Express, Next, etc.
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          px={2}
        >
          <Text mb={3} fontSize="md" color={colorSecondary[colorMode]}>
            Outside of my job as an employee, sometimes I often do street photography, write blogs, read novels, and badminton.
          </Text>
        <Divider orientation="horizontal" mb={4} />
        </Flex>
      </Stack>
      <Stack
        as="main"
        mt={4}
        alignItems="flex-start"
        m="0 auto 0 auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" as="h1" size="xl" mb={3} fontFamily='body'>
            Skillset
          </Heading>

          <Box px={3}>
            <Flex flexDirection="column" mb={4}>
              <Heading size="md" fontFamily="body">
                HTML & CSS
              </Heading>
              <Text color={colorSecondary[colorMode]} fontSize="sm" px={2}>- Bootstrap (3+), Cakra-ui</Text>
            </Flex>

            <Flex flexDirection="column" mb={4}>
              <Heading size="md" fontFamily="body">
                Javascript 
              </Heading>
              <Text color={colorSecondary[colorMode]} fontSize="sm" px={2}>- Node js, JavaScript (ES2015+)</Text>
            </Flex>

            <Flex flexDirection="column" mb={4}>
              <Heading size="md" fontFamily="body">
                Javascript Framework
              </Heading>
              <Text color={colorSecondary[colorMode]} fontSize="sm" px={2}>- jQuery, Reactjs</Text>
            </Flex>

            <Flex flexDirection="column" mb={4}>
              <Heading size="md" fontFamily="body">
                Database 
              </Heading>
              <Text color={colorSecondary[colorMode]} fontSize="sm" px={2}>- Mysql, MONGODB, Redis</Text>
            </Flex>

            <Flex flexDirection="column" mb={4}>
              <Heading size="md" fontFamily="body" >
                Others
              </Heading>
              <Text color={colorSecondary[colorMode]} fontSize="sm" px={2}>- Git, Linux (basic command-line operations)</Text>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}