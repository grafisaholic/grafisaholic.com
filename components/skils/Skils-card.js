import { 
  HStack,
  useColorMode,
  Box,
  Image,
  VStack,
  Text,
  Link
} from "@chakra-ui/react";
import NextLink from "next/link";
import { usePalette } from 'react-palette'

const SkillsCard = ({title, description, link, image}) => {
  const {colorMode} = useColorMode();
  const {data} = usePalette(image)

  const bgColor = {
    light: "white",
    dark: "gary:800"
  }
  const borderColor = {
    light: "gray:100",
    dark: "gary:700"
  }
  const descColor = {
    light: "gray:600",
    dark: "gary:400"
  }

  return (
    <Box variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }}
    >
      <Box whileHover={{ y: -5}}>
        <NextLink href={link} passHref>
          <Link isExternal>
            <HStack
              p={4}
              bg={bgColor[colorMode]}
              rounded="xl"
              borderWidth="1px"
              borderColor={borderColor[colorMode]}
              w="100%"
              textAlign="left"
              align="start"
              spacing={4}
              _hover={{ shadow: "md" }}
            >
              <Box
                rounded="lg"
                p={2}
                position="relative"
                overflow="hidden"
                lineHeight={0}
                boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
              >
                <Box
                  bg={data.lightVibrant}
                  position="absolute"
                  top={0}
                  bottom={0}
                  left={0}
                  right={0}
                  opacity={0.25}
                ></Box>
                <Image 
                  src={image}
                  height={26}
                  width={26}
                  layout="fixed"
                  rounded="md"
                />
              </Box>
              <VStack
                align="start"
                justify="flex-start"
                spacing={1}
                maxW="lg"
                h="100%"
              >
                <VStack spacing={0} align="start" flexGrow={1}>
                  <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                    {title}
                  </Text>

                  <Text
                    fontSize="sm"
                    color={descColor[colorMode]}
                  >
                    {description}
                  </Text>
                </VStack>
              </VStack>
            </HStack>
          </Link>
        </NextLink>
      </Box>
    </Box>
  )
}

export default SkillsCard;