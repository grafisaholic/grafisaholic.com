import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
  Avatar,
  Box
} from '@chakra-ui/react'

import Container from '../components/Container';
import PageTitle from '../components/_partials/pageTitle';
import FeaturedProjectCard from '../components/projects/FeaturesProjects';
import PostListItem from '../components/blogs/PostListItems';

import { FeaturedProjects } from '../data/projects';
import { getFeaturedPost } from '../lib/post'

export async function getStaticProps() {
  const featuredPost = getFeaturedPost(3)
  return {
    props: { featuredPost }
  }
}

export default function Index({ featuredPost }) {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.600',
    dark: 'gray.400'
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
        m="0 auto 0 auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          align="center"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          px={4}
        >
          <Flex direction={["column", "column", "row"]}>
            <Box
              initial={{
                translateX: -150,
                opacity: 0
              }}
              animate={{
                translateX: 0,
                opacity: 1,
                transition: {
                  duration: 0.5
                }
              }}
              m="auto"
              mb={[16, 16, "auto"]}
            >
              <Avatar
                size={"2xl"}
                // src={UserIcon}
                src={"/assets/avatar.png"}
              />
            </Box>
            <Flex
              ml={["auto", "auto", 16]}
              m={["auto", "initial"]}
              w={["90%", "85%", "80%"]}
              maxW="800px"
              justify="center"
              direction="column"
              initial={{
                translateX: 150
              }}
              animate={{
                opacity: 1,
                translateX: 0,
                transition: {
                  duration: 0.5
                }
              }}
            >
              <Heading mb={3} as="h1" size="2xl" >Hey !</Heading>
              <Text size="sm" color={colorSecondary[colorMode]}>
                  My name is 
                  <Text m={1} as="strong">
                    Khabibur Rokhman
                  </Text>
                  and I'm Junior Full Stack Web Developer, Skilled SQL, MongoDB, Node.js, and want to try to learn more.
                </Text>
            </Flex>
          </Flex>
        </Flex> 


        {/* FEATURED POST */}
        <Flex mt={4} w="100%" direction={["column", "column", "row"]}>
          <Box>
            <Heading>
              <Flex align="center">
                <PageTitle underlineColor='#06b6d4' mt={0} mb={0} fontSize="2xl">
                  Featured Post
                </PageTitle>
              </Flex>
            </Heading>
            <SimpleGrid 
              mt={3}
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              px={4}
            >
              {
                featuredPost.map((post, index) => (
                  <PostListItem key={index} post={post} />
                ))
              }
            </SimpleGrid>
          </Box>
        </Flex>

        {/* FAETURED PROJECT */}
        <Flex mt={6} direction={["column", "column", "row"]}>
          <Box>
            <Heading>
              <Flex align="center">
                <PageTitle underlineColor='#06b6d4' mt={0} mb={0} fontSize="2xl">
                  Featured Project
                </PageTitle>
              </Flex>
            </Heading>
            <SimpleGrid mt={3} >
              {
                FeaturedProjects.map((project, index) => (
                  <FeaturedProjectCard title={project.title} key={index} {...project}>
                    {project.desc}
                  </FeaturedProjectCard>
                ))
              }
            </SimpleGrid>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}
