import {
  Stack,
  Flex,
  Text,
  Box,
  useColorModeValue,
  Link,
  IconButton,
  useColorMode
} from '@chakra-ui/react'

import siteConfig from '../../data/site-config';

const Footer = () => {
  const {colorMode} = useColorMode();
  const colorSecondary = {
    light: 'gray:700',
    dark: 'gray:400'
  }
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "85%", "80%"]}
      maxW={800}
      mx="auto"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
      >
        <Text
          textAlign="center"
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.200")}
        >
          © {new Date().getFullYear()} Khabibur Rokhman{" "}
        </Text>

        <Box textAlign="center">
          {
            siteConfig.accounts.map((src, index) => (
              <IconButton 
                as={Link}
                key={index}
                isExternal
                href={src.url}
                aria-label={src.label}
                size="md"
                colorScheme={src.color}
                icon={src.icon}
                variant= "ghost"
                isRound= "true"
              />
            ))
          }
        </Box>
      </Flex>
    </Stack>
  )
} 

export default Footer