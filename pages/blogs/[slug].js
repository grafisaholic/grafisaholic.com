import Head from 'next/head';
import { Box, VStack } from "@chakra-ui/layout";

import PostBody from '../../components/blogs/PostBody';
import Container from '../../components/Container';

import { getAllPosts, getPostBySlug } from "../../lib/post";
import markdownToHtml from '../../lib/markdown-to-html';


const BlogPostPage = ({ post }) => {
    if (post) {
        const { title, desc, category, published_at, header_image, slug, content } = post

        return (
            <Container>
                <Head>Blogs - {title}</Head>
                <VStack
                    as="main"
                    alignItems="flex-start"
                    m="0 auto 0 auto"
                    maxWidth="700px"
                >
                    <Box 
                        as="main" 
                        display="block" 
                        flex="1 1 auto" 
                        position="relative" 
                        p={0}
                    >
                        <PostBody content={content} />
                    </Box>
                </VStack>
            </Container>
        )
    }
}
export async function getStaticProps(page) {
    if (page.params) {
        const post = getPostBySlug([page.params.slug], ['title', 'desc', 'slug', 'published_at', 'category', 'content']);

        const content = await markdownToHtml(post.content || '');
        return {
            props: {
                post: { 
                    ...post,
                    content
                }
            }
        }
    }
}

export async function getStaticPaths () {
    const posts = getAllPosts(['slug'])
    
    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug.split('/').filter(Boolean)[0]
                }
            }
        }),
        fallback: false
    }
}

export default BlogPostPage;