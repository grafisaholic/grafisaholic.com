import {
    Box,
    Stack,
    Text
} from '@chakra-ui/react'

const PostBody = ({ content, containerSize = 'md', spacing = 'md', children }) => {
    if (content) {
        return (
            <Box as="section" p="lg" pb={96}>
                <Box size={containerSize}>
                    <Stack spacing={spacing} className="e-content">
                        {content}
                        <Text>Comming soon !</Text>
                    </Stack>
                </Box>
            </Box>
        )
    }
}

export default PostBody