import {
  useColorMode,
  Heading,
  Center,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  Icon,
  TabList,
  Text,
  Box,
  SimpleGrid,
  VStack,
  HStack
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {
  AiFillAppstore,
  AiOutlineDesktop,
  AiOutlineCloudSync
} from 'react-icons/ai'
import {HiOutlinePhotograph} from 'react-icons/hi'

import Container from '../components/Container'
import SkillsCard from '../components/skils/Skils-card'

import { skillsArray } from '../data/data'

export function getStaticProps() {
  return {
    props: {
      skills: skillsArray
    }
  }
}

export default function TechStack() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsArray)
  }, [])

  const filterSkill = (tab) => {
    if (tab.length) {
      setSkills(skillsArray.filter((skill) => skill.type === tab))
    }else {
      setSkills(skillsArray)
    }
  }

  const {colorMode} = useColorMode();
  const colorSecondary = {
    light: 'gray:700',
    dark: 'gray:400'
  }

  return (
    <Container>
      <VStack spacing={8}>
        <Center as="section" w="100%">
          <VStack>
            <Heading letterSpacing="tight" as="h1" size="xl">
              Tech Stack
            </Heading>

            <Text mb={5} color={colorSecondary[colorMode]}>A list of my favorite tools and technologies that I use on work.</Text>
          </VStack>
        </Center>
        <Center as="section" as="section">
          <Tabs variant="soft-rounded" colorScheme="green" align="center">
            <TabList display="flex" flexWrap="wrap">
              <Tab
                _selected={{
                  color: "green.800",
                  bg: "green.100"
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkill('')}
              >
                <HStack spacing={1}>
                  <Icon as={AiFillAppstore} />
                  <Text>All</Text>
                </HStack> 
              </Tab>
              <Tab
                _selected={{
                  color: "green.800",
                  bg: "green.100"
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkill('development')}
              >
                <HStack spacing={1}>
                  <Icon as={AiOutlineDesktop} mr={1}/>
                  <Text>Web Development</Text>
                </HStack>
              </Tab>
              <Tab
                _selected={{
                  color: "green.800",
                  bg: "green.100"
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkill('design')}
              >
                <HStack spacing={1}>
                  <Icon as={HiOutlinePhotograph} />
                  <Text>Design</Text>
                </HStack>
              </Tab>
              <Tab
                _selected={{
                  color: "green.800",
                  bg: "green.100"
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkill('devops')}
              >
                <HStack spacing={1}>
                  <Icon as={AiOutlineCloudSync} />
                  <Text>DevOps</Text>
                </HStack>
              </Tab>
            </TabList>
            <TabPanels minHeight={"45vh"}>
              <TabPanel>
                <Box initial="hidden" animate="visible">
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {
                      skills.map((skill, index) => (
                        <SkillsCard 
                          key={index}
                          title={skill.title}
                          description={skill.description}
                          link={skill.link}
                          image={skill.image}
                        />
                      ))
                    }
                  </SimpleGrid>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box initial="hidden" animate="visible">
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {
                      skills.map((skill, index) => (
                        <SkillsCard 
                          key={index}
                          title={skill.title}
                          description={skill.description}
                          link={skill.link}
                          image={skill.image}
                        />
                      ))
                    }
                  </SimpleGrid>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box initial="hidden" animate="visible">
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {
                      skills.map((skill, index) => (
                        <SkillsCard 
                          key={index}
                          title={skill.title}
                          description={skill.description}
                          link={skill.link}
                          image={skill.image}
                        />
                      ))
                    }
                  </SimpleGrid>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box initial="hidden" animate="visible">
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {
                      skills.map((skill, index) => (
                        <SkillsCard 
                          key={index}
                          title={skill.title}
                          description={skill.description}
                          link={skill.link}
                          image={skill.image}
                        />
                      ))
                    }
                  </SimpleGrid>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </VStack>
    </Container>
  )
}

