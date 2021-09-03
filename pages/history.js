import {
  useColorMode,
  Box,
  Heading,
  Flex,
  VStack,
  Stack
} from '@chakra-ui/react'
import { BsBriefcaseFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'

import Container from '../components/Container';
import PageTitle from '../components/_partials/pageTitle';
import CareerCard from '../components/history/Career';

// 
import {careerHistory, educationHistory} from '../data/data'; 

export default function History() {

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
          <Heading>
            <Flex align="center">
              <Box as={BsBriefcaseFill} fontSize="27px" mr={3} />
              <PageTitle underlineColor='#06b6d4' mt={0} mb={0} fontSize="3xl">
                Career
              </PageTitle>
            </Flex>
          </Heading>
        </Box>
        <VStack
          spacing={4}
          marginBottom={6}
          align="left"
          w="100%"
          mx={[0, 0, 6]}
          mt={12}
        >
          {
            careerHistory.map((c, index) => (
              <CareerCard 
                title={c.company}
                desc={c.position}
                key={index}
                {...c}
              />
            ))
          }
        </VStack>

        <Box>
          <Heading>
            <Flex align="center">
              <Box as={FaGraduationCap} fontSize="30px" mr={3} />
              <PageTitle underlineColor='#06b6d4' mt={0} mb={0} fontSize="3xl">
                Education
              </PageTitle>
            </Flex>
          </Heading>
        </Box>
        <VStack
          spacing={4}
          marginBottom={6}
          align="left"
          w="100%"
          mx={[0, 0, 6]}
          mt={12}
        >
          {
            educationHistory.map((c, index) => (
              <CareerCard 
                title={c.university}
                desc={c.studyProgram}
                key={index}
                {...c}
              />
            ))
          }
        </VStack>
      </Stack>
    </Container>
  )
}
