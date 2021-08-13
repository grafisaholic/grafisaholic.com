import { useState } from 'react';
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  useColorMode,
  Image
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const FeaturedProjectItem = ({title, children}) => {
  const {colorMode} = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  }

  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  
  const boxShadowColor = {
      light: '0px 8px 26px rgba(0, 0, 0, 0.1)',
      dark: '0px 8px 26px rgba(0, 0, 0, 0.9)'
  }
  
  const [opacity, setOpacity] = useState(0)

  return (
    <Link
      href='/projects'
      title={title}
      isExternal
      _hover={{
          boxShadow: boxShadowColor[colorMode],
          textDecoration: 'none'
      }}
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
            <Heading 
              as="h4"
              fontSize="md"
              fontWeight="bold"
              mb={2}
            >
              {title}
            </Heading>
            <ExternalLinkIcon opacity={opacity} fontSize="2xl" />
          </Flex>

          <Text color={colorSecondary[colorMode]}>{children}</Text>
        </Stack>
      </Flex>
    </Link>
  )
}

export default FeaturedProjectItem;