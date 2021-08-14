import {
  Box,
  useColorModeValue,
  Flex,
  Image,
  Stack,
  Text,
  Tag,
  TagLabel,
  useColorMode,
  Heading
} from '@chakra-ui/react';
const CareerCard = () => {
  const {colorMode} = useColorMode();
  const colorSecondary = {
    light: 'gray:700',
    dark: 'gray:400'
  }

  return (
    <Box
      px={4}
      py={5}
      borderWidth="1px"
      _hover={{ shadow: "lg" }}
      bg={useColorModeValue("white", "gray.800")}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image 
            rounded="full"
            w={16}
            h={16}
            objectFit="cover"
            fallbackSrc=''
            src=''
            alt=''
          />
          <Stack spacing={2} pl={3} align="left">
            <Heading align="left" fontSize="xl" color={colorSecondary[colorMode]}>
              Career 1
            </Heading>
            <Heading align="left" fontSize="sm" color={colorSecondary[colorMode]}>
              Senior Software Engineer
            </Heading>

            <Stack
              spacing={1}
              mt={3}
              isInline
              alignItems="center"
              display={["none", "none", "flex", "flex"]}
            >
              <Tag
                size="sm"
                borderRadius="full"
                variant="outline"
                colorScheme="cyan"
              >
                <TagLabel>Javascript</TagLabel>
              </Tag>
              <Tag
                size="sm"
                borderRadius="full"
                variant="outline"
                colorScheme="cyan"
              >
                <TagLabel>Node Js</TagLabel>
              </Tag>
            </Stack>
          </Stack>
        </Flex>
        <Stack display={["none", "none", "flex", "flex"]}>
          <Text fontSize={14} color={colorSecondary[colorMode]} align="right">2018 - 2019</Text>
        </Stack>
      </Flex>

    </Box>
  )
}

export default CareerCard;