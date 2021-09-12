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

import { openSource } from '../data/projects';
import { allProjects } from '../data/projects'

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
            {
              allProjects.map((pro, index) => (
                <ProjectItem 
                  key={index}
                  title={pro.title}
                  desc={pro.desc}
                  link={pro.link}
                  {...pro.technologies}
                />
              ))
            }
          </Stack>
        </Box>

        <Box>
          <Heading fontWeight={700}>
            <PageTitle underlineColor='#06b6d4' mt={0} fontSize="3xl">
              Open Source
            </PageTitle>
          </Heading>

          <Stack spacing="lg" width="700px">
            {
              openSource.map((os, index) => (
                <ProjectItem 
                  key={index}
                  title={os.title}
                  desc={os.desc}
                  link={os.link}
                  {...os.dependencies}
                />
              ))
            }
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}