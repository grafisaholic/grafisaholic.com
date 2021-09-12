import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter'

// Regex to parse date and title from the filename
const BLOG_POST_SLUG_REGEX = /^(.+)\.md$/

export function getContentDirectory(dir) {
    return path.join(process.cwd(), dir);
}

export function getPostPaths() {
    return fs.readdirSync(path.join(getContentDirectory('data'), 'posts'))
}

export function getPostParams(slug) {
    const match = slug.match(BLOG_POST_SLUG_REGEX);

    if (match) {
        const [,actualSlug] = match
        return [actualSlug]
    }

    return []
}

export function getPostBySlug(paths, fields) {
    const [ slug ] = paths
    const actualSlug = `${slug}.md`
    const contents = fs.readFileSync(path.join(getContentDirectory('data'), 'posts', actualSlug))
    const {data, content} = matter(contents);

    let items = {};
    fields.forEach(field => {
        if (field == 'slug') {
            items[field] = slug
        }

        if (field == 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    }); 

    return items;
}

export function getAllPosts() {
    const slugs = getPostPaths();
    const posts = slugs
                    .map((slug) => getPostBySlug(getPostParams(slug), ['title', 'desc', 'slug', 'published_at', 'category', 'featured']))
                    .sort((post1, post2) => Date.parse(post1.published_at) - Date.parse(post2.published_at))
    return posts
}

export function getFeaturedPost(limit = 3) {
    return getAllPosts()
        .filter((post) => post.featured)
        .slice(0, limit)
}