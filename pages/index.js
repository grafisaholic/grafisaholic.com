import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Index() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray:700',
    dark: 'gray:400'
  }
  
  return (
    <Container>
       <Head>
         <title>Home - Grafisaholic.com</title>
       </Head>
       <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
       >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={3} as="h1" size="2xl">Hi, I'm Khabibur Rokhman</Heading>
          <Text color={colorSecondary[colorMode]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard's dummy text ever since the 1500s.</Text>
        </Flex>
       </Stack>
    </Container>
  )
}
