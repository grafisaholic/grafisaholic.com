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
const CareerCard = ({title, desc, ...props}) => {
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
            src={props.icon}
            alt={title}
          />
          <Stack spacing={2} pl={3} align="left">
            <Heading align="left" fontSize="xl" color={colorSecondary[colorMode]}>
              {title}
            </Heading>
            <Heading align="left" fontSize="sm" color={colorSecondary[colorMode]}>
              {desc}
            </Heading>

            <Stack
              spacing={1}
              mt={3}
              isInline
              alignItems="center"
              display={["none", "none", "flex", "flex"]}
            >
              {
                props.technology ? (
                  props.technology.map((tech, index) => (
                    <Tag
                      size="sm"
                      borderRadius="10"
                      variant="outline"
                      key={index}
                    >
                      <TagLabel>{tech}</TagLabel>
                    </Tag>
                  ))
                ) : ''
              }
            </Stack>
          </Stack>
        </Flex>
        <Stack display={["none", "none", "flex", "flex"]}>
          <Text fontSize={14} color={colorSecondary[colorMode]} align="right">{props.startDate} - {props.endDate}</Text>
        </Stack>
      </Flex>

    </Box>
  )
}

export default CareerCard;