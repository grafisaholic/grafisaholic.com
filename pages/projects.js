import Head from 'next/head';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container';
import FeaturedProjectItem from '../components/projects/FeaturesProjects';

export default function projects() {
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
            Projects
          </Heading>

          <Text mb={5} color={colorSecondary[colorMode]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard's dummy text ever since the 1500s.</Text>
        
          {/* Fureature Project */}
          <Heading letterSpacing="tight" as="h2" size="lg" mb={4}>
            Featured Projects
          </Heading>
          <FeaturedProjectItem
            title="Title 1"
          >
            Coffeeclass is a tutorial website I started to teach programming and computer science skills in a fun and easy to learn manner.
          </FeaturedProjectItem>
          
          <FeaturedProjectItem
            title="Title 2"
          >
            Coffeeclass is a tutorial website I started to teach programming and computer science skills in a fun and easy to learn manner.
          </FeaturedProjectItem>
        </Flex>
      </Stack>
    </Container>
  )
}