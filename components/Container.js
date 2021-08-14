import React from 'react';
import {
    useColorMode,
    Flex,
    Box
} from '@chakra-ui/react';

// component
import Header from './_partials/Header';
import Footer from './_partials/Footer';

const Container = ({ children }) => {	
    const { colorMode } = useColorMode()	
    const bgColor = {	
        light: 'white',	
        dark: '#171717'	
    }	
    const color = {	
        light: 'black',	
        dark: 'white'	
    }	
    
    return (	
        <>	
          <Header />
          {/* <Flex	
              as="main"	
              justifyContent="center"	
              flexDirection="column"	
              bg={bgColor[colorMode]}	
              color={color[colorMode]}	
              px={[0, 4, 4]}	
              mt={[4, 8, 8]}	
          >	
              {children}	
          </Flex>	 */}
          <Box
            fontSize="xl"
            w={["90%", "85%", "80%"]}
            flexDirection="column"	
            bg={bgColor[colorMode]}	
            color={color[colorMode]}	
            as="main"
            maxW={800}
            mx="auto"
          >
            <Box pb={10}>
              {children}
            </Box>
          </Box>
          <Footer />
        </>	
    )	
}	


export default Container;