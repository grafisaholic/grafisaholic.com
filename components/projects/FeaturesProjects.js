import { useState } from 'react';
import {
  Flex,
  Link,
  Text,
  Stack,
  Tag,
  HStack,
  useColorMode,
  Image
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const FeaturedProjectItem = ({title, children, ...props}) => {
  const {colorMode} = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  }
  const descColor = {
    light: 'gray.600',
    dark: 'gray.400'
  }
  
  const boxShadowColor = {
      light: '0px 8px 26px rgba(0, 0, 0, 0.1)',
      dark: '0px 8px 26px rgba(0, 0, 0, 0.9)'
  }
  
  const [opacity, setOpacity] = useState(0)

  return (
    <HStack
      title={title}
      _hover={{
          boxShadow: boxShadowColor[colorMode],
          textDecoration: 'none'
      }}
      spacing={4}
      w="100%"
      mt={4}
      onMouseOver={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      <Flex
        align="center"
        border="1px solid"
        borderColor={borderColor[colorMode]}
        borderRadius={4}
        p={4}
      >
        <Image 
          src='https://www.benjamincarlson.io/images/coffee-only-transparent-bg.png'
          alt='projects 1'
          width={["40px", "50px", "60px"]}
          ml={2}
          mr={4}
        />

        <Stack>
          <Flex justify="space-between">
            <Link
              href="/projects" 
              as="h4"
              fontSize="md"
              fontWeight="bold"
              mb={2}
            >
              {title}
            </Link>
            <ExternalLinkIcon opacity={opacity} fontSize="2xl" />
          </Flex>

          <Text color={descColor[colorMode]} fontSize="sm" >{children}</Text>
          <HStack spacing="1">
            {
              props.technologies.map((tech, index) => (
                <Tag size="sm" key={index}>
                  {tech}
                </Tag>
              ))
            }
          </HStack>
        </Stack>
      </Flex>
    </HStack>
  )
}

export default FeaturedProjectItem;