import Head from 'next/head';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box
} from '@chakra-ui/react'

import Container from '../components/Container';
import PageTitle from '../components/_partials/pageTitle';
import ProjectItem from '../components/projects/ProjectItem';

export default function Projects() {
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
        <Box>
          <Heading fontWeight={700}>
            <PageTitle underlineColor='#06b6d4' mt={0} fontSize="3xl">
              Portofolio
            </PageTitle>
          </Heading>

          <Stack spacing="lg">
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </Stack>
        </Box>

        <Box>
          <Heading fontWeight={700}>
            <PageTitle underlineColor='#06b6d4' mt={0} fontSize="3xl">
              Open Source
            </PageTitle>
          </Heading>

          <Stack spacing="lg">
            <ProjectItem />
            <ProjectItem />
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}