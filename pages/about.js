import {
  useColorMode,
  Stack,
  Flex,
  Heading,
  Text
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
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 0 auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          px={4}
          minH="100vh"
        >
          <Heading letterSpacing="tight" as="h1" size="xl" mb={2}>
            About
          </Heading>

          <Text mb={5} color={colorSecondary[colorMode]}>A list of my favorite tools and technologies that I use on a regular basis.</Text>
        </Flex>
      </Stack>
    </Container>
  )
}