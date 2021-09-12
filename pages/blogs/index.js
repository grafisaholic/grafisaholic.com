import Head from 'next/head';
import {
  useColorMode,
  Heading,
  Text,
  Center,
  VStack
} from '@chakra-ui/react';

import Container from '../../components/Container';
import PostListItem from '../../components/blogs/PostListItems';

import { getAllPosts } from '../../lib/post'

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { allPosts }
  }
}

export default function Blogs({ allPosts }) {
  const {colorMode} = useColorMode();
  const colorSecondary = {
    light: 'gray:700',
    dark: 'gray:400'
  }

  return (
    <Container>
      <Head>Blogs - Grafisaholic.com</Head>
      <VStack
        as="main"
        alignItems="flex-start"
        m="0 auto 0 auto"
        maxWidth="700px"
      >
        <Center as="section" w="100%" mb={5}>
          <VStack>
            <Heading letterSpacing="tight" as="h1" size="xl">
              Blogs
            </Heading>

            <Text mb={5} color={colorSecondary[colorMode]}>Some interesting things that hopefully can make you feel at home here.</Text>
          </VStack>
        </Center>

        {
          allPosts.map((post, index) => (
            <PostListItem key={index} post={post} />
          ))
        }

      </VStack>
    </Container>
  )
}