import {
  Box
} from '@chakra-ui/react'

export default function PageTitle({children, underlineColor, ...props}) {
  return (
    <Box
      mt={10}
      mb={6}
      lineHeight="shorter" 
      fontWeight="bold" 
      {...props} 
      textAlign="left"
    >
      <Box as="span" display="inline-block" position="relative">
        {children}
        <Box as="span" display="block" position="absolute" bg={'gray.200'} w={'100%'} h={props.h || '1px'} bottom={-1} />
      </Box>
    </Box>
  )
}