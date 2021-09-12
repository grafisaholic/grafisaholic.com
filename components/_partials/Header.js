
import {
  useColorMode,
  Button,
  Avatar,
  Link,
  Flex,
  Box
} from '@chakra-ui/react'
import styled from '@emotion/styled';
import NextLink from 'next/link';

import DarkModeSwitch from '../DarkModeSwitch';

const Header = () => {
  const {colorMode} = useColorMode();

  const StickyNav = styled(Flex)`	
      position: sticky;	
      z-index: 10;	
      top: 0;	
      backdrop-filter: saturate(180%) blur(20px);	
      transition: height .5s, line-height .5s;	
  `;

  const navHoverBg = {	
    light: 'teal.50',	
    dark: 'gray.300',	
  }	

  const bgColor = {	
    light: 'white',	
    dark: '#171717'	
  }	
  
  return (
    <StickyNav	
        flexDirection="row"	
        justifyContent="space-between"	
        alignItems="center"	
        maxWidth="800px"	
        minWidth="356px"	
        width="100%"	
        bg={bgColor[colorMode]}	
        as="nav"	
        px={[2, 6, 6]}	
        py={2}	
        mt={8}	
        mb={[0, 0, 8]}	
        mx="auto"	
    >	
        <Box>	
            <NextLink href={"/"} passHref>
                <Avatar
                    as={Link}
                    size={"sm"}
                    mt={1}
                    mr={3}	
                    // src={UserIcon}
                    src={"/assets/avatar.png"}
                />
            </NextLink>
            <NextLink href="/about" passHref>	
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>	
                    About	
                </Button>	
            </NextLink>	
            <NextLink href="/blogs" passHref>	
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>	
                    Blogs
                </Button>	
            </NextLink>	
            <NextLink href="/projects" passHref>	
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>	
                    Projects	
                </Button>	
            </NextLink>	
            <NextLink href="/tech-stack" passHref>	
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>	
                    Tech Stack	
                </Button>	
            </NextLink>	
            <NextLink href="/history" passHref>	
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>	
                    Historys
                </Button>	
            </NextLink>	
        </Box>	
        <DarkModeSwitch />	
    </StickyNav >	
  )
}

export default Header